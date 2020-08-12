import React from 'react';
import { useSelector } from 'react-redux';

const UsersPage = () => {
  const users = useSelector((state) => state.global.users);

  return (
    <div>
      <h2>Users Page</h2>
      {users.length < 1 ? (
        <h2>There is no user.</h2>
      ) : (
        users.map((user, i) => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              key={i}
            >
              <div style={{ flex: 1 }}>
                <h2>Name: {user.name}</h2>
              </div>
              <div style={{ flex: 1 }}>
                <h2>Email: {user.email}</h2>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default UsersPage;
