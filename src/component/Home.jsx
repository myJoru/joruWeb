
import React from 'react';
import '../App.css'
import logo from '../../src/assets/logo_01.png'

const Home = () => (
  <div className='homeContainer'>
    <div className='homeSubContainer'>
      <div style={{ width: '70%' }}>

        <h1 className='homeTitle'>Welcome to Joru</h1>
        <p className='homeDesc_01'>Your go-to destination for premium Mehendi and makeup services.</p>
        <p className='homeDesc'> Welcome to Joru, your go-to destination for premium Mehendi and makeup services, designed to bring luxury and convenience right to your doorstep. We are passionate about making your special occasions unforgettable by offering exquisite Mehendi artistry and flawless makeup application, tailored to your unique style and preferences. Our team of highly skilled and experienced professionals uses only the finest organic Mehendi and top-tier international makeup brands to ensure a radiant and lasting impression. Whether you're preparing for a wedding, festival, or any celebration, we are committed to delivering exceptional service and creating a seamless, stress-free experience. Trust Joru to transform your vision into reality, making you feel beautiful, confident, and ready to shine on your big day.</p>
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'16px'}}>
        <img src={logo} alt='logo' className='logo'/>
        <div style={{fontSize:'48px',color:'#FFF',fontWeight:'700'}}>Joru</div>
      </div>
    </div>
  </div>
);

export default Home;
