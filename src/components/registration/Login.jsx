import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  let navigate = useNavigate();

  let onSubmittingUser = async (e) => {
    e.preventDefault();

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const userLogin = await fetch('http://localhost:5000/validEmployee/validEmployees', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(formData)});

      let response = await userLogin.json();

      if (response.status === 'sucess') {
        alert(response.message);
        navigate('/dashBoard')
      } else if(response.status === 'wrong') {
        alert(response.message);
      }else if(response.status === 'failed'){
        alert(response.message);
      }
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  return (
    <form onSubmit={onSubmittingUser}>
      <div>
        <label htmlFor='mail'>Email :</label>
        <input ref={emailRef} id='mail' type='email' />
      </div>
      <div>
        <label htmlFor='pass'>Password :</label>
        <input ref={passwordRef} id='pass' type='password' />
      </div>
      <div style={{ paddingTop: '1rem', textAlign: 'right' }}>
        <Button type='submit'>Login</Button>
      </div>
    </form>
  );
}

export default Login;

