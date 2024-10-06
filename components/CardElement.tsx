"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

export default function CardElement({
  index,
  text,
  deleteTodo,
  active,
}: {
  index: number;
  text: string;
  deleteTodo: (index: number) => void;
  active: number;
}) {
  const [isCompleted, setIsCompleted] = React.useState(false);

  const toggleComplete = () => {
    setIsCompleted((prev) => !prev);
  };

  return active == 0 ||
    (active == 1 && isCompleted) ||
    (active == 2 && !isCompleted) ? (
    <>
      <div
        className={`${
          isCompleted ? "border-lime-400" : "border-gray-400"
        } border-2 rounded-2xl  mx-4 my-2 px-2 flex justify-between hover:shadow-xl transition-shadow`}
      >
        <div
          onClick={toggleComplete}
          className="cursor-pointer text-2xl content-center"
        >
          {isCompleted ? (
            <FaCheckCircle className="text-green-400 text-sm" />
          ) : (
            <FaCircle className="text-gray-400 text-sm" />
          )}
        </div>
        <div className="mx-2 ">{text}</div>
        <div className="cursor-pointer text-2xl content-center">
          <GoTrash
            className="justify-end text-sm"
            onClick={() => {
              console.log(index);
              return deleteTodo(index);
            }}
          />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
