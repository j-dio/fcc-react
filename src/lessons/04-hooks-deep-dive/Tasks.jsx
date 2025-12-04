"use client";
import { useState } from "react";
import TaskList from "./actions/TaskList";
import { saveTask } from "./actions/SaveTask";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  async function addTask(formData) {
    const newTaskText = formData.get("task");
    
    // FIX 2: Manually adding a pending state to the parent 
    // to simulate delay for better UX demonstration
    const tempTask = { id: Date.now(), text: newTaskText, pending: true };
    setTasks((prev) => [...prev, tempTask]);

    setTimeout(async () => {
      const savedTask = await saveTask(newTaskText);
      setTasks((prev) =>
        prev.map((task) =>
          task.id === tempTask.id
            ? { ...task, text: savedTask, pending: false }
            : task
        )
      );
    }, 1000);
  }

  return <TaskList tasks={tasks} addTask={addTask} />;
}