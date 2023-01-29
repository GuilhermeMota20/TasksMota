import { ActiveModelSerializer, createServer, Factory, Model, Response } from 'miragejs';
import { faker } from '@faker-js/faker';

type Task = {
    title: string;
    description: string;
    date: string;
    completed: boolean;
    important: boolean;
    dir: string;
}

export function makeServer() {
    const server = createServer({
        serializers: {
            application: ActiveModelSerializer,
        },

        models: {
            task: Model.extend<Partial<Task>>({}),
        },

        factories: {
            task: Factory.extend({
                title(i: number) {
                    return faker.name.findName();
                },
                date() {
                    return new Date();
                },
                description(i: number) {
                    return faker.commerce.productDescription();
                },
                dir() {
                    return 'master';
                },
                important() {
                    return true;
                },
                completed() {
                    return false;
                },
            })
        },

        seeds(server) {
            server.createList('task', 5);
        },

        routes() {
            this.namespace = 'api';
            this.timing = 3500;

            this.get('/AllTasks', function (schema, request) {
                const { page = 1, per_page = 4 } = request.queryParams;

                const total = schema.all('task').length;

                const pageStart = (Number(page) - 1) * Number(per_page);
                const pageEnd = pageStart + Number(per_page);

                const tasks = this.serialize(schema.all('task'))
                    .tasks.slice(pageStart, pageEnd);

                return new Response(
                    200,
                    { 'x-total-count': String(total) },
                    { tasks }
                );
            });

            this.get('/AllTasks/:id');
            this.post('/AllTasks');

            this.namespace = '';
            this.passthrough();
        },
    });

    return server;
}