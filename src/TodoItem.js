import React from 'react'
import './styles/TodoItem.css'
import { MdDone } from "react-icons/md";
import { MdClose } from "react-icons/md";

function TodoItem(props) {
    return(
        <li className="item">
            <MdDone className={`done-icon ${props.completed ? "completed" : "uncompleted"}`} onClick={props.onComplete} />
            <p className="textoItem">{props.text}</p>
            <MdClose className="delete_icon" onClick={props.onDelete}  />
        </li>
    )
}

export { TodoItem };