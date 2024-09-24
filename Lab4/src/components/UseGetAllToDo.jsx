import { useState, useEffect } from 'react'

const UseGetAllToDo = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => {
          setData(json)
          setIsLoading(false)
        })
    }
    fetchData()
  }, [])

  return { isLoading, data }
}

export default UseGetAllToDo