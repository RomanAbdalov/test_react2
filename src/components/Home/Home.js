// src/components/Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Перейти на Login</Link>
          </li>
          <li>
            <Link to="/art-school">Перейти на Art School</Link>
          </li>
        </ul>
      </nav>
      <p>Ласкаво просимо на головну сторінку!</p>
    </div>
  );
}

export default Home;
