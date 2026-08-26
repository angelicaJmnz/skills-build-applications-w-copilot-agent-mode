import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/users"><span className="brand-mark">O</span> OctoFit</NavLink>
        <span className="status-dot">Live training hub</span>
      </header>
      <div className="app-layout">
        <aside className="sidebar">
          <p className="nav-label">Workspace</p>
          {[['/users', 'Athletes'], ['/teams', 'Teams'], ['/activities', 'Activity'], ['/leaderboard', 'Leaderboard'], ['/workouts', 'Workouts']].map(([path, label]) => (
            <NavLink key={path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={path}>{label}</NavLink>
          ))}
          <div className="sidebar-note"><strong>Keep moving.</strong><br />Small sessions add up.</div>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="*" element={<Navigate to="/users" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
