import logo from './logo.svg';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <div className="nav">
        <div className="logo"></div>
        <div className="home">
            HOME
        </div>
        <div className="nav_item">
            게시판
        </div>
        <div className="nav_item">
            공지사항
        </div>
        <div className="nav_item">
            건의사항
        </div>
        <div className="nav_item">
            로그인
        </div>
      </div> */}
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

      {/* <div>
        <div className="main_img">
          
        </div>
      </div> */}

    </div>
  );
}

export default App;
