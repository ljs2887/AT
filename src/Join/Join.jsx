import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import '../App.css';
import './Join.css';

function Join() {
  return (
    <>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: 'column' }}>
        <div className="join_title">회원가입</div>
        <div className="join_line"></div>
        <div className="join_sub">아래의 빈칸을 채워주세요</div>
      </div>

      <div className="mb-3" style={{ display: 'flex', gap: '0px', width: '80%', paddingLeft: '38em', flexDirection: 'column', marginTop: '3em' }}>
          <label 
            htmlFor="exampleFormControlInput1" 
            className="form-label" 
            style={{ width: '80px', fontSize: '20px', paddingTop: ' 0px', fontWeight: 'bold', marginLeft: '-4.7%', color: '#000'}}>
              ID
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="ID를 입력해주세요."
            style={{ height: '50px', width: '300px', backgroundColor: '#EDFAF2', color: '#000' }} />
        </div>

        <div className="mb-3" style={{ display: 'flex', gap: '0px', width: '80%', paddingLeft: '38em', flexDirection: 'column', marginTop: '1em' }}>
          <label 
            htmlFor="exampleFormControlInput1" 
            className="form-label" 
            style={{ width: '80px', fontSize: '20px', paddingTop: ' 0px', fontWeight: 'bold', marginLeft: '0%', color: '#000'}}>
              PASSWORD
          </label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="비밀번호를 입력해주세요."
            style={{ height: '50px', width: '300px', backgroundColor: '#EDFAF2', color: '#000' }} />
        </div>

        <div className="mb-3" style={{ display: 'flex', gap: '0px', width: '80%', paddingLeft: '38em', flexDirection: 'column', marginTop: '1em' }}>
          <label 
            htmlFor="exampleFormControlInput1" 
            className="form-label" 
            style={{ width: '80px', fontSize: '20px', paddingTop: ' 0px', fontWeight: 'bold', marginLeft: '-2%', color: '#000'}}>
              닉네임
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="닉네임을 입력해주세요."
            style={{ height: '50px', width: '300px', backgroundColor: '#EDFAF2', color: '#000' }} />
        </div>

        <div className="mb-3" style={{ display: 'flex', gap: '0px', width: '80%', paddingLeft: '38em', flexDirection: 'column', marginTop: '1em' }}>
          <label 
            htmlFor="exampleFormControlInput1" 
            className="form-label" 
            style={{ width: '80px', fontSize: '20px', paddingTop: ' 0px', fontWeight: 'bold', marginLeft: '-3.5%', color: '#000'}}>
              호수
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="ex) 201호"
            style={{ height: '50px', width: '300px', backgroundColor: '#EDFAF2', color: '#000' }} />
        </div>

        <div className="mb-3" style={{ display: 'flex', gap: '0px', width: '80%', paddingLeft: '38em', flexDirection: 'column', marginTop: '1em' }}>
          <label 
            htmlFor="exampleFormControlInput1" 
            className="form-label" 
            style={{ width: '80px', fontSize: '20px', paddingTop: ' 0px', fontWeight: 'bold', marginLeft: '0%', color: '#000'}}>
              전화번호
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="ex) 010-1234-5678"
            style={{ height: '50px', width: '300px', backgroundColor: '#EDFAF2', color: '#000' }} />
        </div>

        <div style={{display: 'flex', gap: '1em', margin: '2em 0 1em 38em', flexDirection: 'column'}}>
          <Button className="join_submit">
            회원가입
          </Button>

          <Button className="join_cancle_submit">
            <Link to="/login" style={{ textDecorationLine: 'none', color: '#fff' }}>
              취소
            </Link>
          </Button>
        </div>
    </>
  )
}

export default Join;