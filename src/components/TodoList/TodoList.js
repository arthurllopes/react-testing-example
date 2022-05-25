import React from 'react'
import TodoFooter from '../TodoFooter/TodoFooter'
import "./TodoList.css"

function TodoList({
    todos, setTodos
}) {

    const updateTask = (id) => {
        let updatedTasks = todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
                return todo
            } else {
                return todo
            }
        });
        setTodos(updatedTasks)
    }
    function handleDeleteTask (ID) {
        const newTasks = todos.filter((todo) => todo.id !== ID)
        setTodos(newTasks)
    }

    const calcNumberOfIncompletedTasks = () => {
        let count = 0;
        todos.forEach(todo => {
            if(!todo.completed) count++
        })
        return count
    }

    return (
        <div className="todolist-container">
            <div className="todos-container">
                <div>
                    {
                        todos.map((todo, index) => (
                            <div key={index} data-testid='task-container' className='todo-item'>
                                <div className={todo.completed ? "todo-item-active" : ''} onClick={() => updateTask(todo.id)}>
                                    {todo.task}
                                </div>
                                <div>
                                    <button onClick={() => handleDeleteTask(todo.id)}>X</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <TodoFooter 
                    numberOfIncompleteTasks={calcNumberOfIncompletedTasks()}
                />
            </div>
        </div>
    )
}

export default TodoList
