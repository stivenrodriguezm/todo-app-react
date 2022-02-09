import React from 'react'
import {TodoContext} from './todoContext/context'
import './styles/TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const { 
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSubmit} className="formulario">
            <label>Escribe una nueva Tarea</label>
            <textarea
                value={newTodoValue}
                onChange={onChange} 
                placeholder="Escribe tu nuevo TODO"
            />
            <div className="botones_div">
                <button
                    type="button"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    onClick={onSubmit}
                >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}