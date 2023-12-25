import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    } else {
      onAdd({
        title: enteredTitle,
        description: descriptionRef,
        dueDate: dueDateRef,
      });
    }
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption={"Okay"}>
        <h2 className='text-xl font-bold text-stone-700 mt-4 my-4'>Invalid input</h2>
        <p className="text-stone-600 mb-4">Opps... Looks like you forgot to enter the vale</p>
        <p className="text-stone-600 mb-4">Please make sure you enter all inputs</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
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
          <Input type="date" ref={dueDateRef} label={"Due Date"} />
        </div>
      </div>
    </>
  );
}
