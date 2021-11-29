import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { commentOnePost } from '../api'
import CommentEdit from './CommentEdit.jsx';

function CommentUpdate(props) {
  const [comment, setComment] = useState([])
  const [update, setUpdate] = useState(false)

  const commentPost = useCallback(
    async () => {
      try {
        const { data } = await commentOnePost(props.underId)
        setComment([...data])
      } catch (error) {
        console.error(error);
      }
    }, [props.underId],
  )

  const commentUpdate = useCallback(() => {
    setUpdate(prev => !prev)
  }, [])

  useEffect(() => {
    commentPost()
  }, [commentPost, update])

  return (
    <>
        {
          comment.map((a) => (
            <div key={a._id}>
              <div className="boardcontent_reply">
                <div className="boardcontent_reply_arrow"></div>
                <div className="boardcontent_reply_info">
                  <div className="boardcontent_reply_ate">
                    { a.user }님 
                  </div>
                  <div className="boardcontent_reply_content">
                  { a.content }
                  </div>
                  날짜 { a.date }
                </div>
              </div>
              
              <CommentEdit boardId={a._id} commentUpdate={commentUpdate}/>
            </div>
          ))
        }
    </>
  )
}

export default CommentUpdate
