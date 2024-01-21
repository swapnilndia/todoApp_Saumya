import { useState } from 'react'
import TodoList from './components/TodoList'


function App() {
  const [list, setList] = useState([])
  const [todoName, setTodoName] = useState('')
  const [todoPrice, setTodoPrice] = useState('')

  const handleTodo = (e) => {
    setTodoName(e.target.value)
  }
  const handleTodoPrice = (e) => {
    setTodoPrice(e.target.value)
  }
  
  const addNewTodoHandler = (e) => {
    e.preventDefault()
    const newTodo = {
      id: Math.random(),
      todo: todoName,
      todoAmount : todoPrice,
      isCompleted: false
    }
    // console.log(newTodo)
    const newList = [...list]
    // console.log(newList)
    newList.push(newTodo)
    setList(newList)
  }
  return (
    <>
      <input type='text' onChange={(e)=>handleTodo(e)} value={todoName} placeholder='Todo Name' />
      <input type='number' onChange={(e)=>handleTodoPrice(e)} value={todoPrice} placeholder='Todo Price' />
      <button type='submit' onClick={addNewTodoHandler}>Submit Todo</button>
      <TodoList propList={list} propSetList={setList} />
    </>
  )
}

export default App
