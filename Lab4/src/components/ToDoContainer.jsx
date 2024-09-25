import { useState } from 'react'
import AddToDo from './AddToDo'
import SearchInput from './SearchInput'
import ToDoTable from './ToDoTable'
import useGetAllToDo from '../hooks/useGetAllToDo'

const ToDoContainer = () => {
  const { isLoading, data, setData } = useGetAllToDo()

  const [newToDo, setNewToDo] = useState(null)
  const [filterValue, setFilter] = useState('')

  function handleNewTitleChange(event) {
    setNewToDo({ id: Date.now(), title: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (newToDo) {
      setData([...data, newToDo])
      setNewToDo(null)
    }
  }

  function handleDelete(id) {
    setData(data.filter((toDo) => toDo.id !== id))
  }

  function handleFilterChange(event) {
    setFilter(event.target.value)
  }

  const filteredToDos = data.filter((toDo) =>
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