import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NoticeWrite.css';
import { createNoticePost } from '../api';

const NoticeWrite = withRouter(props => {
  const [noticeTitle, setNoticeTitle] = useState('')
  const [noticeContent, setNoticeContent] = useState('')
  const [noticeUser, setNoticeUser] = useState('')

  const onChangeNoticeTitle = (e) => {
    setNoticeTitle(e.target.value)
  }

  const onChangeNoticeContent = (e) => {
    setNoticeContent(e.target.value)
  }

  const onChangeNoticeUser = (e) => {
    setNoticeUser(e.target.value)
  }

  const onSubmitNoticeForm = async (e) => {
    e.preventDefault()
    const boardInfo = {
      // 리액트에서 서버로 보내주는 타이틀: 유스스테이트에서 받아오는 타이틀
      title: noticeTitle,
      content: noticeContent,
      user: noticeUser
    }
    try {
      await createNoticePost(boardInfo)
      props.history.push('/notice')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div>
        <div className="notice_img"></div>
        <div style={{ display: 'flex', gap: '0px', justifyContent: 'center', marginTop: '-30px' }}>
          <Link to="/board" style={{ textDecorationLine: 'none' }}><div className="notselect"> 게 시 판 </div></Link>
          <Link to="/notice" style={{ textDecorationLine: 'none' }}><div className="select"> 공 지 사 항 </div></Link>
          <Link to="/suggestions" style={{ textDecorationLine: 'none' }}><div className="notselect"> 건 의 사 항 </div></Link>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: 'column', marginTop: '30px' }}>
        <div className="notice_title">공지사항</div>
        <div className="notice_line"></div>
        <div className="notice_sub">대성빌라의 공지사항입니다.</div>
      </div>

        <div className="container">
          <div className="noticewrite_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '150px 0 20px'}}/>
          </div>

          <div className="mb-3" style={{ display: 'flex', gap: '10px', width: '80%', paddingLeft: '15%' }}>
            <label 
              for="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontSize: '20px', paddingTop: '10px', fontWeight: 'bold' }}>
                제목
            </label>
            <input value = { noticeTitle } onChange = { onChangeNoticeTitle }
              type="text" 
              class="form-control" 
              id="exampleFormControlInput1" 
              placeholder="제목을 입력해주세요"
              style={{ height: '50px' }} />
          </div>

          <div className="noticewrite_lines">
            <hr style = {{ border: 'solid 1px #805050', width: '75%', margin: '10px 0 20px'}}/>
          </div>

          <div className="mb-3" style={{ display: 'flex', gap: '10px', width: '80%', paddingLeft: '15%' }}>
            <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontSize: '20px', paddingTop: '10px', fontWeight: 'bold' }}>
                ID
            </label>
            <input value = { noticeContent } onChange = { onChangeNoticeContent }
              type="text" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="아이디를 입력해주세요"
              style={{ height: '50px' }} />
          </div>

          <div className="noticewrite_lines">
            <hr style = {{ border: 'solid 1px #805050', width: '75%', margin: '10px 0 20px'}}/>
          </div>

          <div className="mb-3" style={{ display: 'flex', gap: '10px', width: '80%', paddingLeft: '15%' }}>
            <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontSize: '20px', paddingTop: '10px', fontWeight: 'bold' }}>
                내용
            </label>
            <textarea value = { noticeUser } onChange = { onChangeNoticeUser }
              type="text"
              class="form-control" 
              id="exampleFormControlInput1" 
              placeholder="내용을 입력해 주세요."
              rows="8"
              style={{ resize: 'none' }} />
          </div>

          <div className="noticewrite_lines">
            <hr style = {{ border: 'solid 1px #805050', width: '75%', margin: '10px 0 20px'}}/>
          </div>

          <div class="mb-3" style={{ display: 'flex', gap: '10px', width: '80%', paddingLeft: '15%' }}>
            <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontWeight: 'bold' }}>
                사진
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>

          <div className="noticewrite_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '10px 0 20px'}}/>
          </div>

        </div>

        <div className="container noticewrite_buttons">
          <button type="button" className="btns btn-success">
            <Link to="/notice" 
            style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>취 소</Link>
          </button>
          <button type="button" className="btns btn-success">
            <Link to="/notice" 
            style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }} onClick = { onSubmitNoticeForm }>확 인</Link>
          </button>
        </div>
    </>
  )
})

export default NoticeWrite;