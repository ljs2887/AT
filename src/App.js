import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
// import Header from './Header/Header';
import Main from './Main/Main';
import Board from './Board/Board';
import BoardContent from './Board/BoardContent';
import BoardWrite from './Board/BoardWrite';
import Notice from './Notice/Notice';
import NoticeContent from './Notice/NoticeContent';
import NoticeWrite from './Notice/NoticeWrite';
import Suggestions from './Suggestions/Suggestions';
import SuggestionsContent from './Suggestions/SuggestionsContent';
import SuggestionsWrite from './Suggestions/SuggestionsWrite';
import Login from './Login/Login';
// import Footer from './Footer/Footer';

function App() {

  let [title, settitle] = useState(['게시판', '공지사항', '건의사항']);
  let [boardtitle, setboardtitle] = useState(['내년에 곧 유치원생인데 이 동네에서 어디가 좋을까요?']);
  let [boardcontent, setboardcontent] = useState(['내년에 곧 유치원생이라서 유치원 보낼 곳 찾는게 힘드네요 요즘 사건도 많이 있다보니 안전한 곳으로 보내고 싶어서요 추천해줄 만한 곳이 있으신가요?']);
  let [boarddate, setboarddate] = useState(['2020-09-19']);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: '60%'}}>
        <Navbar.Brand> <Link to="/"> <img src="image/AT.png"></img> </Link> </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link> <Link to="/" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#000', fontWeight: 'bold' }}>Home</Link></Nav.Link>
          <Nav.Link> <Link to="/board" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#000', fontWeight: 'bold' }}>게시판</Link></Nav.Link>
          <Nav.Link> <Link to="/notice" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#000', fontWeight: 'bold' }}>공지사항</Link></Nav.Link>  
          <Nav.Link> <Link to="/suggestions" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#000', fontWeight: 'bold' }}>건의사항</Link></Nav.Link>
          <Nav.Link> <Link to="/login" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#000', fontWeight: 'bold' }}>로그인</Link></Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/"> 
          <Main title={title} />
        </Route>

        <Route path="/board">
          <Board boardtitle={boardtitle} boardcontent={boardcontent} boarddate={boarddate} />
        </Route>

        <Route path="/board-content">
          <BoardContent boardtitle={boardtitle} boardcontent={boardcontent} boarddate={boarddate} />
        </Route>

        <Route path="/board-write">
          <BoardWrite />
        </Route>
        
        <Route path="/notice">
          <Notice />
        </Route>

        <Route path="/notice-content">
          <NoticeContent />
        </Route>

        <Route path="/notice-write">
          <NoticeWrite />
        </Route>

        <Route path="/suggestions">
          <Suggestions />
        </Route>

        <Route path="/suggestions-content">
          <SuggestionsContent />
        </Route>

        <Route path="/suggestions-write">
          <SuggestionsWrite />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>

        {/* <Container style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: '50%'}}>
          <Navbar.Brand> <Link to="/"> <img src="image/AT.png"></img> </Link> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link> <Link to="/" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#909090', fontWeight: 'bold', marginTop: '30px' }}>Home</Link></Nav.Link>
            <Nav.Link> <Link to="/board" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#909090', fontWeight: 'bold', marginTop: '30px' }}>게시판</Link></Nav.Link>
            <Nav.Link> <Link to="/notice" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#909090', fontWeight: 'bold', marginTop: '30px' }}>공지사항</Link></Nav.Link>  
            <Nav.Link> <Link to="/suggestions" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#909090', fontWeight: 'bold', marginTop: '30px' }}>건의사항</Link></Nav.Link>
            <Nav.Link> <Link to="/login" style={{display : 'flex', justifyContent: 'space-between', flexDirection: 'row', textDecorationLine: 'none', color: '#909090', fontWeight: 'bold', marginTop: '30px' }}>로그인</Link></Nav.Link>
          </Nav>
        </Container>
        <div className="Footer_text">
          AreaTree UI Kit. Carefully crafted UI components for Adobe Experience Design.
        </div>
        <div className="Footer_line"></div>
        <div className="Footer_rights">
          (C) 2021 AreaTree. All rights reserved 
        </div>
      </div> */}
      <div style={{ backgroundColor:'#3e3e3e', marginTop: '100px' }}>
        <div className = "container">
          <footer className = "py-3 mt-4">
            <ul style={{ display : 'flex', gap: '10px', justifyContent: 'center' }}>
              <Link to="/" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold' }}>Home</Link>
              <Link to="/board" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold'}}>게시판</Link>
              <Link to="/notice" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold'}}>공지사항</Link>
              <Link to="/suggestions" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold'}}>건의사항</Link>
              <Link to="/login" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold'}}>로그인</Link>
            </ul>
            <Navbar.Brand> <Link to="/"> <img src="image/AT.png" style={{ width: '100px' }}></img> </Link> </Navbar.Brand>
            <hr style = {{ border: 'solid 1px #fff', width: '100%'}}/>
            <p className = "text-center text-muted">© 2021 Company, Inc</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
