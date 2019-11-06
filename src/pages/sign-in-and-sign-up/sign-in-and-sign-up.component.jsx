import React from 'react'
import './sign-in-and-sign-up.style.scss'
import SignIn from '../../components/sign-In/sign-In.component'
import SignUp from '../../components/sign-up/sign-up.component'

export const SignInAndSignup = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)