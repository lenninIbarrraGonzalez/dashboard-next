"use client";
import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(5);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span>Productos en el carrito</span>
      <span className="text-9xl">{count}</span>

      <div className="flex mt-5">
        <button
          className="flex items-center justify-center p-2 rounder-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] mr-2"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounder-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] mr-2"
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
      </div>
    </div>
  );
}
