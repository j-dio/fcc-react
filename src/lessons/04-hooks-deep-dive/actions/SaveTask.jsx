"use server";

export async function saveTask(task) {
  await new Promise((res) => setTimeout(res, 1000));
  return task;
}