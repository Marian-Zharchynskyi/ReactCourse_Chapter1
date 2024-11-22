import { useState } from 'react'
import AddToDo from './AddToDo'
import SearchInput from '../../../common/components/SearchInput'
import ToDoTable from './ToDoTable'
import useGetAllToDo from '../../../common/hooks/useGetAllToDo'
import Loading from '../../../common/components/Loading'

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

  function handleEdit(id, newTitle) {
    const updatedToDos = data.map((toDo) =>
      toDo.id === id ? { ...toDo, title: newTitle } : toDo
    )
    setData(updatedToDos)
  }

  const filteredToDos = data.filter((toDo) =>
    toDo.title.toLowerCase().includes(filterValue.toLowerCase())
  )

  return (
    <Loading isLoading={isLoading}>
      <>
        <AddToDo
          title={newToDo?.title || ''}
          onTitleChange={handleNewTitleChange}
          onSubmit={handleSubmit}
        />

        <SearchInput filter={filterValue} onFilterChange={handleFilterChange} />

        <ToDoTable
          toDos={filteredToDos}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </>
    </Loading>
  )
}

export default ToDoContainer
