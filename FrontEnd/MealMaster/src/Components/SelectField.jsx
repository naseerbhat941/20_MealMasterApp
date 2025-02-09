import React from "react";

export default function SelectField({ name, options, onChange }) {
  return (
    <select name={name} onChange={onChange} className="p-2 border rounded-lg w-full mb-4">
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}