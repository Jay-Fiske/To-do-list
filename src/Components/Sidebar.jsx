import React from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

export default function Sidebar(){
    const {taskList} = useGlobalContext();
    const important = taskList.filter((task)=> task.isFavourite===true  && task.isDeleted === false).length
    const complete = taskList.filter((task)=> task.isComplete===true  && task.isDeleted === false).length
    const deleted = taskList.filter((task)=> task.isDeleted===true).length
return(
    <div className="sidebar">
        <ul>
           <Link to={'/'}><li>Home</li></Link>
           <Link to={'/important'}><li>Important {important>0 && <span>- {`${important}`}</span>}</li></Link>
            <Link to={'/complete'}><li>Completed {complete>0 && <span>- {`${complete}`}</span>}</li></Link>
            <Link to={'/delete'}><li>Deleted  {deleted>0 && <span>- {`${deleted}`}</span>} </li></Link>
        </ul>
    </div>
)
}