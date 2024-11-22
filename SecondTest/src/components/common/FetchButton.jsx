import React from "react";

const FetchButton = ({ fetchUsers }) => {
  return (
    <button onClick={fetchUsers} className="btn btn-primary">
      Fetch Users
    </button>
  );
};

export default FetchButton;
