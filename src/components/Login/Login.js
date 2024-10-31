// src/components/Login.js
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Будь ласка, введіть свої дані для входу.</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Перейти на Home</Link>
          </li>
          <li>
            <Link to="/art-school">Перейти на Art School</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Login;
