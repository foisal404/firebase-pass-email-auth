import React, { useState } from 'react';

import { EyeIcon,EyeSlashIcon } from '@heroicons/react/24/solid'
import './Register.css'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import { app } from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';



const Register = () => {
    const auth = getAuth(app);
    const [hide,setHide]=useState(true)
    const handlerFormSubmit=(event)=>{
            event.preventDefault();
            console.log("submit");
            const email=event.target.email.value;
            const password=event.target.password.value;
            const displayname=event.target.name.value;
            console.log(email,password,displayname);
            createUserWithEmailAndPassword(auth,email,password)
            .then(result=>{
                const loggedUser=result.user;
                console.log(loggedUser);
                sendVerificationMail(loggedUser)
                profileUpdate(loggedUser,displayname)
            })
            .catch(error=>{
                console.error(error.message)
            })
    }
    const sendVerificationMail=(user)=>{
        sendEmailVerification(user)
        .then(()=>{
            console.log("Email Send Successfully");
        })
        .catch(error=>{
            console.error(error)
        })
    }
    const profileUpdate=(user,name)=>{
        updateProfile(user,{
            displayName:name
        })
        .then(()=>{
            console.log('profile uodated');
            console.log(user);
        })
        .catch(error=>{
            console.error(error.message)
        })
    }
    return (
        
        <div className='w-25 mx-auto mt-5'>
            <h1 className='text-center'>Registation Form</h1>
            <form onSubmit={handlerFormSubmit}>
                <input className='w-100 my-2' type="email" name="email" id="email  " required placeholder='your Email'/><br />
                <input className='w-100 my-2' type="name" name="name" id="name" required placeholder='Display name'/><br />
                <input className='w-100 my-2' type={`${!hide?'text':'password'}`} name="password" id="password" required placeholder='your Password'/>
                <span className='btnposition' onClick={()=>setHide(!hide)}>
                    {
                        hide?<EyeSlashIcon className='btnsize'></EyeSlashIcon>:<EyeIcon className='btnsize'></EyeIcon>
                    }
                </span><br />
                <p>already have account? go to <Link to='/login'>Login</Link> </p>
                <button className='w-25' type='submit'>SingUp</button>
            </form>
        </div>
    );
};

export default Register;