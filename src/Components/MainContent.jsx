import Task from "./Task";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../Context";

export default function MainContent() {
  const { taskList, newTask, addTask, handleTask,setNewTask } =
    useGlobalContext();

  const showTasks = taskList.filter((task) => task.isDeleted===false)

  const tasks = showTasks.map((task, key) => {
    return <Task key={key} task={task} setNewTask={setNewTask} />;
  });

  return (
    <div className="task-list">
    <div className="main--content">
      <div className="task add">
        <input
          className="add--text"
          name="newtask"
          placeholder="Add Task"
          value={newTask.text}
          onChange={(e) => handleTask(e)}
        />
        <FontAwesomeIcon
          icon={faCirclePlus}
          size="xl"
          onClick={addTask}
          className="font-awesome"
        />
      </div>
      {tasks}
    </div>
    </div>
  );
}
