
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ padding: '1rem',paddingTop:'2rem',paddingBottom:'0' }}>
    <nav style={{display:'flex',justifyContent:'flex-end'}}>
      <Link to="/" style={{ marginRight: '1rem', color: '#8B2635' }}>Home</Link>
      <Link to="/terms" style={{ marginRight: '1rem', color: '#8B2635' }}>Terms</Link>
      <Link to="/privacy" style={{ marginRight: '1rem', color: '#8B2635' }}>Privacy</Link>
      <Link to="/refund" style={{ marginRight: '1rem', color: '#8B2635' }}>Refund Policy</Link>
      <Link to="/delete-account" style={{ marginRight: '1rem', color: '#8B2635' }}>Delete Account</Link>
    </nav>
  </header>
);

export default Header;
