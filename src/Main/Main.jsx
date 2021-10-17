import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import './Main.css';

function Main() {

  const [title, settitle] = useState(['게시판', '공지사항', '건의사항']);

  return (
    <>
      <div className="main_img"></div>

      <div className="main_welcome">
        <div className="main_welcome_text1">
          WELCOME
        </div>
        <div className="main_welcome_line"></div>
        <div className="main_welcome_text2">
          우리 빌라커뮤니티에  오신걸 환영합니다
        </div>
      </div>

      <div className="main_background">
        <div className="main_rule_img"></div>
      </div>

      <div>
        <div className="main_introduce">
          대성빌딩 소개
        </div>
        <div className="main_introduce_sub">
          대성 빌딩의 모든 것을 알려드립니다.
        </div>
      </div>

      <div style={{ display: 'flex', gap: '50px', justifyContent: 'center', marginTop: '80px' }}>
        {
          title.map(function(a, i) {
            return(
              <>
                <div className="main_introduce_box">
                  <div className="main_introduce_title">빌라 { title[i] }</div>
                  <div className="main_introduce_text">빌라의 { title[i] }에 </div>
                  <div className="main_introduce_text">대해 알려드립니다.</div>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', gap: '100px' }}>
                    <div className="main_introduce_img">
                      <img src={ "/image/main_introduce_" + (i+1) + ".png" } style={{ width: '90%', marginTop: '-5%', marginLeft: '20%' }}/>
                    </div>
                    {
                      i === 0
                      ? <Link to="/board" style={{ marginTop: '30%', marginLeft: '10%' }}><div className="main_inroduce_plus"></div></Link>
                      : null
                    }
                    {
                      i === 1
                      ? <Link to="/notice" style={{ marginTop: '30%', marginLeft: '10%' }}><div className="main_inroduce_plus"></div></Link>
                      : null
                    }
                    {
                      i === 2
                      ? <Link to="/suggestions" style={{ marginTop: '30%', marginLeft: '10%' }}><div className="main_inroduce_plus"></div></Link>
                      : null
                    }
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Main;