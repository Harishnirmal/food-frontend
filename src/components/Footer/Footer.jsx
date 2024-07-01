import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
             <h1>Capsy</h1>
              <p>National Highway, Opposite Muthood Finance, Mulagumoodu Junction - 629167.</p>
              <ul>
                <li>Whatsapp: 9025353044</li>
                <li>Mail id: thecapsy2@gmail.com</li>
              </ul>
              <div className="footer-social-icons">
               <img src={assets.facebook_icon} alt="" />
               <img src={assets.twitter_icon} alt="" />
               <img src={assets.linkedin_icon} alt="" />
              </div>
            
            </div>
            <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                <a href="./"><li>Home</li></a>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
               </ul>
            </div>
           
            <div className="footer-content-right"> 
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+919025353044</li>
                    <li>thecapsy2@gmail.com</li>
                    <li>28/123 pioneer street,</li>
                    <li>mulagumoodu, kattathurai post.</li>
                </ul>
            </div>
            <div><h1>Location:</h1></div>
           <div className='responsive-map'>
            <h1>Location</h1>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15795.873186333256!2d77.30558864414262!3d8.205942519216833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f95a3ae803a7%3A0xea15b9e276fb0cb2!2sEraniel%2C%20Tamil%20Nadu%20629802!5e0!3m2!1sen!2sin!4v1719839295995!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
        </div>
       
        <hr />
        <p className='footer-copyright'>Copyright 2024 harish.com - All Right Reserved</p>
      
    </div>
  )
}

export default Footer