import { useState } from "react";
import Modal from ".";
import { Input } from "../Utilities/Input";
import InputGroup from "../Utilities/InputGroup";
import * as yup from "yup";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";
import { Directry } from "../Sidebar/Directories";

interface ModalDirectoriesProps {
    nameForm: string;
    onClose: () => void;
};

type CreateDirectoryData = {
    id: string;
    title: string;
};

const createDirectoryFormSchema = yup.object().shape({
    title: yup.string().required('Titulo obrigatorio'),
});

export default function ModalDirectories({ onClose, nameForm }: ModalDirectoriesProps) {
    const [title, setTitle] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateDirectoryData>({
        resolver: yupResolver(createDirectoryFormSchema)
    });

    const ref = collection(db, 'directories');

    const handleCreateDirectory:  SubmitHandler<CreateDirectoryData> = () => {
        addDoc(ref, {
            dir: title, 
        });

        reset();
        onClose();
    };

    return (
        <Modal
            title={nameForm}
            onClose={onClose}
        >
            <form
                className="flex flex-col stylesInputsField"
                onSubmit={handleSubmit(handleCreateDirectory)}
            >
                <InputGroup label="Titulo">
                    <Input
                        type="text"
                        value={title}
                        placeholder="exp: estudar para prova"
                        errors={errors.title}
                        {...register('title')}
                        onChange={({ target }: { target: any }) => {
                            setTitle(target.value.replace(/[^\w\s]/gi, '').replace(/\s/g, ''));
                        }}
                    />
                </InputGroup>

                <button type="submit" className="btn mt-5 bg-pink-600 hover:bg-pink-700 py-3 px-6 text-slate-50 rounded-lg w-auto transition">
                    {nameForm}
                </button>
            </form>
        </Modal>
    )
}