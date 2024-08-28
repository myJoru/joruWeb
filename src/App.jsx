// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import TermsConditions from './component/TermsCondition';
import DeleteAccount from './component/Deleteaccount';
import PrivacyPolicy from './component/PrivacyPolicy';
import Header from './component/Header';
import Footer from './component/Footer';
import RefundPolicy from './component/RefundPolicy';

const App = () => (
  <Router>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
