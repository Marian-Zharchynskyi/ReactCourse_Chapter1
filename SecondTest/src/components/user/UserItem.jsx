import React from "react";

const UserItem = ({ user, onDelete }) => (
  <tr>
    <td>
      <img
        src={user.avatar}
        alt={user.first_name}
        style={{ width: "50px", borderRadius: "50%" }}
      />
    </td>
    <td>{user.first_name} {user.last_name}</td>
    <td>{user.email}</td>
    <td>
      <button className="btn btn-danger" onClick={() => onDelete(user.id)}>
        Delete
      </button>
    </td>
  </tr>
);

export default UserItem;
