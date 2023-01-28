import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import Modal from ".";
import { Tasks } from '../../types/Task';
import { Input } from '../Utilities/Input';
import { InputCheckBox } from '../Utilities/InputCheckBox';
import InputGroup from '../Utilities/InputGroup';
import { TextArea } from '../Utilities/TextArea';

type CreateTaskFormData = {
    title: string;
    date: string;
    description: string;
    important: boolean;
    completed: boolean;
    dir: string;
};

interface ModalNewTasksProps {
    nameForm: string;
    task?: Tasks;
    onClose: () => void;
    onConfirm?: (task: Tasks) => void;
};

const createTaskFormSchema = yup.object().shape({
    title: yup.string().required('Titulo obrigatorio'),
    date: yup.string().required('Data obrigatoria'),
    description: yup.string().required('Descrição obrigatoria'),
});

export default function ModalNewTasks({ onClose, task, nameForm, onConfirm }: ModalNewTasksProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<CreateTaskFormData>({
        resolver: yupResolver(createTaskFormSchema)
    });

    const [title, setTitle] = useState<string>(() => {
        if (task) return task.title;
        return '';
    });
    const [date, setDate] = useState<string>(() => {
        if (task) return task.date;
        return '';
    });
    const [description, setDescription] = useState<string>(() => {
        if (task) return task.description;
        return '';
    });
    const [dir, setDir] = useState<string>(() => {
        if (task) return task.dir;
        return '';
        // return dir[0];
    });
    const [isImportant, setIsImportant] = useState<boolean>(() => {
        if (task) return task.important;
        return false;
    });
    const [isCompleted, setIsCompleted] = useState<boolean>(() => {
        if (task) return task.completed;
        return false;
    });

    const handleCreateTask = (values: CreateTaskFormData) => {
        console.log(JSON.stringify(values));
    };

    return (
        <Modal
            title={nameForm}
            onClose={onClose}
        >
            <form
                className="flex flex-col stylesInputsField"
                onSubmit={handleSubmit(handleCreateTask)}
            >
                <InputGroup label="Titulo">
                    <Input
                        type="text"
                        value={title}
                        placeholder="exp: estudar para prova"
                        errors={errors.title}
                        {...register('title')}
                        onChange={({ target }: { target: any }) => {
                            setTitle(target.value);
                        }}
                    />
                </InputGroup>

                <InputGroup label="Data">
                    <Input
                        type="date"
                        value={date}
                        errors={errors.date}
                        {...register('date')}
                        onChange={({ target }: { target: any }) => {
                            setDate(target.value);
                        }}
                    />
                </InputGroup>

                <InputGroup label="Descrição">
                    <TextArea
                        placeholder='exp: estudar 1hr de ingles'
                        value={description}
                        error={errors.description}
                        {...register('description')}
                        onChange={({ target }: { target: any }) => {
                            setDescription(target.value);
                        }}
                    />
                </InputGroup>

                <InputGroup label="Selecionar diretorio">
                    <select
                        className='bg-slate-100 text-slate-600 placeholder:text-slate-400 hover:border-pink-600 focus:border-pink-600'
                        value={dir}
                        {...register('dir')}
                        onChange={({ target }: { target: any }) => {
                            setDir(target.value);
                        }}
                    >
                        <option value="master">master</option>
                    </select>
                </InputGroup>

                <div className='flex flex-col gap-4'>
                    <InputCheckBox
                        isChecked={isImportant}
                        setIsChecked={setIsImportant}
                        label="Marcar como importante"
                        {...register('important')}
                    />

                    <InputCheckBox
                        isChecked={isCompleted}
                        setIsChecked={setIsCompleted}
                        label="Marcar como completo"
                        {...register('completed')}
                    />
                </div>

                <button type="submit" className="btn mt-5 bg-pink-600 hover:bg-pink-700 py-3 px-6 text-slate-50 rounded-lg w-auto transition">
                    {nameForm}
                </button>
            </form>
        </Modal>
    )
}