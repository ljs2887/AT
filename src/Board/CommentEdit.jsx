import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { commentDeleteOne, commentUpdateOne } from '../api'

const CommentEdit = (props) => {

  const onCommentClickDelete = async () => {
    if(window.confirm("정말 삭제하시겠어요?")) {
      try {
        await commentDeleteOne(props.boardId)
        props.commentUpdate()
      } catch (error) {
        console.error(error)
      }
    } 
  }

  return (
    <>
    <div className="container boardcontent_buttons">
         <button type="button" className="btns btn-success">
           <Link to={`/comment-update/${ props.boardId }`}
          style={{ fontSize: '12px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>
            댓글수정
          </Link>
        </button>
        <button type="button" className="btns btn-success" 
          style={{ fontSize: '12px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}
          onClick={ onCommentClickDelete }>
          댓글삭제
        </button>
      </div>
    </>
  )
}

export default CommentEdit
