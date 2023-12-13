import { useState } from "react";

const TodoListV2 = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [idTask, setIdTask] = useState(1);

  const addTask = () => {
    const newTask = { id: idTask, task: taskInput, taskFinish: false };

    setTasks([...tasks, newTask]);
    setIdTask(idTask + 1);

    resetForm();
  };

  const deleteTask = (id) => {
    const deleteOneTask = tasks.filter((t) => t.id !== id);
    setTasks(deleteOneTask);
  };

  const toggleTaskFinish = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, taskFinish: !task.taskFinish } : task
      )
    );
  };

  const resetForm = () => {
    setTaskInput("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <label>Task: </label>
        <input
          type="text"
          id="task"
          name="task"
          required
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="bg-slate-600 mx-2"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <div className="flex flex-row place-content-center gap-5 my-5">
              <p className={t.taskFinish ? "panel-terminado" : "panel-noTerminado"  }>
                {t.task}
              </p>
              <button onClick={() => deleteTask(t.id)} className="">
                Delete
              </button>
              <button onClick={() => toggleTaskFinish(t.id)}>Finish</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListV2;
