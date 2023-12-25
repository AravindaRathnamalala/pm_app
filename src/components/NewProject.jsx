import { useRef } from "react";
import Input from "./Input";

export default function NewProject({onAdd}) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value
    const enteredDescription = descriptionRef.current.value
    const enteredDueDate = dueDateRef.current.value

    onAdd({
        title: enteredTitle,
        description: descriptionRef,
        dueDate: dueDateRef
    })

    // validation to be done
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-md bg-stone-800 hover:bg-stone-950 text-stone-50"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} label={"Title"} />
        <Input ref={descriptionRef} label={"Description"} textArea />
        <Input type='date' ref={dueDateRef} label={"Due Date"} />
      </div>
    </div>
  );
}
