import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';

function Header() {
  return (
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home"><img src="./AT.png"></img></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#게시판">게시판</Nav.Link>
          <Nav.Link href="#공지사항">공지사항</Nav.Link>  
          <Nav.Link href="#건의사항">건의사항</Nav.Link>
          <Nav.Link href="#로그인">로그인</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;