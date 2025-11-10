import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CompaniesPage from './pages/CompaniesPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/companies" element={<CompaniesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

