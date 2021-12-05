import React, { useState, useRef, useCallback } from 'react';
import { suggestionsCommentCreate } from '../api'
import SuggestionsCommentContents from './SuggestionsCommentContents.jsx'

const SuggestionsComment = (props) => {
  const [content, setContent] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [updateComment, setUpdateComment] = useState(false)
  const inputRef = useRef(null);
  const contextId = props.underId

  const onChangeUser = useCallback((e) => {
    setUser(e.target.value) 
  }, [])

  const onChangeContent = useCallback((e) => {
    setContent(e.target.value) 
  }, [])

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value) 
  }, [])

  const onSubmitForm = useCallback(
    async (e) => {
      e.preventDefault()
      const suggestionsCommentInfo = {
        content,
        user,
        password
      }
      try {
        console.log(contextId);
          await suggestionsCommentCreate(contextId, suggestionsCommentInfo)
          setUpdateComment(prev => !prev)
          setContent('')
          setUser('')
          setPassword('')
          inputRef.current.focus();
          alert('댓글이 작성되었습니다.')
      } catch (error) {
        alert(error.response.data)
      }
    },
    [user, content, contextId, password],
  )

  return (
    <>
      <SuggestionsCommentContents underId={props.underId} updateComment={updateComment}/>
      <form onSubmit={onSubmitForm} style={{ width: '60%', margin: '20px auto 0' }}>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center'}}>
          <input 
            className="form-control" 
            placeholder="아이디를 입력해주세요"
            ref={inputRef}
            value={ user }
            onChange={ onChangeUser }
            />
          <input 
            className="form-control" 
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={ password }
            onChange={ onChangePassword }
             />
        </div>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            placeholder="댓글을 달아주세요"
            rows="3"
            value={ content }
            onChange={ onChangeContent }
            style={{ marginTop: '10px' }} />
          </div>
          
          <div className="col-auto">
            <button 
              className="btn btn-primary"
              type="submit"
              style={{ backgroundImage: 'linear-gradient(to right, #1fbe5f 22%, #91ea8a 93%)', border: 'solid 0px' }}>
                답글
            </button>
          </div>
        </form>
    </>
  )
}

export default SuggestionsComment
