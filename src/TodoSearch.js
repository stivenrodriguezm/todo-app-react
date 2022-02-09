import React from 'react'
import {TodoContext} from './todoContext/context'
import './styles/TodoSearch.css'

function TodoSearch() {
   const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value)
    }
    return(
        <div className="todo-search">
            <input className="search" 
                placeholder="Search"
                value={searchValue}
                onChange={onSearchValueChange} 
            />
        </div>
    )
}

export { TodoSearch };