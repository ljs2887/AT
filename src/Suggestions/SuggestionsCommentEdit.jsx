import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { suggestionsCommentDeleteOne, suggestionsCommentUpdateOne } from '../api'

const SuggestionsCommentEdit = (props) => {
  const [password, setPassword] = useState('')

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value) 
  }, [])

  const onCommentClickDelete = async () => {

    if(window.confirm("정말 삭제하시겠어요?")) {
      try {
        await suggestionsCommentDeleteOne(props.suggestionsId, password)
        props.commentUpdate()
      } catch (error) {
        alert(error.response.data)
      }
    } 
  }

  return (
    <>
      <div className="container suggestionscontent_buttons">
         <button type="button" className="btns btn-success">
           <Link to={`/suggestions-comment-update/${ props.suggestionsId }`}
          style={{ fontSize: '12px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>
            댓글수정
          </Link>
        </button>
        <button type="button" className="btns btn-success" 
          style={{ fontSize: '12px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}
          onClick={ onCommentClickDelete }>
          댓글삭제
        </button>
        <input 
            className="form-control" 
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={ password }
            onChange={ onChangePassword }
             />
      </div>
    </>
  )
}

export default SuggestionsCommentEdit
