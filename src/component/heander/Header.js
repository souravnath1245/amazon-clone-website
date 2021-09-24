import React from 'react';
import logo from '../../images/logo.png'
import Input from '../input/Input';
import Navbar from '../navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div >
            <div className='image'>

            <img src={logo} alt="" />
            </div>
            <Navbar />
            <Input/>
        </div>
    );
};

export default Header;