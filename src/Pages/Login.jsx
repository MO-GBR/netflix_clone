import React, { useEffect } from 'react'
import { TbBrandGoogle } from "react-icons/tb";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from '../Request/firebase';

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from 'react-router-dom';

import { BiLoaderCircle } from 'react-icons/bi';

import { loginWithGoogle } from '../Redux/Actions/userActions';

const Login = () => {
  const dispatch = useDispatch();

  const { isFetching, currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      loginWithGoogle(dispatch, user);
      console.log(user)
    }).catch((error) => {
      alert(error.message);
    })
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        loginWithGoogle(dispatch, user);
        navigate("/");
      }
    });
  }, [currentUser]);
  return (
    <div className='login'>
      <div className='login-blackBG' />
      <div className='login-container'>
        <div className='login-logo'>
          <img src='login.png' className='login-logo-img' />
        </div>
        <form className='login-form' onSubmit={login}>
          <button type="submit" className='login-btn'>
            {
              isFetching
              ? (<><BiLoaderCircle className='login-icon' /> Loading...</>)
              : (<><TbBrandGoogle className='login-icon' /> Login With Google</>)
            }
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login