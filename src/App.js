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
  let [boardtitle, setboardtitle] = useState(['내년에 곧 유치원생인데 이 동네에서 어디가 좋을까요?']);
  let [boardcontent, setboardcontent] = useState(['내년에 곧 유치원생이라서 유치원 보낼 곳 찾는게 힘드네요 요즘 사건도 많이 있다보니 안전한 곳으로 보내고 싶어서요 추천해줄 만한 곳이 있으신가요?']);
  let [boarddate, setboarddate] = useState(['2020-09-19']);
  let boardhits = boardtitle.length;
  let [noticetitle, setnoticetitle] = useState(['즐거운 한가위 되세요!', '이번주에는 토요일에도 분리수거 가능합니다!']);
  let [noticecontent, setnoticecontent] = useState(['이번에 황금연휴인데 즐거운 한가위 되세요!', '이번주에는 토요일에도 분리수거 차가 왔다간다고 하네요.']);
  let [noticedate, setnoticedate] = useState(['2020-09-19', '2020-09-10']);
  let noticehits = noticetitle.length;
  let [suggestionstitle, setsuggestionstitle] = useState(['현관 문 앞에 구토가 있어요.', '403호 건의']);
  let [suggestionscontent, setsuggestionscontent] = useState(['오늘 저녁 쯤에 집에 들어오는데 현관문 옆에 누가 구토를 했네요 ㅠㅠ', '저희 집 천장에서 물이 떨어지네요! 바로 확인해주세요!!']);
  let [suggestionsdate, setsuggestionsdate] = useState(['2020-09-13', '2020-09-10']);
  let suggestionshits = suggestionstitle.length;

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/"> 
          <Main title={title} />
        </Route>

        <Route path="/board">
          <Board boardhits={boardhits} boardtitle={boardtitle} boardcontent={boardcontent} boarddate={boarddate} />
        </Route>

        <Route path="/board-content">
          <BoardContent boardtitle={boardtitle} boardcontent={boardcontent} boarddate={boarddate} />
        </Route>

        <Route path="/board-write">
          <BoardWrite />
        </Route>
        
        <Route path="/notice">
          <Notice noticehits = {noticehits} noticetitle={noticetitle} noticecontent={noticecontent} noticedate={noticedate} />
        </Route>

        <Route path="/notice-content">
          <NoticeContent noticetitle={noticetitle} noticecontent={noticecontent} noticedate={noticedate} />
        </Route>

        <Route path="/notice-write">
          <NoticeWrite />
        </Route>

        <Route path="/suggestions">
          <Suggestions suggestionshits = {suggestionshits} suggestionstitle={suggestionstitle} suggestionscontent={suggestionscontent} suggestionsdate={suggestionsdate} />
        </Route>

        <Route path="/suggestions-content">
          <SuggestionsContent suggestionshits = {suggestionshits} suggestionstitle={suggestionstitle} suggestionscontent={suggestionscontent} suggestionsdate={suggestionsdate} />
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
