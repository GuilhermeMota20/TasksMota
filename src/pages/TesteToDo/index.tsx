import { addDoc, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Header from "../../components/Header";
import { colRef, db } from "../../Firebase";

export default function TesteToDo() {
    const [todos, setTodos] = useState([]);

    const [subject, setSubject] = useState('');
    const [completed, setCompleted] = useState('');

    useEffect(() => {

    }, []);

    // get queries data (filter datas)
    const q1 = query(colRef, where('completed', '==', 'completo'));
    //ordenation
    const q2 = query(colRef, orderBy('subject', 'asc'));
    const q3 = query(colRef, orderBy('createdAt'));

    // get todos in real time
    onSnapshot(q3, (snapshot) => {
        const todosArray = [];

        snapshot.docs.forEach((doc) => {
            todosArray.push({ ...doc.data(), id: doc.id });
        });

        setTodos(todosArray);
    });
    // console.log(todos);

    // Fetching a Single Document
    // const docRef = doc(db, 'todos', 'R72GGXmUjnurCBwdBwjA');
    // onSnapshot(docRef, (doc) => {
    //     console.log(doc.data(), doc.id);
    // })

    // create a new subject
    const handleSubmit = (e) => {
        e.preventDefault();

        if (subject !== '') {
            addDoc(colRef, {
                subject,
                completed,
                createdAt: serverTimestamp()
            });

            setSubject('');
        };
    };

    // delete subject
    const handleDelete = (id: string) => {
        deleteDoc(doc(db, 'todos', id))
    };

    // edit subject
    const handlOpenModeEdit = (id: string) => {
        const docRef = doc(db, 'todos', id);

        updateDoc(docRef, {
            subject,
            completed,
        });
    };

    return (
        <section className="text-slate-600 pt-5 pb-8 sm:pb-16 px-4 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen flex flex-col gap-6">
            <Header />
            <h1 className='text-2xl m-4 text-pink-600 font-bold'>Teste CRUD </h1>

            <div className="flex flex-col gap-8">
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            className="p-4 rounded-md"
                            placeholder="nome da tarefa"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />

                        <select
                            value={completed}
                            placeholder='Completo?'
                            className="p-4 rounded-md"
                            onChange={({ target }) => setCompleted(target.value)}
                        >
                            <option value='completo'>Completo</option>
                            <option value='incompleto' >Incompleto</option>
                        </select>
                        
                        <button className="p-4 rounded-md bg-pink-600 text-white transition hover:bg-pink-700">Add</button>
                    </div>
                </form>

                <ul className='flex flex-col gap-4'>
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className='p-4 bg-white rounded-md transition hover:shadow-md flex justify-between items-center'
                        >
                            <span>{todo.subject}</span>

                            <div className='flex items-center gap-8'>
                                <button
                                    className={`p-2 rounded-md transition
                                        ${todo.completed == 'completo'
                                            ? 'bg-green-200 hover:bg-green-300'
                                            : 'bg-red-200 hover:bg-red-300'} `}
                                >
                                    {todo.completed}
                                </button>

                                <button
                                    className='bg-slate-100 rounded-md p-2 transition hover:bg-slate-200'
                                    onClick={() => handlOpenModeEdit(todo.id)}
                                >edit</button>
                                <button
                                    className='bg-slate-100 rounded-md p-2 transition hover:bg-slate-200'
                                    onClick={() => handleDelete(todo.id)}
                                >delet</button>
                            </div>

                        </li>
                    ))}
                </ul>

                {todos.length <= 0 && (
                    <h1>Nao existem items na lista a serem exibidos.</h1>
                )}
            </div>

        </section>
    )
}