import React from 'react'

const AddNewAdress = ({
  firstName,
  lastName,
  phone,
  onModelChange,
  onSubmit,
  errors,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="firstName"
          value={firstName}
          onChange={onModelChange}
          placeholder="First Name"
        />
        {errors.firstName && (
          <span style={{ color: 'red' }}>The first name is required</span>
        )}
      </div>
      <div>
        <input
          name="lastName"
          value={lastName}
          onChange={onModelChange}
          placeholder="Last Name"
        />
        {errors.lastName && (
          <span style={{ color: 'red' }}>The last name is required</span>
        )}
      </div>
      <div>
        <input
          name="phone"
          value={phone}
          onChange={onModelChange}
          placeholder="Phone"
        />
        {errors.phone && (
          <span style={{ color: 'red' }}>The phone is required</span>
        )}
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddNewAdress
