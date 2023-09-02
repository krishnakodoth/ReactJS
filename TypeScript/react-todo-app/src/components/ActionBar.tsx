import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdAdd } from "react-icons/md";
import classes from "../styles/modules/actionbar.module.scss";
import Button from "./Button";
import { updateFilterStatus } from "../slices/todoSlice";
import { RootState } from "../app/store";

const ActionBar = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const initialFilterStatus = useSelector(
    (state: RootState) => state.todo.filterStatus
  );
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const updateFilter = (itemFilter: string) => {
    setFilterStatus(itemFilter);
    dispatch(updateFilterStatus(itemFilter));
  };
  return (
    <div className={classes.action_bar}>
      <div
        className={classes.addButton}
        tabIndex={0}
        role="button"
        onClick={() => setModalOpen(true)}
      >
        <MdAdd />
      </div>
      <div className={classes.actionStatus}>
        <span>
          <Button
            variant={`${filterStatus === "all" ? "primary" : "secondary"}`}
            onClick={() => updateFilter("all")}
          >
            All
          </Button>
        </span>
        <span>
          <Button
            variant={`${
              filterStatus === "incomplete" ? "primary" : "secondary"
            }`}
            onClick={() => updateFilter("incomplete")}
          >
            Incomplete
          </Button>
        </span>
        <span>
          <Button
            variant={`${filterStatus === "complete" ? "primary" : "secondary"}`}
            onClick={() => updateFilter("complete")}
          >
            Completed
          </Button>
        </span>
      </div>
    </div>
  );
};

export default ActionBar;
