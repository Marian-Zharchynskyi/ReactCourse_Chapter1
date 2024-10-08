import React, { useState } from 'react';

const AdressBookTable = ({ adresses, onEdit }) => {
  const [editId, setEditId] = useState(null);
  const [editFirstName, setEditFirstName] = useState('');
  const [editLastName, setEditLastName] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [error, setError] = useState('');

  const handleEditClick = (adress) => {
    setEditId(adress.id);
    setEditFirstName(adress.firstName);
    setEditLastName(adress.lastName);
    setEditPhone(adress.phone);
    setError('');
  };

  const handleSaveClick = (id) => {
    if (!editFirstName.trim() || !editLastName.trim() || !editPhone.trim()) {
      setError('All fields are required');
      return;
    }

    onEdit(id, editFirstName, editLastName, editPhone);
    setEditId(null);
    setError('');
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {adresses.length === 0 ? (
          <tr>
            <td colSpan="5">No data to display</td>
          </tr>
        ) : (
          adresses.map((adress) => (
            <tr key={adress.id.toString()}>
              <td>{adress.id.toString()}</td>
              <td>
                {editId === adress.id ? (
                  <input
                    value={editFirstName}
                    onChange={(e) => setEditFirstName(e.target.value)}
                    className={`form-control ${error ? 'is-invalid' : ''}`}
                  />
                ) : (
                  adress.firstName
                )}
              </td>
              <td>
                {editId === adress.id ? (
                  <input
                    value={editLastName}
                    onChange={(e) => setEditLastName(e.target.value)}
                    className={`form-control ${error ? 'is-invalid' : ''}`}
                  />
                ) : (
                  adress.lastName
                )}
              </td>
              <td>
                {editId === adress.id ? (
                  <input
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value)}
                    className={`form-control ${error ? 'is-invalid' : ''}`}
                  />
                ) : (
                  adress.phone
                )}
              </td>
              <td>
                {editId === adress.id ? (
                  <>
                    <button onClick={() => handleSaveClick(adress.id)}>Save</button>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                  </>
                ) : (
                  <button onClick={() => handleEditClick(adress)}>Edit</button>
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default AdressBookTable;
