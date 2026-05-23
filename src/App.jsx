import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './components/Landingpage'

function App() {
  return (
    <BrowserRouter basename="/web2final/">
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App