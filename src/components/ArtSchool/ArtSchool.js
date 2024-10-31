// src/components/ArtSchool.js
import React from 'react';
import { Link } from 'react-router-dom';

function ArtSchool() {
  return (
    <div>
      <h1>Art School Page</h1>
      <p>Інформація про художню школу.</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Перейти на Home</Link>
          </li>
          <li>
            <Link to="/login">Перейти на Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ArtSchool;
