import axios from 'axios'

const baseUrl = 'https://reqres.in/'

export const getUsers = () => {
  return axios
    .get(baseUrl + 'api/users?page=1')
    .then(({ data }) => data)
    .catch((error) => {
      console.error('Error fetching users:', error)
      throw error
    })
}

export const deleteUser = (userId) => {
  return axios
    .delete(`${baseUrl}api/users/${userId}`)
    .then(() => userId)
    .catch((error) => {
      console.error('Error deleting user:', error)
      throw error
    })
}
