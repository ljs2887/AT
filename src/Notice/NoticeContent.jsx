import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import '../App.css';
import './NoticeContent.css';

function NoticeContent(){

  const [noticetitle, setnoticetitle] = useState(['즐거운 한가위 되세요!', '이번주에는 토요일에도 분리수거 가능합니다!']);

  return (
    <>
      <div>
        <div className="notice_img"></div>
        <div style={{ display: 'flex', gap: '0px', justifyContent: 'center', marginTop: '-30px' }}>
          <Link to="/board" style={{ textDecorationLine: 'none' }}><div className="notselect"> 게 시 판 </div></Link>
          <Link to="/notice" style={{ textDecorationLine: 'none' }}><div className="select"> 공 지 사 항 </div></Link>
          <Link to="/suggestions" style={{ textDecorationLine: 'none' }}><div className="notselect"> 건 의 사 항 </div></Link>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: 'column', marginTop: '30px' }}>
        <div className="notice_title">공지사항</div>
        <div className="notice_line"></div>
        <div className="notice_sub">대성빌라의 공지사항입니다.</div>
      </div>

      <div className="container">
          <div className="noticecontent_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '150px 0 20px'}}/>
          </div>        

          <div className="noticecontent_lists">
            <div className="noticecontent_title">
              { noticetitle[0] }
            </div>
            <div className="noticecontent_key">
              <div className="noticecontent_id">
                관리자
              </div>
              <div className="noticecontent_hits">
                조회수 3
              </div>
              <div className="noticecontent_date">
                2019-09-19
              </div>
            </div>
            <div className="noticecontent_lines">
              <hr style = {{ border: 'solid 1px #805050', width: '80%', margin: '6px 0 60px'}}/>
            </div>
          </div>

          <div className="noticecontent_content"></div>

          <div className="noticecontent_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '150px 0 20px'}}/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '200px' }}>
            <button type="button" className="btns btn-success">
              <Link to="/notice" 
              style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>목 록</Link>
            </button>
          </div>

        </div>
    </>
  )
}

export default NoticeContent;