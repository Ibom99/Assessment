
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ROUTES } from './utils/constants'
import Dashboard from './routes/Dashboard'
import Messages from './routes/Messages'

function App() {
  
  return (
    <div className="app-container">
     <Routes>
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />}/>
      <Route path={ROUTES.MESSAGES} element={<Messages />} />
     </Routes>
    </div>
  )
}

export default App
