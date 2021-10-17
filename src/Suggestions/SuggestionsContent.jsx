import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import '../App.css';
import './SuggestionsContent.css';

function SuggestionContent() {

  const [suggestionstitle, setsuggestionstitle] = useState(['현관 문 앞에 구토가 있어요.', '403호 건의']);

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
              { suggestionstitle[1] }
            </div>
            <div className="suggestionscontent_key">
              <div className="suggestionscontent_id">
                403호
              </div>
              <div className="suggestionscontent_hits">
                조회수 3
              </div>
              <div className="suggestionscontent_date">
                2019-09-10
              </div>
            </div>
            <div className="suggestionscontent_lines">
              <hr style = {{ border: 'solid 1px #805050', width: '80%', margin: '6px 0 60px'}}/>
            </div>
          </div>

          <div className="suggestionscontent_content"></div>

          <div className="suggestionscontent_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '150px 0 20px'}}/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '200px' }}>
            <button type="button" className="btns btn-success">
              <Link to="/suggestions" 
              style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>목 록</Link>
            </button>
          </div>

        </div>
    </>
  )
}

export default SuggestionContent;