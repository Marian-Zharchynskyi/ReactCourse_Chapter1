import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="spinner-border" role="status"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

const Loading = ({ isLoading, children }) => {
  return (
    <React.Fragment>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </React.Fragment>
  )
}

export default Loading
