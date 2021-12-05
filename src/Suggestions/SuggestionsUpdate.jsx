import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './SuggestionsWrite.css';
import { patchSuggestionsOnePost, suggestionsupdateOnePost } from '../api';

const SuggestionsUpdate = (props) => {
  const [suggestionsTitle, setSuggestionsTitle] = useState('')
  const [suggestionsContent, setSuggestionsContent] = useState('')
  const [suggestionsUser, setSuggestionsUser] = useState('')
  const { id } = props.match.params

  const suggestionsOnePost = useCallback(
    async () => {
      try {
        const {data} = await patchSuggestionsOnePost(id)
        setSuggestionsTitle(data.title)
        setSuggestionsContent(data.content)
        setSuggestionsUser(data.user)
      } catch (error) {
        console.error(error);
      }
    },
    [id]
  )

  useEffect(() => {
    suggestionsOnePost()
  }, [suggestionsOnePost])

  const onChangeSuggestionsTitle = (e) => {
    setSuggestionsTitle(e.target.value)
  }

  const onChangeSuggestionsContent = (e) => {
    setSuggestionsContent(e.target.value)
  }

  const onChangeSuggestionsUser = (e) => {
    setSuggestionsUser(e.target.value)
  }

  const onSubmitSuggestionsForm = async (e) => {
    e.preventDefault()
    const suggestionsInfo = {
      title: suggestionsTitle,
      content: suggestionsContent,
      user: suggestionsUser
    }
    try {
      await suggestionsupdateOnePost(id, suggestionsInfo)
      props.history.push(`/suggestions-content/${id}`)
    } catch (error) {
      console.error(error)
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
          <div className="suggestionswrite_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '150px 0 20px'}}/>
          </div>

          <div className="mb-3" style={{ display: 'flex', gap: '10px', width: '80%', paddingLeft: '15%' }}>
            <label 
              for="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontSize: '20px', paddingTop: '10px', fontWeight: 'bold' }}>
                제목
            </label>
            <input value = { suggestionsTitle } onChange = { onChangeSuggestionsTitle }
              type="text" 
              class="form-control" 
              id="exampleFormControlInput1" 
              placeholder="제목을 입력해주세요"
              style={{ height: '50px' }} />
          </div>

          <div className="suggestionswrite_lines">
            <hr style = {{ border: 'solid 1px #805050', width: '75%', margin: '10px 0 20px'}}/>
          </div>

          <div className="mb-3" style={{ display: 'flex', gap: '10px', width: '80%', paddingLeft: '15%' }}>
            <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontSize: '20px', paddingTop: '10px', fontWeight: 'bold' }}>
                ID
            </label>
            <input value = { suggestionsUser } onChange = { onChangeSuggestionsUser }
              type="text" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="아이디를 입력해주세요"
              style={{ height: '50px' }} />
          </div>

          <div className="suggestionswrite_lines">
            <hr style = {{ border: 'solid 1px #805050', width: '75%', margin: '10px 0 20px'}}/>
          </div>

          <div className="mb-3" style={{ display: 'flex', gap: '10px', width: '80%', paddingLeft: '15%' }}>
            <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontSize: '20px', paddingTop: '10px', fontWeight: 'bold' }}>
                내용
            </label>
            <textarea value = { suggestionsContent } onChange = { onChangeSuggestionsContent }
              type="text"
              class="form-control" 
              id="exampleFormControlInput1" 
              placeholder="내용을 입력해 주세요."
              rows="8"
              style={{ resize: 'none' }} />
          </div>

          <div className="suggestionswrite_lines">
            <hr style = {{ border: 'solid 1px #805050', width: '75%', margin: '10px 0 20px'}}/>
          </div>

        </div>

        <div className="container suggestionswrite_buttons">
          <button type="button" className="btns btn-success">
            <Link to="/suggestions" 
            style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>
              취 소</Link>
          </button>
          <button type="button" className="btns btn-success"
            style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }} onClick = { onSubmitSuggestionsForm }>
              확 인
          </button>
        </div>
    </>
  )
}

export default SuggestionsUpdate;