import { useState } from "react";
import classes from "../styles/ActionBar.module.css";
import Button from "./UI/Button";
import { FaPlus } from "react-icons/fa";

const ActionBar = ({
  onFilterChange,
  onAddNewItem,
}: {
  onFilterChange: React.Dispatch<React.SetStateAction<string>>;
  onAddNewItem: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [activeButton, setActiveButton] = useState("All");

  const handleFilterChange = (currentFilter: string) => {
    setActiveButton(currentFilter);
    onFilterChange(currentFilter);
  };

  const handleAddTodo = () => {};

  return (
    <div className={classes.actionBar}>
      <Button styles={["circle", "green"]} onClick={() => onAddNewItem(true)}>
        <FaPlus />
      </Button>
      <div className={classes.right}>
        <Button
          styles={activeButton === "All" ? ["primary"] : ["secondary"]}
          onClick={() => handleFilterChange("All")}
        >
          All
        </Button>
        <Button
          styles={activeButton === "Completed" ? ["primary"] : ["secondary"]}
          onClick={() => handleFilterChange("Completed")}
        >
          Completed
        </Button>
        <Button
          styles={activeButton === "Incompleted" ? ["primary"] : ["secondary"]}
          onClick={() => handleFilterChange("Incompleted")}
        >
          Incompleted
        </Button>
      </div>
    </div>
  );
};

export default ActionBar;
