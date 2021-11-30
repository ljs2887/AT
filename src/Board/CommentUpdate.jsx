import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { commentUpdateOne, commentOneFatch } from '../api'
import CommentContent from './CommentContent.jsx';

const CommentUpdate = (props) => {
  const [content, setContent] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const inputRef = useRef(null);
  const { id } = useParams();

  const commentPost = useCallback(
    async () => {
      try {
        const { data } = await commentOneFatch(id)
        setContent(data.content)
        setUser(data.user)
        setPassword(data.password)
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }, [props.underId],
  )

  useEffect(() => {
    commentPost()
  }, [commentPost])

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onChangeUser = (e) => {
    setUser(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onSubmitComment = async (e) => {
    e.preventDefault()
    const commentInfo = {
      content,
      user,
      password,
    }
    try {
      const { data } = await commentUpdateOne(id, commentInfo)
      props.history.push('/board')
    } catch(error) {
      alert(error.response.data)
    }
  }

  return (
    <>
      <CommentContent underId={props.underId} />
        <form onSubmit={onSubmitComment} style={{ width: '60%', margin: '20px auto 0' }}>
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

export default CommentUpdate
