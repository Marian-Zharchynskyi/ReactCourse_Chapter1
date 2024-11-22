import React, { useState, useEffect } from 'react'
import UsersTable from './UsersTable'
import FetchButton from '../common/FetchButton'
import FilterBox from '../common/FilterBox'
import useUsers from '../../hooks/useUsers'
import { deleteUser } from '../../services/userService'
import useLoading from '../../hooks/useLoading'
import Loading from '../common/Loading'

const UsersContainer = () => {
  const { users, fetchUsers } = useUsers()
  const [filter, setFilter] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])
  const { isLoading, setIsLoading } = useLoading()

  useEffect(() => {
    const filtered = users.filter((user) =>
      `${user.first_name} ${user.last_name}`
        .toLowerCase()
        .includes(filter.toLowerCase())
    )
    setFilteredUsers(filtered)
  }, [users, filter])

  const deleteUserById = async (userId) => {
    try {
      setIsLoading(true)
      await deleteUser(userId)
      setFilteredUsers((prev) => prev.filter((user) => user.id !== userId))
    } catch (error) {
      console.error('Error deleting user:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFetchUsers = async () => {
    setIsLoading(true)
    await fetchUsers()
    setIsLoading(false)
  }

  return (
    <Loading isLoading={isLoading}>
      {users.length === 0 ? (
        <FetchButton fetchUsers={handleFetchUsers} />
      ) : (
        <>
          <FilterBox filter={filter} setFilter={setFilter} />
          <UsersTable users={filteredUsers} onDelete={deleteUserById} />
        </>
      )}
    </Loading>
  )
}

export default UsersContainer
