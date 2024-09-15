import { useState } from 'react'
import './App.css'
import AddToDoComponent from './components/AddToDoComponent'
import ToDoTable from './components/ToDoTable'
import SearchInput from './components/SearchInput'

function App() {
  const [toDos, setToDos] = useState([])
  const [newToDo, setNewToDo] = useState(null)
  const [filterValue, setFilter] = useState('')

  function handleNewTitleChange(event) {
    setNewToDo({ id: Math.random(), title: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (newToDo) {
      setToDos([...toDos, newToDo])
      setNewToDo(null)
    }
  }

  function handleDelete(id) {
    setToDos(toDos.filter((toDo) => toDo.id !== id))
  }

  function handleFilterChange(event) {
    setFilter(event.target.value)
  }

  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(filterValue.toLowerCase())
  )

  return (
    <>
      <AddToDoComponent
        title={newToDo?.title || ''}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />

      <SearchInput filter={filterValue} onFilterChange={handleFilterChange} />

      <ToDoTable toDos={filteredToDos} onDelete={handleDelete} />
    </>
  )
}

export default App
