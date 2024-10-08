import React, { useState } from 'react'

const ToDoTable = ({ toDos, onDelete, onEdit }) => {
  const [editId, setEditId] = useState(null)
  const [editValue, setEditValue] = useState('')
  const [error, setError] = useState('')

  const handleEditClick = (toDo) => {
    setEditId(toDo.id)
    setEditValue(toDo.title)
    setError('')
  }

  const handleSaveClick = (id) => {
    if (!editValue.trim()) {
      setError('Title is required')
      return
    }

    onEdit(id, editValue)
    setEditId(null)
    setError('')
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => {
          return (
            <tr key={toDo.id.toString()}>
              <td>{toDo.id.toString()}</td>
              <td>
                {editId === toDo.id ? (
                  <>
                    <input
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className={`form-control ${error ? 'is-invalid' : ''}`}
                    />
                    {error && <div className="invalid-feedback">{error}</div>}
                  </>
                ) : (
                  toDo.title
                )}
              </td>
              <td>
                {editId === toDo.id ? (
                  <button onClick={() => handleSaveClick(toDo.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(toDo)}>Edit</button>
                )}
                <button onClick={() => onDelete(toDo.id)}>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ToDoTable
