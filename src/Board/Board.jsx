import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import '../App.css';
import './Board.css';

function Board(props) {

  let { id } = useParams();
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
      
      <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="board_sum" style={{ alignSelf: 'flex-start', paddingLeft: '140px' }}>총 게시물 <span style={{ color: '#1fbe5f' }}>1</span>개</div>
        <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '5px 0'}}/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'flex-start', width: '80%', alignItems: 'center' }}>
          {
            props.boardtitle.map(function(a, i) {
              return(
                <>
                  <div className="board_list_title" style={{ alignSelf: 'flex-start' }}>{ props.boardtitle[i] }</div>
                  <div className="board_list_content"><Link to="/board-content" style={{ textDecorationLine: 'none', color: '#000' }}>{ props.boardcontent[i] }</Link></div>
                  <div className="board_list_date">{ props.boarddate[i] }</div>
                  <hr style = {{ border: 'solid 1px #805050', width: '100%', margin: '5px 0'}}/>
                </>
              )
            })
          }
        </div>
      </div>

      <button type="button" className="btn btn-success"><Link to="/board-write" style={{ textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>글쓰기</Link></button>
    </> 
  )
}

export default Board;