import React from 'react';
import { useCallback } from 'react';
import logo from '../../assets/images/logo.png';
import ic from '../../assets/images/ic.png';
import './styles/Login.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [email, setemail] = useState('');
  const navigate = useNavigate();

  const [pw, setpw] = useState('');
  const onChangeEmail = useCallback((e: any) => {
    setemail(e.target.value);
  }, []);

  const onChangePw = useCallback((e: any) => {
    setpw(e.target.value);
  }, []);

  const onLogInClicked = useCallback(() => {
    navigate('/worker');
    setemail('');
    setpw('');
  }, [navigate]);
  useEffect(() => {
    console.log(email, pw);
  }, [email, pw]);

  return (
    <div className='App'>
      <div className='Container'>
        <img src={logo}></img>
        <form onSubmit={onLogInClicked}>
          <input
            className='Email'
            placeholder='Email'
            onChange={onChangeEmail}
            required
            value={email}></input>
          <input
            className='Pw'
            type='password'
            onChange={onChangePw}
            required
            value={pw}></input>
          <div className='AutoContainer'>
            <img className='Auto' src={ic}></img>
            <span>자동로그인</span>
          </div>
          <button type='submit'>로그인</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
