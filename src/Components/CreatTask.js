import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function CreatTask({tasks, setTasks}) {

    const [task, setTask] = useState({
        id: "",
        name: "",
        status: ""
    });
    console.log(task)

    const handleSubmit = (e) => {
        e.preventDefault();

        setTasks((prev) => {
            const list = [...prev, task];

            localStorage.setItem("tasks", JSON.stringify(list))

            return list;
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="border-2 border-slate-800 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1"
                onChange={(e) => setTask({...task, id: uuidv4(), name: e.target.value})}
                value={task.name}
            />
            <button className="bg-cyan-500 rounded-md px-4 h-12 text-blue-950">Create</button>
        </form>
    );
}

export default CreatTask;