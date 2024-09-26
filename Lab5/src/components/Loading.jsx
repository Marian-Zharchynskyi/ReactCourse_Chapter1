import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Loading = ({ loading, children }) => {
  return (
    <>
      {loading ? (
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
