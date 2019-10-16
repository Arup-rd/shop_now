import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../asset/4.3crown.svg'
import './header.style.scss'


export const Header = () => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/shop'>Contact</Link>
        </div>
    </div>
)