import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { DataProvider } from './contexts/DataContext'
import { GlobalStyles } from './styles/GlobalStyles'
import { PrivateRoute } from './components/PrivateRoute'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'


function App() {

  return (
    <BrowserRouter>
      <DataProvider>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Login />} />
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
