import './App.sass'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Components } from './pages/components/components'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/components" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
