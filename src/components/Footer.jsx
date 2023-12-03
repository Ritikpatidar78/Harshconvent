import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <div className='footer d-flex justify-content-around px-lg-5 px-md-4 pt-4 px-1 ' >
                <div className='one1'>
                    <h1>CAMPUS</h1>
                    <h2>Harsh Convent School Barodiya, Dhar (M.P.)</h2>
                </div>
                <div className='two'>
                    <h1>Contact Us...</h1>
                    <h2>Mob:- 9993944485</h2>
                    <h2>email:- harsh@schoolgmail.com</h2>
                </div>

            </div>
            <div className='copy d-flex justify-content-center p-2'>
                <h1>Copyright © 2024 Harsh Convent School | Developed by : Ritik All Rights Reserved</h1>
            </div>
        </>
    )
}

export default Footer