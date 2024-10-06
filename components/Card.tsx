"use client";
import React from "react";
import CardElement from "./CardElement";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Card({
  todoList,
  deleteTodo,
}: {
  todoList: string[];
  deleteTodo: (index: number) => void;
}) {
  const [active, setActive] = useState<number>(0);

  const [searchText, setSearchText] = useState<string>("");

  const handleTabChange = (index: number) => {
    setActive(index);
  };

  const searchedTodos = todoList.filter((todo) =>
    todo.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="bg-slate-100 border rounded-xl shadow-xl w-96 min-h-72 my-4 mx-auto">
        <div className="mx-2 mt-2 px-3 flex  ">
          <div className="bg-lime-200 border-2 border-lime-300 flex items-center rounded-2xl px-1">
            <FaSearch className="text-sm" />
            <input
              type="text"
              className="rounded-2xl  focus:outline-none px-2"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
        <div className="mx-auto ">
          <button
            className={`${
              active == 0 ? "bg-lime-300" : ""
            } border-2 border-lime-200 rounded-xl m-4 px-2`}
            onClick={() => handleTabChange(0)}
          >
            All
          </button>
          <button
            className={`${
              active == 1 ? "bg-lime-300" : ""
            } border-2 border-lime-200 rounded-xl m-2 px-2`}
            onClick={() => handleTabChange(1)}
          >
            Completed
          </button>
          <button
            className={`${
              active == 2 ? "bg-lime-300" : ""
            } border-2 border-lime-200 rounded-xl m-2 px-2`}
            onClick={() => handleTabChange(2)}
          >
            Incomplete
          </button>
        </div>
        {searchedTodos.map((todo, index) => {
          return (
            <CardElement
              key={index}
              index={index}
              text={todo}
              deleteTodo={deleteTodo}
              active={active}
            />
          );
        })}
      </div>
    </>
  );
}
