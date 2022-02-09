import React from 'react'
import {TodoContext} from './todoContext/context'
import './styles/TodoCounter.css'
import { TodoSearch } from './TodoSearch';

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <div className="counter_div">
            <div className="container">
                <h2 className="TodoCounter" >Has completado {completedTodos} de {totalTodos} TODOs</h2>
                <div className="search_div">
                    <TodoSearch />
                </div>
            </div>
        </div>
    )
}

export { TodoCounter };