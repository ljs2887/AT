import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Loding from './Loding.jsx';

const Main = lazy(() => import('./Main/Main'))
const Board = lazy(() => import('./Board/Board'))
const BoardContent = lazy(() => import('./Board/BoardContent'))
const BoardWrite = lazy(() => import('./Board/BoardWrite'))
const BoardUpdate = lazy(() => import('./Board/BoardUpdate'))
const CommentUpdate = lazy(() => import('./Board/CommentUpdate'))
const Notice = lazy(() => import('./Notice/Notice'))
const NoticeContent = lazy(() => import('./Notice/NoticeContent'))
const NoticeWrite = lazy(() => import('./Notice/NoticeWrite'))
const NoticeUpdate = lazy(() => import('./Notice/NoticeUpdate'))
const Suggestions = lazy(() => import('./Suggestions/Suggestions'))
const SuggestionsContent = lazy(() => import('./Suggestions/SuggestionsContent'))
const SuggestionsWrite = lazy(() => import('./Suggestions/SuggestionsWrite'))
const Login = lazy(() => import('./Login/Login'))
const Find = lazy(() => import('./Find/Find'))
const Join = lazy(() => import('./Join/Join'))
const ChangePassword = lazy(() => import('./ChangePassword/ChangePassword'))

function App() {

  return (
    <div className="App">
      <Header />

      <Switch>
        <Suspense fallback={ <Loding/> }>
          <Route path="/board" component={Board} />
          <Route path="/board-content/:id" component={BoardContent} />
          <Route path="/board-write" component={BoardWrite} />     
          <Route path="/board-update/:id" component={BoardUpdate} />        
          <Route path="/notice" component={Notice} />
          <Route path="/notice-content/:id" component={NoticeContent} />
          <Route path="/notice-write" component={NoticeWrite} />
          <Route path="/notice-update/:id" component={NoticeUpdate} />      
          <Route path="/suggestions" component={Suggestions} />
          <Route path="/suggestions-content" component={SuggestionsContent} />
          <Route path="/suggestions-write" component={SuggestionsWrite} />
          <Route path="/comment-update/:id" component={CommentUpdate} />
          <Route path="/login" component={Login} />
          <Route path="/Find" component={Find} />
          <Route path="/join" component={Join} />
          <Route path="/ChangePassword" component={ChangePassword} />
          <Route exact path="/" component={Main} />
        </Suspense>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
