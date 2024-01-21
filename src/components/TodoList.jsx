import React from 'react'

const TodoList = ({ propList, propSetList }) => {

    const deleteHandler = (id) => {
        const newList = [...propList]
        const filteredList = newList.filter(todo => todo.id !== id)
        propSetList(filteredList)
    }
    return (
        <>
            {
                propList?.map((saumya) => (
                    <div key={saumya.id}>
                        {saumya.todoAmount} {saumya.todo} {saumya.isCompleted ? 'True' : 'False'}
                        <button onClick={() => deleteHandler(saumya.id)} >Delete Todo</button>
                    </div>
                ))
            }

        </>
    )
}

export default TodoList