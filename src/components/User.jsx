import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <hr />
      <h4>{`id :${user.id}`}</h4>
      <p>{`Full Name: ${user.first_name} ${user.last_name}`}</p>
    </div>
  );
};

export default User;
