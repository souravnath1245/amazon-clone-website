import React from 'react';
import './input.css';

const Input = () => {
    return (
        <div className='inputDiv'>
            <input className='input' type="text" placeholder='Type here to search' />
            <span className="icon">

            <i class="fas fa-shopping-cart"></i>
            </span>
            <span className='badge'>0</span>
        </div>
    );
};

export default Input;