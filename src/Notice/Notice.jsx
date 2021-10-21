import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import '../App.css';
import './Notice.css';


function Notice() {

  const [noticetitle, setnoticetitle] = useState(['즐거운 한가위 되세요!', '이번주에는 토요일에도 분리수거 가능합니다!']);
  const [noticecontent, setnoticecontent] = useState(['이번에 황금연휴인데 즐거운 한가위 되세요!', '이번주에는 토요일에도 분리수거 차가 왔다간다고 하네요.']);
  const [noticedate, setnoticedate] = useState(['2020-09-19', '2020-09-10']);
  const noticehits = noticetitle.length;

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
      
      <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="notice_sum" style={{ alignSelf: 'flex-start', paddingLeft: '140px' }}>총 게시물 <span style={{ color: '#1fbe5f' }}>{ noticehits }</span>개</div>
        <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '5px 0 20px'}}/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'flex-start', width: '80%', alignItems: 'center' }}>
          {
            noticetitle.map((a, i) => (
                <>
                  <div className="notice_list_title" style={{ alignSelf: 'flex-start' }}>{ noticetitle[i] }</div>
                  <div className="notice_list_content"><Link to="/notice-content" style={{ textDecorationLine: 'none', color: '#000' }}>{ noticecontent[i] }</Link></div>
                  <div className="notice_list_date">{ noticedate[i] }</div>
                  <hr style = {{ border: 'solid 1px #805050', width: '100%', margin: '5px 0'}}/>
                </>
              ))
          }
        </div>
      </div>
      
      <button type="button" className="btn btn-success"><Link to="/notice-write" style={{ textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>글쓰기</Link></button>
    </> 
  )
}

export default Notice;