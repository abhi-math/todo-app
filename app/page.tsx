"use client";

import Card from "@/components/Card";
import InputCard from "@/components/InputCard";
import { useState } from "react";

export default function Home() {
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    if (!todo) return;
    setTodoList((prev) => [...prev, todo]);
  };

  const deleteTodo = (index: number) => {
    console.log("Deleting Todo:", index, todoList[index]);
    setTodoList((prev) => prev.filter((t, ind) => ind !== index));
  };

  return (
    <>
      <InputCard addTodo={addTodo} />
      <Card todoList={todoList} deleteTodo={deleteTodo} />
    </>
  );
}
