import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import { DataProvider } from './contexts/DataContext'
import { AuthorTable } from './components/AuthorTable'
import { BookTable } from './components/BookTable'
import { Modal } from './components/Modal'
import { AuthorForm } from './components/AuthorForm'
import { BookForm } from './components/BookForm'
import { GlobalStyles } from './styles/GlobalStyles'
import { LoginForm } from './components/LoginForm'
import { PrivateRoute } from './components/PrivateRoute'
import { Dashboard } from './pages/Dashboard'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

const Header = styled.header`
  margin-bottom: 30px;
`

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`

const Button = styled.button`
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #45a049;
  }
`

const Section = styled.section`
  margin-bottom: 40px;
`

const SectionTitle = styled.h2`
  color: #444;
  margin-bottom: 20px;
`

function App() {
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false)
  const [isBookModalOpen, setIsBookModalOpen] = useState(false)

  return (
    <BrowserRouter>
      <DataProvider>
        <GlobalStyles />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  )
}

export default App
