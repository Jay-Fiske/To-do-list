import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCanArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useGlobalContext } from "../Context";

export default function DeletedTask(props) {
  const { deleteTask } = useGlobalContext();
  const setIsDelete = () => {
    props.task.isDeleted = false;
    props.setNewTask((task) => ({
      ...task,
    }));
  };
  return (
    <div className="task">
      <span className="task--text">{props.task.text}</span>
      <FontAwesomeIcon
        icon={faTrashCanArrowUp}
        size="xl"
        className="font-awesome"
        onClick={() => {
          setIsDelete();
        }}
      />
      <FontAwesomeIcon
        icon={faTrashCan}
        size="xl"
        className="font-awesome"
        onClick={() => {
          deleteTask(props.task.id);
        }}
      />
    </div>
  );
}