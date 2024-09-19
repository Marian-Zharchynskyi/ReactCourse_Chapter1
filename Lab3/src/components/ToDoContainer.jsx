import { useState } from 'react'
import AddToDoComponent from './AddToDoComponent'
import SearchInput from './SearchInput'
import ToDoTable from './ToDoTable'

const ToDoContainer = () => {
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

export default ToDoContainer
