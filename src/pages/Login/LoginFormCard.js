import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>E-mail: {user.email}</p>
      <p>Category: {user.category}</p>
    </div>
  );
};

export default UserCard;

