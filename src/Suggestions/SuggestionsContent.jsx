import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './SuggestionsContent.css';
import { patchSuggestionsOnePost, suggestionsDeleteOnePost } from '../api'
import SuggestionsComment from './SuggestionsComment.jsx'

function SuggestionContent(props) {
  const [suggestionsTitle, setSuggestionsTitle] = useState('');
  const [suggestionsContent, setSuggestionsContent] = useState('');
  const [suggestionsUser, setSuggestionsUser] = useState('');
  const [suggestionsDate, setSuggestionsDate] = useState('');
  const [hits, setHits] = useState(null);
  const [underId, setUnderId] = useState('')
  const { id } = props.match.params
  
  const suggestionsOnePost = useCallback(
    async () => {
      try {
        const { data } = await patchSuggestionsOnePost(id)
        setSuggestionsTitle(data.title)
        setSuggestionsContent(data.content)
        setSuggestionsUser(data.user)
        setSuggestionsDate(data.date)
        setHits(data.hits)
        setUnderId(data._id)
      } catch (error) {
        console.error(error);
      }
    },
    [id, underId],
  )

  useEffect(() => {
    suggestionsOnePost()
  }, [suggestionsOnePost])

  const onSuggestionsClickDelete = async () => {
    if(window.confirm("정말 삭제하시겠어요?")) {
      try {
        await suggestionsDeleteOnePost(id)
        props.history.push('/suggestions')
      } catch (error) {
        console.error(error)
      }
    } 
  }

  return (
    <>
      <div>
        <div className="suggestions_img"></div>
        <div style={{ display: 'flex', gap: '0px', justifyContent: 'center', marginTop: '-30px' }}>
          <Link to="/board" style={{ textDecorationLine: 'none' }}><div className="notselect"> 게 시 판 </div></Link>
          <Link to="/notice" style={{ textDecorationLine: 'none' }}><div className="notselect"> 공 지 사 항 </div></Link>
          <Link to="/suggestions" style={{ textDecorationLine: 'none' }}><div className="select"> 건 의 사 항 </div></Link>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: 'column', marginTop: '30px' }}>
        <div className="suggestions_title">건의사항</div>
        <div className="suggestions_line"></div>
        <div className="suggestions_sub">빌라 여러분들의 건의할 내용이 있으시면 여기에다 글 남겨주세요.</div>
      </div>

      <div className="container">
          <div className="suggestionscontent_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '150px 0 20px'}}/>
          </div>        

          <div className="suggestionscontent_lists">
            <div className="suggestionscontent_title">
              { suggestionsTitle }
            </div>
            <div className="suggestionscontent_key">
              <div className="suggestionscontent_id">
                { suggestionsUser }
              </div>
              <div className="suggestionscontent_hits">
                조회수 { hits }
              </div>
              <div className="suggestionscontent_date">
                댓글 1개
              </div>
              <div className="suggestionscontent_date">
                { suggestionsDate }
              </div>
            </div>
            <div className="suggestionscontent_lines">
              <hr style = {{ border: 'solid 1px #805050', width: '80%', margin: '6px 0 60px'}}/>
            </div>
          </div>

          <div className="suggestionscontent_content">
            { suggestionsContent }
          </div>

          <div className="suggestionscontent_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '150px 0 20px'}}/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '200px', gap : '20px' }}>
          <button type="button" className="btns btn-success">
              <Link to="/suggestions" 
              style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>목 록</Link>
            </button>
            <button type="button" className="btns btn-success">
              <Link to={`/suggestions-update/${ id }`}
              style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>수 정</Link>
            </button>
            <button type="button" className="btns btn-success"
              style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}
              onClick={ onSuggestionsClickDelete }>
                삭 제
            </button>
          </div>

          <SuggestionsComment underId={underId} />

        </div>
    </>
  )
}

export default SuggestionContent;