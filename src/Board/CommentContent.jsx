import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { commentOnePost } from '../api'

function CommentContent(props) {
  const [comment, setComment] = useState([])
  const [commentUser, setCommentUser] = useState([])
  const [commentDate, setCommentDate] = useState([])

  const commentPost = useCallback(
    async () => {
      try {
        const { data } = await commentOnePost(props.underId)
        setComment(data.map(v => v.content))
        setCommentUser(data.map(v => v.user))
        setCommentDate(data.map(v => v.date))
        
      } catch (error) {
        console.error(error);
      }
    }, [props.underId],
  )

  useEffect(() => {
    commentPost()
  }, [commentPost, props.updateComment])

  return (
    <>
        {
          comment.map((a, i) => (
            <>
              <div className="boardcontent_reply">
                <div className="boardcontent_reply_arrow"></div>
                <div className="boardcontent_reply_info">
                  <div className="boardcontent_reply_ate">
                    { commentUser[i] }님 
                  </div>
                  <div className="boardcontent_reply_content">
                  { comment[i] }
                  </div>
                  날짜 { commentDate[i] }
                </div>
              </div>
            </>
          ))
        }
    
      <div className="container boardcontent_buttons">
        <button type="button" className="btns btn-success">
          <Link to={'/board-update'}
          style={{ fontSize: '12px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>
            댓글수정
          </Link>
        </button>
        <button type="button" className="btns btn-success" 
          style={{ fontSize: '12px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>
          댓글삭제
        </button>
      </div>
    </>
  )
}

export default CommentContent
