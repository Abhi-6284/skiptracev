import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Layout
import Layout from './components/layout/Layout';

// Auth Pages
import Login from './pages/Login';
import Register from './pages/Register';
import PasswordReset from './pages/PasswordReset';

// Dashboard Pages
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import SearchHistory from './pages/SearchHistory';
import SavedLists from './pages/SavedLists';
import Settings from './pages/Settings';
import Support from './pages/Support';
import Results from './pages/Results';
import NotFound from './pages/NotFound';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Auth Routes */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="reset-password" element={<PasswordReset />} />
            
            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="search"
              element={
                <ProtectedRoute>
                  <Search />
                </ProtectedRoute>
              }
            />
            <Route
              path="history"
              element={
                <ProtectedRoute>
                  <SearchHistory />
                </ProtectedRoute>
              }
            />
            <Route
              path="lists"
              element={
                <ProtectedRoute>
                  <SavedLists />
                </ProtectedRoute>
              }
            />
            <Route
              path="results"
              element={
                <ProtectedRoute>
                  <Results />
                </ProtectedRoute>
              }
            />
            <Route
              path="settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="support"
              element={
                <ProtectedRoute>
                  <Support />
                </ProtectedRoute>
              }
            />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;