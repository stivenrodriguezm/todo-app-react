import React from 'react'
import './styles/TodoButton.css'

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }

    return(
        <button
            className="createTodoButton"
            onClick={onClickButton}
        >+</button>
    )
}

export { CreateTodoButton };