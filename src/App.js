import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
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
import Footer from './Footer/Footer';

function App() {

  let [title, settitle] = useState(['게시판', '공지사항', '건의사항']);
  let [boardtitle, setboardtitle] = useState(['내년에 곧 유치원생인데 이 동네에서 어디가 좋을까요?','ss']);
  let [boardcontent, setboardcontent] = useState(['내년에 곧 유치원생이라서 유치원 보낼 곳 찾는게 힘드네요 요즘 사건도 많이 있다보니 안전한 곳으로 보내고 싶어서요 추천해줄 만한 곳이 있으신가요?','ss']);
  let [boarddate, setboarddate] = useState(['2020-09-19','ss']);

  return (
    <div className="App">
      <Header />

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

      <Footer />
    </div>
  );
}

export default App;
