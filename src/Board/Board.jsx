import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import '../App.css';
import './Board.css';

function Board() {

  const { id } = useParams();
  const [boardtitle, setboardtitle] = useState(['내년에 곧 유치원생인데 이 동네에서 어디가 좋을까요?']);
  const [boardcontent, setboardcontent] = useState(['내년에 곧 유치원생이라서 유치원 보낼 곳 찾는게 힘드네요 요즘 사건도 많이 있다보니 안전한 곳으로 보내고 싶어서요 추천해줄 만한 곳이 있으신가요?']);
  const [boarddate, setboarddate] = useState(['2020-09-19']);
  const boardhits = boardtitle.length;

  return (
    <>
      <div>
        <div className="board_img"></div>
        <div style={{ display: 'flex', gap: '0px', justifyContent: 'center', marginTop: '-30px' }}>
          <Link to="/board" style={{ textDecorationLine: 'none' }}><div className="select"> 게 시 판 </div></Link>
          <Link to="/notice" style={{ textDecorationLine: 'none' }}><div className="notselect"> 공 지 사 항 </div></Link>
          <Link to="/suggestions" style={{ textDecorationLine: 'none' }}><div className="notselect"> 건 의 사 항 </div></Link>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: 'column', marginTop: '30px' }}>
        <div className="board_title">게시판</div>
        <div className="board_line"></div>
        <div className="board_sub">빌라 여러분들의 자유로운 게시판입니다.</div>
      </div>
      
      <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="board_sum" style={{ alignSelf: 'flex-start', paddingLeft: '140px' }}>총 게시물 <span style={{ color: '#1fbe5f' }}>{ boardhits }</span>개</div>
        <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '5px 0 20px'}}/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'flex-start', width: '80%', alignItems: 'center' }}>
          {
            boardtitle.map(function(a, i) {
              return(
                <>
                  <div className="board_list_title" style={{ alignSelf: 'flex-start' }}>{ boardtitle[i] }</div>
                  <div className="board_list_content"><Link to="/board-content" style={{ textDecorationLine: 'none', color: '#000' }}>{ boardcontent[i] }</Link></div>
                  <div className="board_list_date">{ boarddate[i] }</div>
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