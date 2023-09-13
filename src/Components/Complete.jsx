import Task from "./Task";
import { useGlobalContext } from "../Context";

export default function Complete() {
    const { taskList, setNewTask } = useGlobalContext();
    const completeList = taskList.filter((task) => task.isComplete === true && task.isDeleted === false);

    const tasks = completeList.map((task, key) => {
        return (
            <Task
                key={key}
                task={task}
                setNewTask={setNewTask}
            />
        );
    });

    return (
        <div className="task-list">
            <div className="main--content">{tasks}</div>
        </div>
    );
}