import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import Modal from ".";
import { Input } from '../Utilities/Input';
import { InputCheckBox } from '../Utilities/InputCheckBox';
import InputGroup from '../Utilities/InputGroup';
import { TextArea } from '../Utilities/TextArea';

type CreateTaskFormData = {
    title: string;
    date: string;
    description: string;
    isImportant: boolean;
    isCompleted: boolean;
    dir: string;
};

const createTaskFormSchema = yup.object().shape({
    title: yup.string().required('Titulo obrigatorio'),
    date: yup.string().required('Data obrigatoria'),
    description: yup.string().required('Descrição obrigatoria'),
});

// const handleCreateTask: SubmitHandler<CreateTaskFormData> = async (values) => {
//     await new Promise(resolve => setTimeout(resolve, 600));
//     console.log(values);
// };

const handleCreateTask = (values: CreateTaskFormData) => {
    console.log(JSON.stringify(values));
};

export default function ModalNewTasks() {
    const [isImportant, setIsImportant] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<CreateTaskFormData>({
        resolver: yupResolver(createTaskFormSchema)
    });

    return (
        <Modal
            title="Adicionar nova tarefa"
        // onClose={}
        >
            <form
                className="flex flex-col stylesInputsField"
                onSubmit={handleSubmit(handleCreateTask)}
            >
                <InputGroup label="Titulo">
                    <Input
                        type="text"
                        placeholder="exp: estudar para prova"
                        errors={errors.title}
                        {...register('title')}
                    />
                </InputGroup>

                <InputGroup label="Data">
                    <Input
                        type="date"
                        errors={errors.date}
                        {...register('date')}
                    />
                </InputGroup>

                <InputGroup label="Descrição">
                    <TextArea
                        placeholder='exp: estudar 1hr de ingles'
                        error={errors.description}
                        {...register('description')}
                    />
                </InputGroup>

                <InputGroup label="Selecionar diretorio">
                    <select
                        className='bg-slate-100 text-slate-600 placeholder:text-slate-400 hover:border-pink-600 focus:border-pink-600'
                        {...register('dir')}
                    >
                        <option value="master">master</option>
                    </select>
                </InputGroup>

                <div className='flex flex-col gap-4'>
                    <InputCheckBox
                        isChecked={isImportant}
                        setIsChecked={setIsImportant}
                        label="Marcar como importante"
                        {...register('isImportant')}
                    />

                    <InputCheckBox
                        isChecked={isCompleted}
                        setIsChecked={setIsCompleted}
                        label="Marcar como completo"
                        {...register('isCompleted')}
                    />
                </div>

                <button type="submit" className="btn mt-5 bg-pink-600 hover:bg-pink-700 py-3 px-6 text-slate-50 rounded-lg w-auto transition">
                    Adicionar nova tarefa
                </button>
            </form>
        </Modal>
    )
}