import React, { useState } from 'react'

const EditTodo = ({ updateTodo, setUpdateTodo,updateTodoList }) => {
    const [editTodoName, setEditTodoName] = useState(updateTodo.todo)
    const [editTodoPrice, setEditTodoPrice] = useState(updateTodo.todoAmount)

    const handleEditTodo = (e) => {
        setEditTodoName(e.target.value)
    }
    const handleEditTodoPrice = (e) => {
        setEditTodoPrice(e.target.value)
    }
    const updateTodoHandler = () => {
        const updatedTodo = {
            id: updateTodo.id,
            todo: editTodoName,
            todoAmount: editTodoPrice,
            isCompleted: false
        }
        updateTodoList(updatedTodo)
        setEditTodoName('')
        setEditTodoPrice('')
    }
    const cancelButtonHandler = () => {
        setEditTodoName('')
        setEditTodoPrice('')
        setUpdateTodo(null)
    }

    return (
        <div>{updateTodo.todo}  <div>
            <input type='text' onChange={(e) => handleEditTodo(e)} value={editTodoName} placeholder='New Todo Name' />
            <input type='number' onChange={(e) => handleEditTodoPrice(e)} value={editTodoPrice} placeholder='New Todo Price' />
            <button type='click' onClick={updateTodoHandler}>Update Todo</button>
            <button type='click' onClick={cancelButtonHandler}>Cancel</button>
        </div></div>
    )
}

export default EditTodo