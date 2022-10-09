import React from 'react';
import { useCallback } from 'react';
import logo from '../../assets/images/logo.png';
import ic from '../../assets/images/ic.png';
import icx from '../../assets/images/icx.png';

import './styles/Login.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { EChange } from '../../typedef/common/common.types';
function Login() {
  const [email, setEmail] = useState('');
  const [color, setColor] = useState('#767676');
  const [toggle, setToggle] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onChangeEmail = useCallback((e: EChange) => {
    setEmail(e.target.value);
  }, []);

  const onToggle = useCallback(() => {
    setToggle((prev) => !prev);
    if (color === '#767676') {
      setColor('#111');
    } else {
      setColor('#767676');
    }
  }, []);

  const onChangePassword = useCallback((e: EChange) => {
    setPassword(e.target.value);
  }, []);

  const onLogInClicked = useCallback(() => {
    navigate('/worker');
    setEmail('');
    setPassword('');
  }, [navigate]);

  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  return (
    <div className='login'>
      <div className='container'>
        <img src={logo}></img>
        <form onSubmit={onLogInClicked}>
          <input
            className='email'
            placeholder='Email'
            onChange={onChangeEmail}
            required
            value={email}></input>
          <input
            className='password'
            type='password'
            onChange={onChangePassword}
            required
            value={password}></input>
          <div className='auto-container'>
            <div>
              {!toggle ? (
                <img className='auto' onClick={onToggle} src={icx}></img>
              ) : (
                <img className='auto' onClick={onToggle} src={ic}></img>
              )}
            </div>
            <span style={{ color: color }}>자동로그인</span>
          </div>
          <button type='submit'>로그인</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
