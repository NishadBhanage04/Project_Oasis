import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import CheckIn from './pages/CheckIn';
import Dashboard from './pages/Dashboard';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/check-in" element={<CheckIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Fallback route to avoid blank screen */}
            <Route path="*" element={<Landing />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
