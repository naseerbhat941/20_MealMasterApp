import React from "react";

export default function ButtonComponent({ onClick, children }) {
  return (
    <button onClick={onClick} className="w-full p-2 bg-blue-500 text-white rounded-lg mt-4">
      {children}
    </button>
  );
}