import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon,EyeSlashIcon } from '@heroicons/react/24/solid'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'
import { app } from '../../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const emailRef=useRef();
    const [hasmail,setHasmail]=useState(true)
    const [hide,setHide]=useState(true)
    const handlerFormSubmit=(event)=>{
        event.preventDefault();
        console.log('submit');
        const email=event.target.email.value;
        const password=event.target.password.value;
        // console.log(email,password);
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.error(error.message)
        })

    }
    const handlerForgetPassword=()=>{
        setHasmail(true)
        if(!emailRef.current.value){
            setHasmail(false)
            return
        }

        
        // console.log(emailRef.current.value);
    }
    return (
        <div className='w-25 mx-auto'>
            <form onSubmit={handlerFormSubmit} >
                <h1 className='text-center'>Login Here !!!</h1>
                <input className='my-3 w-100 ps-2 rounded' ref={emailRef} type="email" name="email" id="email" placeholder='Enter email' required/><br />
                <input className='my-3 w-100 ps-2 rounded position-relative' type={`${!hide ?'text':'password'}`} name="password" id="password" placeholder='Enter password' required/>
                <span className='Sizer' onClick={()=>setHide(!hide)}>
                    {
                        hide?<EyeSlashIcon className='Sizer'></EyeSlashIcon>:<EyeIcon className='Sizer'></EyeIcon>
                    }
                </span><br />
                <p>Forget password? <button type='button' onClick={handlerForgetPassword} className='btn btn-link'>click here</button></p>
                
                <p>no account? go to <Link to='/register'>Register</Link> </p>
                
                <button className='mx-auto w-25' type='submit'>Login</button>
            </form>
            
            
            <p className='text-danger text-center'>{!hasmail && 'no mail details'}</p>
            
            
            
        </div>
    );
};

export default Login;