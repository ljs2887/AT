import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { patchBoardPost } from '../api';
import '../App.css';
import './Board.css';

function Board() {
  const { id } = useParams();
  const [boardTitle, setBoardTitle] = useState([]);
  const [boardContent, setBoardContent] = useState([]);
  const [boardDate, setBoardDate] = useState([]);
  const [user, setUser] = useState([]);
  const boardHits = boardTitle.length;
  const [boardPostId, setBoardPostId] = useState([]);

  const boardPost = useCallback(
    async () => {
      try {
        const { data } = await patchBoardPost()
        // console.log(res);
        // console.log(res.data);
        setBoardPostId(data.map(v => v.postId))
        setBoardTitle(data.map(v => v.title))
        setBoardContent(data.map(v => v.content))
        setBoardDate(data.map(v => v.date))
        setUser(data.map(v => v.user))
      } catch (error) {
        console.error(error);
      }
    }, [])

  useEffect(() => {
    boardPost()
  }, [boardPost])

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
        <div className="board_sum" style={{ alignSelf: 'flex-start', paddingLeft: '140px' }}>총 게시물 <span style={{ color: '#1fbe5f' }}>{ boardHits }</span>개</div>
        <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '5px 0 20px'}}/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'flex-start', width: '80%', alignItems: 'center' }}>
          {
            boardTitle.map((a, i) => (
                <>
                  <div className="board_list_title" style={{ alignSelf: 'flex-start' }}>{ boardTitle[i] }</div>
                  <div className="board_list_content"><Link to={`/board-content/${ boardPostId[i] }`} style={{ textDecorationLine: 'none', color: '#000' }}>{ boardContent[i] }</Link></div>
                  <div className="board_list_date">{ boardDate[i] }</div>
                  <hr style = {{ border: 'solid 1px #805050', width: '100%', margin: '5px 0'}}/>
                </>
              ))
          }
        </div>
      </div>
      
      <button type="button" className="btn btn-success"><Link to="/board-write" style={{ textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>글쓰기</Link></button>
    </> 
  )
}

export default Board;