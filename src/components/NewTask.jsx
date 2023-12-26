import { useState } from "react";

export default function NewTask({ onAdd }) {

  const [enteredValue, setEnteredValue] = useState();

  function handleChange(event) {
    setEnteredValue(event.target.value);
  }
  function handleClick() {
    onAdd(enteredValue)
    setEnteredValue('');
  }
  return (
    <div className="flex items-center gap-4 mt-4 mb-2">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredValue}
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
  );
}
