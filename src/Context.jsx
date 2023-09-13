import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  const [newTask, setNewTask] = useState(
    JSON.parse(localStorage.getItem("newTask")) ||

     {
      id: 100,
      text: "",
      isComplete: false,
      isFavourite: false,
      isDeleted: false,
    }
  );

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
    localStorage.setItem("newTask", JSON.stringify(newTask));
  }, [taskList, newTask]);

  const handleTask = (event) => {
    setNewTask((task) => ({
      ...task,
      text: event.target.value,
    }));
  };

  function addTask() {
    if (newTask.text === "") {
      window.alert("Task field is empty");
      return;
    }
    const temp = taskList.find((task) => task.text === newTask.text);
    if (temp !== undefined) {
      if (temp.isDeleted === true) {
        window.alert("This task is deleted, undo delete from Deleted Tab");
      } else {
        window.alert("Task already present");
      }
      return;
    }

    setTaskList((prevTasks) => {
      return [...prevTasks, newTask];
    });

    setNewTask((task) => ({ ...task, text: "", id:task.id + 1 }));
  }

  function deleteTask(taskID) {
    setTaskList((prevTasks) => {
      const newTaskList = [];
      for (let index = 0; index < prevTasks.length; index++) {
        if (prevTasks[index].id === taskID) {
          continue;
        } else {
          const element = prevTasks[index];
          newTaskList.push(element);
        }
      }
      return newTaskList;
    });
  }

  return (
    <AppContext.Provider
      value={{
        taskList,
        setTaskList,
        newTask,
        setNewTask,
        addTask,
        handleTask,
        deleteTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };