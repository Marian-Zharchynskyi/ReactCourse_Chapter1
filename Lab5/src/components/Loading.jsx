import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Loading = ({ isLoading, children }) => {
  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
          <p>Loading...</p>
        </div>
      ) : (
        children
      )}
    </>
  )
}

export default Loading
