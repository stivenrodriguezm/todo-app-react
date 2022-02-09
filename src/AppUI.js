import React from 'react';
import { TodoContext } from './todoContext/context';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal/modal';
import { TodoForm } from './TodoForm';
import { Menu } from './Menu/Menu';
import { Loading } from './Loading'
import './styles/index.css'

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    totalTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <div className="main_container">      
        <div className="general_container">
          <TodoCounter />

          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <Loading />}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          {!!openModal && (
            <Modal>
              <TodoForm />
              <CreateTodoButton 
                setOpenModal={setOpenModal}
                openModal={openModal}
              />
            </Modal>
          )}


          <CreateTodoButton 
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export { AppUI };