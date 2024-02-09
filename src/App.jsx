import { useContext, useState } from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import EditTodo from './components/EditTodo'
import TodoContext from './context/TodoContext'

function App() {
  const { user } = useContext(TodoContext)
  const [list, setList] = useState([])
  const [updateTodo, setUpdateTodo] = useState('')


  const addNewTodoInList = (newTodo) => {
    const listCopy = [...list]
    listCopy.push(newTodo)
    setList(listCopy)
  }

  const markAsComplete = (id) => {
    const listCopy = [...list]
    const selectedTodoIdx = listCopy.findIndex((row) => row.id === id)
    const selectedTodo = listCopy[selectedTodoIdx]
    listCopy[selectedTodoIdx] = { ...selectedTodo, isCompleted: true }
    setList(listCopy)
  }

  const getTodoForUpdating = (todo) => {
    setUpdateTodo(todo)
  }

  const updateTodoList = (updatedTodo) => {
    console.log(updatedTodo)
    const listCopy = [...list]
    const selectedTodoIdx = listCopy.findIndex((row) => row.id === updatedTodo.id)
    listCopy[selectedTodoIdx] = updatedTodo
    setList(listCopy)
    setUpdateTodo('')
  }

  return (
    <>
      <AddTodo addNewTodoInList={addNewTodoInList} />
      {
        updateTodo && <EditTodo key={updateTodo.id} updateTodo={updateTodo} updateTodoList={updateTodoList} setUpdateTodo={setUpdateTodo} />
      }

      <TodoList propList={list} propSetList={setList} markAsComplete={markAsComplete} getTodoForUpdating={getTodoForUpdating} />
    </>
  )
}

export default App
