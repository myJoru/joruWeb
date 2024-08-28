// src/pages/DeleteAccount.js

import React from 'react';

const DeleteAccount = () => (
  <div style={{ padding: '1rem',display:'flex',flexDirection:'column',gap:'12px'}}>
    <h1>Delete Account</h1>
    If you wish to delete the account ,please follow the instruction below
    <h2>1.Through the App:</h2>
    <p>Log in to the Joru app using your credentials.</p>
    <p>Navigate to the Profile screen.</p>
    <p> Select "Account Settings" and then choose "Delete Account."</p>
    <p>Follow the on-screen instructions to confirm the deletion of your account.</p>

    <h2>2.Through Email:</h2>
    <p>Send an email to our support team at services.joru@gmail.com.</p>
    <p>Make sure to use your registered email address for this request.</p>
    <p>Include a request to delete your account in the email, along with your registered email ID for verification.</p>

    <p style={{fontSize:'16px',marginTop:'12px'}}>if you encounter any issue , please contact us at services.joru@gmail.com.</p>
  </div>
);

export default DeleteAccount;
