import { useGlobalContext } from "../Context";
import DeletedTask from "./DeletedTask";

export default function Deleted() {
  const { taskList, setNewTask } = useGlobalContext();
  const deletedList = taskList.filter((task) => task.isDeleted === true);

  const tasks = deletedList.map((task, key) => {
    return <DeletedTask key={key} task={task} setNewTask={setNewTask} />;
  });

  return (
    <div className="task-list">
      <div className="main--content">{tasks}</div>
    </div>
  );
}