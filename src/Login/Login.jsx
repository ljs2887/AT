import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import '../App.css';
import './Login.css';

function Login() {
  return (
    <>
      <div className="login_img">
        <div className="login_title">LOGIN</div>
        <div className="login_text">A<text style= {{ color: '#000'}}>T</text></div>
        <div className="mb-3" style={{ display: 'flex', gap: '0px', width: '80%', paddingLeft: '65%', flexDirection: 'column' }}>
          <label 
            htmlFor="exampleFormControlInput1" 
            className="form-label" 
            style={{ width: '80px', fontSize: '20px', paddingTop: ' 0px', fontWeight: 'bold', marginLeft: '-12%', color: '#fff'}}>
              ID
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            style={{ height: '50px', width: '300px' }} />
        </div>

        <div className="mb-3" style={{ display: 'flex', gap: '0px', width: '80%', paddingLeft: '65%', flexDirection: 'column' }}>
          <label 
            htmlFor="exampleFormControlInput1" 
            className="form-label" 
            style={{ width: '80px', fontSize: '20px', paddingTop: ' 0px', fontWeight: 'bold', color: '#fff'}}>
              PASSWORD
          </label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleFormControlInput1" 
            style={{ height: '50px', width: '300px' }} />
        </div>
        <Button className="login_submit">
          LOGIN
        </Button>
        <div style={{ display: 'flex', width: '600px', marginLeft: '993px' }}>
          <Link to="/Find" style={{ textDecorationLine: 'none' }}><div className="login_findid">아이디 찾기 </div></Link>
          <div className="login_findline">|</div>
          <Link to="/Find" style={{ textDecorationLine: 'none' }}><div className="login_findpw">비밀번호 찾기 </div></Link>
          <div className="login_findline">|</div>
          <Link to="/join" style={{ textDecorationLine: 'none' }}><div className="login_join">회원가입</div></Link>
        </div>
      </div>
    </>
  )
}

export default Login;