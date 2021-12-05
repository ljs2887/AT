import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './NoticeContent.css';
import { patchNoticeOnePost, noticeDeleteOne } from '../api'

function NoticeContent(props){
  const [noticetitle, setNoticetitle] = useState('');
  const [noticeContent, setNoticeContent] = useState('')
  const [noticeUser, setNoticeUser] = useState('')
  const [noticeDate, setNoticeDate] = useState('')
  const [hits, setHits] = useState(null);
  const { id } = props.match.params

  const noticeOnePost = useCallback(
    async () => {
      try {
        const { data } = await patchNoticeOnePost(id)
        setNoticetitle(data.title)
        setNoticeContent(data.content)
        setNoticeUser(data.user)
        setNoticeDate(data.date)
        setHits(data.hits)
      } catch (error) {
        console.error(error);
      }
    },
    [id],
  )

  useEffect(() => {
    noticeOnePost()
  }, [noticeOnePost])

  const onClickNoticeDelete = async () => {
    if(window.confirm("정말 삭제하시겠어요?")) {
      try {
        await noticeDeleteOne(id)
        props.history.push('/notice')
      } catch (error) {
        console.error(error);
      }
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
          <div className="noticecontent_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '150px 0 20px'}}/>
          </div>        

          <div className="noticecontent_lists">
            <div className="noticecontent_title">
              { noticetitle }
            </div>
            <div className="noticecontent_key">
              <div className="noticecontent_id">
                { noticeUser }
              </div>
              <div className="noticecontent_hits">
                조회수 { hits }
              </div>
              <div className="noticecontent_date">
                { noticeDate }
              </div>
            </div>
            <div className="noticecontent_lines">
              <hr style = {{ border: 'solid 1px #805050', width: '80%', margin: '6px 0 60px'}}/>
            </div>
          </div>

          <div className="noticecontent_content">
            { noticeContent }
          </div>

          <div className="noticecontent_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '150px 0 20px'}}/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '200px', gap: '20px' }}>
          <button type="button" className="btns btn-success">
              <Link to="/notice" 
              style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>목 록</Link>
            </button>
            <button type="button" className="btns btn-success">
              <Link to={`/notice-update/${id}`}
              style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>수 정</Link>
            </button>
            <button type="button" className="btns btn-success"
              style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}
              onClick={ onClickNoticeDelete }>
                삭 제
            </button>
          </div>

          

        </div>
    </>
  )
}

export default NoticeContent;