import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import '../App.css';
import './BoardContent.css';
function BoardContent() {
  return (
      <>
        <div>
          <div className="board_img"></div>
          <div style={{ display: 'flex', gap: '0px', justifyContent: 'center', marginTop: '-30px' }}>
            <div className="select"> 게 시 판 </div>
            <div className="notselect"> 공 지 사 항 </div>
            <div className="notselect"> 건 의 사 항 </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: 'column', marginTop: '30px' }}>
          <div className="board_title">게시판</div>
          <div className="board_line"></div>
          <div className="board_sub">빌라 여러분들의 자유로운 게시판입니다.</div>
        </div>
        <div className="container">
          <div className="mb-3" style={{ display: 'flex', gap: '30px' }}>
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input 
              type="text" 
              class="form-control" 
              id="exampleFormControlInput1" 
              placeholder="name@example.com"
              style={{ height: '50px' }} />
          </div>
        </div>
      </>
  )
}

export default BoardContent;