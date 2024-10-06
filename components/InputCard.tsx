"use client";
import React, { ReactElement, useState } from "react";

export default function InputCard({
  addTodo,
}: {
  addTodo: (todo: string) => void;
}): JSX.Element {
  const [todo, setTodo] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form
      className="bg-slate-100 border rounded-xl shadow-xl w-96 h-24 my-8 mx-auto flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="border-2 border-lime-200 rounded-xl mx-6 px-3 block focus:border-lime-400 focus:outline-none"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="border-2 border-lime-200 rounded-xl mr-6 px-2 block"
      >
        save
      </button>
    </form>
  );
}
