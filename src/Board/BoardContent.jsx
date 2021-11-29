import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './BoardContent.css';
import { patchBoardOnePost, boardDeleteOnePost } from '../api'
import Comment from './Comment.jsx'

function BoardContent(props) {
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContent, setBoardContent] = useState('');
  const [boardUser, setBoardUser] = useState('');
  const [boardDate, setBoardDate] = useState('');
  const [hits, setHits] = useState(null);
  const [underId, setUnderId] = useState('')
  const { id } = props.match.params

  const boardOnePost = useCallback(
    async () => {
      try {
        const { data } = await patchBoardOnePost(id)
        setBoardTitle(data.title)
        setBoardContent(data.content)
        setBoardUser(data.user)
        setBoardDate(data.date)
        setHits(data.hits)
        setUnderId(data._id)
      } catch (error) {
        console.error(error);
      }
    },
    [id, underId],
  )

  useEffect(() => {
    boardOnePost()
  }, [boardOnePost])

  const onBoardClickDelete = async () => {
    if(window.confirm("정말 삭제하시겠어요?")) {
      try {
        await boardDeleteOnePost(id)
        props.history.push('/board')
      } catch (error) {
        console.error(error)
      }
    } 
  }

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
              { boardTitle }
            </div>
            <div className="boardcontent_key">
              <div className="boardcontent_id">
                { boardUser }
              </div>
              <div className="boardcontent_hits">
                조회수 { hits }
              </div>
              <div className="boardcontent_date">
                댓글 1개
              </div>
              <div className="boardcontent_date">
                { boardDate }
              </div>
            </div>
            <div className="boardcontent_lines">
              <hr style = {{ border: 'solid 1px #805050', width: '80%', margin: '6px 0 60px'}}/>
            </div>
          </div>

          <div className="boardcontent_content">
            { boardContent }
          </div>

          <div className="boardcontent_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '150px 0 20px'}}/>
          </div>

          <div className="container boardcontent_buttons">
            <button type="button" className="btns btn-success">
              <Link to="/board" 
              style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>목 록</Link>
            </button>
            <button type="button" className="btns btn-success">
              <Link to={`/board-update/${ id }`}
              style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>수 정</Link>
            </button>
            <button type="button" className="btns btn-success" style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}
            onClick={ onBoardClickDelete } >
              삭 제
            </button>
          </div>

         
          <Comment underId={underId} />

        </div>
      </>
  )
}

export default BoardContent;