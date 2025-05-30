
import './App.css';
import logo from './octofitapp-small.png';
import { NavLink, Routes, Route } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{background: 'linear-gradient(90deg, #0d47a1 0%, #1976d2 100%)'}}>
        <div className="container-fluid">
          <img src={logo} alt="OctoFit Logo" style={{height: 40, marginRight: 16}} />
          <NavLink className="navbar-brand" to="/" style={{color: '#fff', fontWeight: 'bold'}}>OctoFit Tracker</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/users" style={{color: '#ffeb3b'}}>Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/teams" style={{color: '#ffeb3b'}}>Teams</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/activities" style={{color: '#ffeb3b'}}>Activities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/workouts" style={{color: '#ffeb3b'}}>Workouts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard" style={{color: '#ffeb3b'}}>Leaderboard</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="card shadow-lg" style={{background: 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)'}}>
          <div className="card-body">
            <Routes>
              <Route path="/users" element={<Users />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/" element={<h2 className="card-title" style={{color: '#0d47a1'}}>Welcome to OctoFit Tracker!</h2>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
