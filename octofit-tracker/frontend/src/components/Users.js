import React, { useEffect, useState } from 'react';

const USERS_API = 'https://ominous-train-v66pw964ppx6fx569-8000.app.github.dev/api/users/';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(USERS_API)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <ul className="list-group">
        {users.map(user => (
          <li key={user._id} className="list-group-item">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
