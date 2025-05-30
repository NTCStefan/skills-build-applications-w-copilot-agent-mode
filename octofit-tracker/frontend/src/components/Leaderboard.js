import React, { useEffect, useState } from 'react';

const LEADERBOARD_API = 'https://ominous-train-v66pw964ppx6fx569-8000.app.github.dev/api/leaderboard/';

function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch(LEADERBOARD_API)
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Leaderboard</h2>
      <ul className="list-group">
        {entries.map(entry => (
          <li key={entry._id} className="list-group-item">
            {entry.user} - {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
