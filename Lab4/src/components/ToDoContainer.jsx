import { useState, useEffect } from 'react'
import AddToDo from './AddToDo'
import SearchInput from './SearchInput'
import ToDoTable from './ToDoTable'
import UseGetAllToDo from './UseGetAllToDo'

const ToDoContainer = () => {
  const { isLoading, data } = UseGetAllToDo()
  const [toDos, setToDos] = useState([])
  const [newToDo, setNewToDo] = useState(null)
  const [filterValue, setFilter] = useState('')

  useEffect(() => {
    if (data) {
      setToDos(data)
    }
  }, [data])

  function handleNewTitleChange(event) {
    setNewToDo({ id: Date.now(), title: event.target.value })
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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <AddToDo
            title={newToDo?.title || ''}
            onTitleChange={handleNewTitleChange}
            onSubmit={handleSubmit}
          />

          <SearchInput
            filter={filterValue}
            onFilterChange={handleFilterChange}
          />

          <ToDoTable toDos={filteredToDos} onDelete={handleDelete} />
        </>
      )}
    </>
  )
}

export default ToDoContainer