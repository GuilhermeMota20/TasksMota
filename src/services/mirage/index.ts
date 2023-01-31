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
                    return faker.lorem.words(10);
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
            server.createList('task', 10);
        },

        routes() {
            this.namespace = 'api';
            this.timing = 750;

            this.get('/AllTasks', function (schema) {
                const tasks = this.serialize(schema.all('task'))
                    .tasks.slice();

                return new Response(
                    200,
                    { tasks }
                );
            });

            this.get('/AllTasks/:id');

            this.post('/AllTasks', (schema, request) => {
                const data = JSON.parse(request.requestBody);

                return schema.db.tasks.insert(data);
            });

            this.namespace = '';
            this.passthrough();
        },
    });

    return server;
}