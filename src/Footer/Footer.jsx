import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import './Footer.css';


function Footer() {
  return (
    <div style={{ backgroundColor:'#3e3e3e', marginTop: '100px' }}>
    <div className = "container">
      <footer className = "py-3 mt-4">
        <ul style={{ display : 'flex', gap: '10px', justifyContent: 'center' }}>
          <Link to="/" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold' }}>Home</Link>
          <Link to="/board" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold'}}>게시판</Link>
          <Link to="/notice" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold'}}>공지사항</Link>
          <Link to="/suggestions" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold'}}>건의사항</Link>
          {/* <Link to="/login" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold'}}>로그인</Link> */}
        </ul>
        <Navbar.Brand> <Link to="/"> <img src="image/AT.png" style={{ width: '100px' }}></img> </Link> </Navbar.Brand>
        <hr style = {{ border: 'solid 1px #fff', width: '100%'}}/>
        <p className = "text-center text-muted">© 2021 Company, Inc</p>
      </footer>
    </div>
  </div>
  )
}

export default Footer;