import Task from "./Task";
import { useGlobalContext } from "../Context";

export default function Important(){
    const { taskList, setNewTask } =
    useGlobalContext();
    const importantList = taskList.filter((task)=> task.isFavourite===true && task.isDeleted === false)

  const tasks = importantList.map((task, key) => {
    return <Task key={key} task={task} setNewTask={setNewTask} />;
  });

  return (
    <div className="task-list">
    <div className="main--content">
      {tasks}
    </div>
    </div>
  );
}