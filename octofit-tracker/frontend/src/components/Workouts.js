import React, { useEffect, useState } from 'react';

const WORKOUTS_API = 'https://ominous-train-v66pw964ppx6fx569-8000.app.github.dev/api/workouts/';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(WORKOUTS_API)
      .then(res => res.json())
      .then(data => setWorkouts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Workouts</h2>
      <ul className="list-group">
        {workouts.map(workout => (
          <li key={workout._id} className="list-group-item">
            {workout.name} - {workout.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
