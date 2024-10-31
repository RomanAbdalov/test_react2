// Імпорт React і необхідних компонентів
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ArtSchool from './components/ArtSchool/ArtSchool';

// Головний компонент App з налаштованими маршрутами
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/art-school" element={<ArtSchool />} />
        <Route path="/test_react2" element={<Home />} />{' '}
        {/* Можна замінити <Home /> на інший компонент, якщо є */}
      </Routes>
    </Router>
  );
}

export default App;
