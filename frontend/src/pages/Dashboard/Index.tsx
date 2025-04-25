import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'

function Index() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
    </Routes>
  )
}

export default Index