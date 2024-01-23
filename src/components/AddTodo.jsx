import React, { useState } from 'react'

const AddTodo = ({ addNewTodoInList }) => {
    const [todoName, setTodoName] = useState('')
    const [todoPrice, setTodoPrice] = useState('')

    const handleTodo = (e) => {
        setTodoName(e.target.value)
    }
    const handleTodoPrice = (e) => {
        setTodoPrice(e.target.value)
    }

    const addTodoHandler = () => {
        const newTodo = {
            id: Math.random(),
            todo: todoName,
            todoAmount: todoPrice,
            isCompleted: false
        }
        console.log(newTodo)
        addNewTodoInList(newTodo)
        setTodoName('')
        setTodoPrice('')
    }

    return (
        <div>
            <input type='text' onChange={(e) => handleTodo(e)} value={todoName} placeholder='Todo Name' />
            <input type='number' onChange={(e) => handleTodoPrice(e)} value={todoPrice} placeholder='Todo Price' />
            <button type='click' onClick={addTodoHandler}>Submit Todo</button>
        </div>
    )
}

export default AddTodo