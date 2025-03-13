import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul style={{
          display: 'flex',
          gap: '20px',
          listStyle: 'none',
          padding: 0,
        }}>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/add-post">Add Post</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
