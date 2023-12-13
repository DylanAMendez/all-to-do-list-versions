

import { useState } from "react"


const TodoList = () => {

    const [tasks, setTasks] = useState([]);
    const [idTask, setIdTask] = useState(1);
    const [taskInput, setTaskInput] = useState("");

    const addTask = () =>
    {
        const newTask = { id: idTask, task: taskInput };

        setTasks( [ ...tasks, newTask ] );

        setIdTask(idTask + 1);

        resetForm();
    }

    const deleteTask = (id) =>
    {
        const deleteOneTask = tasks.filter( (t)=> t.id !== id );

        setTasks(deleteOneTask);
    }

    const resetForm = () =>
    {
        setTaskInput("");
    }

  return (

    <div>

        

        {/* ---enviar los datos--- */}
        <form 
        onSubmit={ (e) => 
            {
                e.preventDefault();
                addTask();
            }}>

        <label>Task:</label>
        <input
              type="text"
              id="task"
              name="task"
              required
              value={taskInput}
              onChange={ (e) => setTaskInput(e.target.value) }
              className=" bg-slate-500 mx-2 "
        />

        <button type="submit">Add</button>

        </form>

        {/* ---mostrar los datos--- */}
        <ul>
            {tasks.map( (t) => (
                <li key={t.id}>

                    {t.task}
                <button onClick={ ()=> deleteTask(t.id) } className="ml-5">Delete Task</button>

                </li>
            ) )}
        </ul>

    </div>


  )
}

export default TodoList