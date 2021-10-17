import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import '../App.css';
import './ChangePassword.css';

function ChangePassword() {

  return (
    <>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: 'column' }}>
        <div className="changepw_title">비밀번호 변경</div>
        <div className="changepw_line"></div>
        <div className="changepw_sub">비밀번호를 변경해주세요</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '5em 0 0 -10em'}}>        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="mb-3" style={{ display: 'flex', gap: '0px', width: '80%', paddingLeft: '9em', flexDirection: 'column' }}>
            <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '200px', fontSize: '20px', paddingTop: ' 0px', fontWeight: 'bold', marginLeft: '-11%', color: '#000'}}>
                새로운 비밀번호
            </label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="새로운 비밀번호를 입력하세요"
              style={{ height: '50px', width: '350px', backgroundColor: '#EDFAF2', color: '#000' }} />
          </div>

          <div className="mb-3" style={{ display: 'flex', gap: '0px', width: '80%', paddingLeft: '9em', flexDirection: 'column' }}>
            <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '200px', fontSize: '20px', paddingTop: ' 0px', fontWeight: 'bold', marginLeft: '0%', color: '#000'}}>
                새로운 비밀번호 확인
            </label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="새로운 비밀번호 확인입니다."
              style={{ height: '50px', width: '350px', backgroundColor: '#EDFAF2', color: '#000' }} />
          </div>

          <Button className="changepw_submit">
            비밀번호 변경
          </Button>
        </div>
      </div>

    </>
  )
}

export default ChangePassword;