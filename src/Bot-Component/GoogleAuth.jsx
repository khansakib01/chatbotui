import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
function GoogleAuth() {
   const navigate = useNavigate();
  
  return (
    <div>
         <GoogleLogin
    onSuccess={credentialResponse => {
      console.log(credentialResponse);
      navigate('/setup-organization')
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
    

    </div>
  )
}

export default GoogleAuth
