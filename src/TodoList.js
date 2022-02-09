import React from 'react'
import './styles/TodoList.css'

function TodoList(props) {
    return(
        <section className="section_todo_list">
            <ul className="todo_list">
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList };