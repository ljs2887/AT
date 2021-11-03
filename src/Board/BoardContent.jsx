import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import '../App.css';
import './BoardContent.css';


function BoardContent(props) {
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

        <div className="container">
          <div className="boardcontent_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '150px 0 20px'}}/>
          </div>        

          <div className="boardcontent_lists">
            <div className="boardcontent_title">
              내년에 곧 유치원생인데 이 동네에서 어디가 좋을까요??
            </div>
            <div className="boardcontent_key">
              <div className="boardcontent_id">
                신사동주민
              </div>
              <div className="boardcontent_hits">
                조회수 4
              </div>
              <div className="boardcontent_date">
                댓글 1개
              </div>
              <div className="boardcontent_date">
                2019-09-10
              </div>
            </div>
            <div className="boardcontent_lines">
              <hr style = {{ border: 'solid 1px #805050', width: '80%', margin: '6px 0 60px'}}/>
            </div>
          </div>

          <div className="boardcontent_content">
            내년에 곧 유치원생이라서 유치원 보낼 곳 찾는게 힘드네요 요즘 사건도 많이 있다보니 안전한 곳으로 보내고 싶어서요 
추천해줄 만한 곳이 있으신가요?
          </div>

          <div className="boardcontent_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '150px 0 20px'}}/>
          </div>

          <div className="container boardcontent_buttons">
            <button type="button" className="btns btn-success">
              <Link to="/board" 
              style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>목 록</Link>
            </button>
            <button type="button" className="btns btn-success" style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }} >
              수 정
            </button>
            <button type="button" className="btns btn-success" style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }} >
              삭 제
            </button>
          </div>

          <div className="boardcontent_reply">
            <div className="boardcontent_reply_arrow"></div>
            <div className="boardcontent_reply_content">
              저도 내년에 저희 아이가 유치원생이라 고민이네요 ㅠㅠㅠ 같이 알아봐요!!
            </div>
          </div>

          <div className="mb-3">

            <textarea 
              className="form-control" 
              id="exampleFormControlTextarea1" 
              placeholder="댓글을 달아주세요"
              rows="3"
              style={{ width: '60%', marginLeft: '290px', marginTop: '50px' }}></textarea>
          </div>

          <div className="col-auto">
            <button 
              type="submit" 
              className="btn btn-primary"
              style={{ backgroundImage: 'linear-gradient(to right, #1fbe5f 22%, #91ea8a 93%)', border: 'solid 0px' }}>답글</button>
          </div>

        </div>
      </>
  )
}

export default BoardContent;