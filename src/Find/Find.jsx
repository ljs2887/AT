import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import '../App.css';
import './Find.css';

function Find() {

  const [find, setfind] = useState(['아이디', '비밀번호'])

  return (
    <>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: 'column' }}>
        <div className="find_title">아이디 / 비밀번호 찾기</div>
        <div className="find_line"></div>
        <div className="find_sub">아래에 정보를 입력하세요</div>
      </div>
      <div style={{ display: 'flex', gap: '20em' , justifyContent: 'flex-start', marginLeft: '20em' }}>
        {
          find.map(function(a, i) {
            return(
              <>
              <div>
                <div className="find_titlefind">
                  {find[i]} 찾기
                </div>
                <hr style = {{ border: 'solid 1px #805050', width: '250%', margin: '1em 0'}}/>
              </div>
              </>
            )
          })
        }
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="mb-3" style={{ display: 'flex', gap: '0px', width: '80%', paddingLeft: '21em', flexDirection: 'column' }}>
            <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontSize: '20px', paddingTop: ' 0px', fontWeight: 'bold', marginLeft: '-8%', color: '#000'}}>
                호수
            </label>
            <input 
              type="text" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="ex) 201호"
              style={{ height: '50px', width: '350px', backgroundColor: '#EDFAF2', color: '#000' }} />
          </div>

          <div className="mb-3" style={{ display: 'flex', gap: '0px', width: '80%', paddingLeft: '21em', flexDirection: 'column' }}>
            <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontSize: '20px', paddingTop: ' 0px', fontWeight: 'bold', marginLeft: '0%', color: '#000'}}>
                전화번호
            </label>
            <input 
              type="text" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="ex) 010-1234-5678"
              style={{ height: '50px', width: '350px', backgroundColor: '#EDFAF2', color: '#000' }} />
          </div>

          <Button className="find_id_submit">
            ID 찾기
          </Button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="mb-3" style={{ display: 'flex', gap: '0px', width: '80%', paddingLeft: '9em', flexDirection: 'column' }}>
            <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontSize: '20px', paddingTop: ' 0px', fontWeight: 'bold', marginLeft: '-11%', color: '#000'}}>
                ID
            </label>
            <input 
              type="text" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="ID를 입력하세요"
              style={{ height: '50px', width: '350px', backgroundColor: '#EDFAF2', color: '#000' }} />
          </div>

          <div className="mb-3" style={{ display: 'flex', gap: '0px', width: '80%', paddingLeft: '9em', flexDirection: 'column' }}>
            <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontSize: '20px', paddingTop: ' 0px', fontWeight: 'bold', marginLeft: '0%', color: '#000'}}>
                전화번호
            </label>
            <input 
              type="text" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="ex) 010-1234-5678"
              style={{ height: '50px', width: '350px', backgroundColor: '#EDFAF2', color: '#000' }} />
          </div>

          <Button className="find_pw_submit">
            <Link to="/ChangePassword" style={{ textDecorationLine: 'none', color: '#fff' }}>PW 찾기</Link>
          </Button>
        </div>
      </div>

    </>
  )
}

export default Find;