import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle as faCheckCircleSolid,
    faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";
import {
    faCheckCircle as faCheckCircleRegular,
    faStar as faStarRegular,
    faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

export default function Task(props) {
    const setIsFavourite = () => {
        props.task.isFavourite = !props.task.isFavourite;
        props.setNewTask((task) => ({
            ...task,
        }));
    };
    const setIsComplete = () => {
        props.task.isComplete = !props.task.isComplete;
        props.setNewTask((task) => ({
            ...task,
        }));
    };
    const setIsDelete = () => {
        props.task.isDeleted = true;
        props.setNewTask((task) => ({
            ...task,
        }));
    };
    return (
        <div className="task">
            <span className="task--text">{props.task.text}</span>
            <FontAwesomeIcon
                icon={props.task.isComplete ? faCheckCircleSolid : faCheckCircleRegular}
                size="xl"
                className="font-awesome"
                onClick={() => {
                    setIsComplete();
                }}
            />
            <FontAwesomeIcon
                icon={props.task.isFavourite ? faStarSolid : faStarRegular}
                size="xl"
                className="font-awesome"
                onClick={() => {
                    setIsFavourite();
                }}
            />
            <FontAwesomeIcon
                icon={faTrashCan}
                size="xl"
                className="font-awesome"
                onClick={() => {
                    setIsDelete();
                }}
            />
        </div>
    );
}
