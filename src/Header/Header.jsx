import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    <Navbar bg="light" variant="light">
    <Container style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: '60%'}}>
    <Navbar.Brand> <Link to="/"> <img src="image/AT.png"></img> </Link> </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link> <Link to="/" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#000', fontWeight: 'bold' }}>Home</Link></Nav.Link>
      <Nav.Link> <Link to="/board" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#000', fontWeight: 'bold' }}>게시판</Link></Nav.Link>
      <Nav.Link> <Link to="/notice" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#000', fontWeight: 'bold' }}>공지사항</Link></Nav.Link>  
      <Nav.Link> <Link to="/suggestions" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#000', fontWeight: 'bold' }}>건의사항</Link></Nav.Link>
      {/* <Nav.Link> <Link to="/login" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#000', fontWeight: 'bold' }}>로그인</Link></Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;