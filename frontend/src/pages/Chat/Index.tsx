import { Route, Routes } from "react-router-dom"
import Chat from './Chat'


function Index() {
  return (
    <Routes>
      <Route path="/:id" element={<Chat />} />
    </Routes>
  )
}

export default Index