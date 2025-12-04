"use client";
import { useOptimistic, startTransition } from "react";
import "../styles/taskList.css"; // Import the CSS file here

export default function TaskList({ tasks, addTask }) {
  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (state, newTask) => [...state, { text: newTask, pending: true }]
  );

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    startTransition(() => {
      addOptimisticTask(formData.get("task"));
    });

    addTask(formData);
    e.target.reset();
  }

  return (
    <div className="task-container">
      <h3 className="task-header" style={{color: "black"}}>Tasks</h3>
      
      <ul className="task-list">
        {optimisticTasks.map((task, index) => (
          <li key={index} className="task-item">
            {task.text}
            {task.pending && (
              <small className="task-pending">
                Adding Task...
              </small>
            )}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          name="task"
          placeholder="Type in a task..."
          className="task-input"
        />
        <button type="submit" className="task-button">
          Submit
        </button>
      </form>
    </div>
  );
}