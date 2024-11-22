import React, { useState, useEffect } from 'react'
import UsersTable from './UsersTable'
import FetchButton from '../common/FetchButton'
import FilterBox from '../common/FilterBox'
import { getUsers, deleteUser } from '../../services/userService'
import useLoading from '../../hooks/useLoading'
import Loading from '../common/Loading'

const UsersContainer = () => {
  const [users, setUsers] = useState([])
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

  const fetchUsers = async () => {
    setIsLoading(true)
    try {
      const data = await getUsers()
      setUsers(data.data)
      setFilteredUsers(data.data)
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteUserById = async (userId) => {
    try {
      setIsLoading(true)
      await deleteUser(userId)
      setUsers((prev) => prev.filter((user) => user.id !== userId))
      setFilteredUsers((prev) => prev.filter((user) => user.id !== userId))
    } catch (error) {
      console.error('Error deleting user:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Loading isLoading={isLoading}>
      <div className="UserContainer">
        {users.length === 0 ? (
          <FetchButton fetchUsers={fetchUsers} />
        ) : (
          <>
            <FilterBox filter={filter} setFilter={setFilter} />
            <UsersTable users={filteredUsers} onDelete={deleteUserById} />
          </>
        )}
      </div>
    </Loading>
  )
}

export default UsersContainer
