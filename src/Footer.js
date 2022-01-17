import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

    const redirectGit = () => {
        window.open("https://github.com/Poopies99/Amazon-React")
    }

    return (
        <div>
            <div className='Footer'>
                <img className='Footer__image' src='/images/logo.png'/>
                <div className='Footer__title'>This website was created by Poopies99</div>
                <u className='Footer__link' onClick={redirectGit}>Click here to access the Github Repository</u>
            </div>
        </div>
    )
}

export default Footer
