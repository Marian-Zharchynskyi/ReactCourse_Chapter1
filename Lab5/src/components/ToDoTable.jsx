import React from 'react'

const ToDoTable = ({ toDos, onDelete}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => {
          return (
            <tr key={toDo.id.toString()}>
              <td>{toDo.id.toString()}</td>
              <td>{toDo.title}</td>
              <td><button onClick = {() => onDelete(toDo.id)}> Delete </button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ToDoTable
