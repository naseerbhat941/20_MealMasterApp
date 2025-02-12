import React from "react";

export default function InputField({ type, name, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-2 border rounded-lg w-full mb-4"
    />
  );
}