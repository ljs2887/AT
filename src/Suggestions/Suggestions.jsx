import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import '../App.css';
import './Suggestions.css';

function Suggestion() {
  
  const [suggestionstitle, setsuggestionstitle] = useState(['현관 문 앞에 구토가 있어요.', '403호 건의']);
  const [suggestionscontent, setsuggestionscontent] = useState(['오늘 저녁 쯤에 집에 들어오는데 현관문 옆에 누가 구토를 했네요 ㅠㅠ', '저희 집 천장에서 물이 떨어지네요! 바로 확인해주세요!!']);
  const [suggestionsdate, setsuggestionsdate] = useState(['2020-09-13', '2020-09-10']);
  const suggestionshits = suggestionstitle.length;

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
      
      <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="suggestions_sum" style={{ alignSelf: 'flex-start', paddingLeft: '140px' }}>총 게시물 <span style={{ color: '#1fbe5f' }}>{ suggestionshits }</span>개</div>
        <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '5px 0 20px'}}/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'flex-start', width: '80%', alignItems: 'center' }}>
          {
            suggestionstitle.map(function(a, i) {
              return(
                <>
                  <div className="suggestions_list_title" style={{ alignSelf: 'flex-start' }}>{ suggestionstitle[i] }</div>
                  <div className="suggestions_list_content"><Link to="/suggestions-content" style={{ textDecorationLine: 'none', color: '#000' }}>{ suggestionscontent[i] }</Link></div>
                  <div className="suggestions_list_date">{ suggestionsdate[i] }</div>
                  <hr style = {{ border: 'solid 1px #805050', width: '100%', margin: '5px 0'}}/>
                </>
              )
            })
          }
        </div>
      </div>
      
      <button type="button" className="btn btn-success"><Link to="/suggestions-write" style={{ textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>글쓰기</Link></button>
    </> 
  )
}

export default Suggestion;