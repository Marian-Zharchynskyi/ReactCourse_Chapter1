import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Loading = ({ isLoading, children }) => {
  return (
    <React.Fragment>
      {children}
      {isLoading && <p>No data to display</p>}
    </React.Fragment>
  );
};

export default Loading;
