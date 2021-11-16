import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { patchNoticePost } from '../api';
import '../App.css';
import './Notice.css';


function Notice() {
  const { id } = useParams();
  const [noticeTitle, setNoticeTitle] = useState([]);
  const [noticeContent, setNoticeContent] = useState([]);
  const [noticeDate, setNoticeDate] = useState([]);
  const [user, setUser] = useState([]);
  const noticeHits = noticeTitle.length;
  const [postId, setPostId] = useState([]);

  const noticePost = useCallback(
    async () => {
      try {
        const { data } = await patchNoticePost()
        setPostId(data.map(v => v.postId))
        setNoticeTitle(data.map(v => v.title))
        setNoticeContent(data.map(v => v.content))
        setNoticeDate(data.map(v => v.date))
        setUser(data.map(v => v.user))
      } catch (error) {
        console.error(error);
      }
    },
    [],
  )

  useEffect(() => {
    noticePost()
  }, [noticePost])

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
      
      <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="notice_sum" style={{ alignSelf: 'flex-start', paddingLeft: '140px' }}>총 게시물 <span style={{ color: '#1fbe5f' }}>{ noticeHits }</span>개</div>
        <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '5px 0 20px'}}/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'flex-start', width: '80%', alignItems: 'center' }}>
          {
            noticeTitle.map((a, i) => (
                <>
                  <div className="notice_list_title" style={{ alignSelf: 'flex-start' }}>{ noticeTitle[i] }</div>
                  <div className="notice_list_content"><Link to="/notice-content" style={{ textDecorationLine: 'none', color: '#000' }}>{ noticeContent[i] }</Link></div>
                  <div className="notice_list_date">{ noticeDate[i] }</div>
                  <hr style = {{ border: 'solid 1px #805050', width: '100%', margin: '5px 0'}}/>
                </>
              ))
          }
        </div>
      </div>
      
      <button type="button" className="btn btn-success"><Link to="/notice-write" style={{ textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>글쓰기</Link></button>
    </> 
  )
}

export default Notice;