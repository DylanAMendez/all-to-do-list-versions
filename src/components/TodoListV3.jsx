

import { useState } from "react"

import { useLocalStorage } from "./localStorage/useLocalStorage";


const TodoListV3 = () => {
    const [tasks, setTask] = useLocalStorage('tasks', []); 
    const [taskInput, setTaskInput] = useState("");
    const [idTask, setIdTask] = useState(1);
  
    const addTask = () => {
      const newTask = { id: idTask, task: taskInput, taskFinish: false };
      setTask([...tasks, newTask]);
      setIdTask(idTask + 1);
      resetForm();
    };
  
    const deleteTask = (id) => {
      const deleteOneTask = tasks.filter((task) => task.id !== id);
      setTask(deleteOneTask);
    };
  
    const toggleTaskFinish = (id) => {
      setTask((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, taskFinish: !task.taskFinish } : task
        )
      );
    };
  
    const resetForm = () => {
      setTaskInput("");
    };
  
    return (

        <>
    
            <form onSubmit={(e) => 
                { 
                    e.preventDefault(); 
                    addTask() 
                }} >
    
                <label>Task: </label>
                <input 
                    type="text"
                    name="task"
                    id="task" 
                    required
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)} 
                    className=" bg-slate-700 "
                />
    
                <button type="submit">Add</button>
    
            </form>
    
            
            <ul>
    
                {tasks.map((t)=> (
                    <li key={t.id}>
                        <div className="flex flex-row justify-center gap-5">
                            <p className={t.taskFinish ? "panel-terminado" : "panel-noTerminado"} >{t.task}</p>
    
                            <button onClick={()=> deleteTask(t.id)}>Delete</button>
                            <button onClick={()=> toggleTaskFinish(t.id)} > Finish </button>
                        </div>
                        
                        
                    </li>
                ))}
    
            </ul>
    
    
        </>
    
      )
    }
    
    export default TodoListV3