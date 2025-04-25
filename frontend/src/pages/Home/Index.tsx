import Navbar from '../../components/shared/Navbar'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'

function Index() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/*" element={<>No Page Found</>} />
    </Routes>
    </>
  )
}

export default Index