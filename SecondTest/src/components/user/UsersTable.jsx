import React from 'react';
import UserItem from './UserItem';

const UsersTable = ({ users, onDelete }) => (
  <table className="table table-bordered table-striped">
    <thead className="thead-dark">
      <tr>
        <th>Avatar</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <UserItem key={user.id} user={user} onDelete={onDelete} />
      ))}
    </tbody>
  </table>
);

export default UsersTable;
