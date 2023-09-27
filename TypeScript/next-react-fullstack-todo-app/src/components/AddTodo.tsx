import React, {
  FormEvent,
  LegacyRef,
  MutableRefObject,
  useRef,
  useState,
} from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import Input from "./UI/Input";
import classes from "../styles/AddTodo.module.css";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

const AddTodo = ({ onClose }: { onClose: () => void }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [todoTitle, setTodoTitle] = useState();
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("inside submit");
    const titleValue = inputRef.current?.value;
    const formData = {
      id: uuidv4(),
      title: titleValue,
      completed: false,
    };
    fetch(`/api/todo`, {
      method: "post",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        onClose();
      });
  };
  const handleInputChange = (e: React.ChangeEventHandler<HTMLInputElement>) => {
    console.log("handleInputChange");
  };
  return (
    <Modal onClose={onClose}>
      <h2>Add New Todo</h2>
      <form className={classes.form} onSubmit={(e) => handleFormSubmit(e)}>
        <div className={classes.input}>
          <label htmlFor="todoTitle">Title</label>
          <input ref={inputRef} id="todoTitle" placeholder="Todo Title" />
        </div>
        {/*  <Input
          label="Title"
          ref={inputRef}
          input={{
            id: `todoTitle`,
            type: "text",
            placeholder: "Todo Title",
          }}
        /> */}

        <Button styles={["red"]} onClick={onClose}>
          Cancel
        </Button>
        <Button styles={["green"]}>Save</Button>
      </form>
    </Modal>
  );
};

export default AddTodo;
