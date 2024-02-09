import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

const TodoList = ({ propList, propSetList, markAsComplete, getTodoForUpdating }) => {
    const { user } = useContext(TodoContext)
    const deleteHandler = (id) => {
        const newList = [...propList]
        const filteredList = newList.filter(todo => todo.id !== id)
        propSetList(filteredList)
    }
    const markAsCompleteHandler = (id) => {
        markAsComplete(id)
    }
    const editFormHandler = (todo) => {
        getTodoForUpdating(todo)
    }
    return (
        <>
            {
                propList?.map((saumya) => (
                    <div key={saumya.id} style={{ color: saumya.isCompleted ? 'green' : 'red' }}>
                        {saumya.todoAmount} {saumya.todo} {saumya.isCompleted ? 'True' : 'False'}
                        <button onClick={() => deleteHandler(saumya.id)} >Delete Todo</button>
                        <button onClick={() => editFormHandler(saumya)}>Edit Todo</button>
                        {
                            !saumya.isCompleted && <button onClick={() => markAsCompleteHandler(saumya.id)}>Mark As completed</button>
                        }

                    </div>
                ))
            }

        </>
    )
}

export default TodoList