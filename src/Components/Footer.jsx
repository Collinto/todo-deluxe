import React from 'react';
import './CSS/Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faMapPin, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {FaMapPin, FaPhone, FaEnvelope} from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="foot">
            <div className="contact">
                <h3>Contact us:</h3>
                <ul className='addresses'>
{/*                 <li><FontAwesomeIcon icon={faPhone} className='icon'/> +124456789012 </li>
                <li> <FontAwesomeIcon icon={faMapPin} className='icon' style={{marginRight:"25px"}}/> Dallas, Texas, United States</li>
                <li><FontAwesomeIcon icon={faEnvelope} className="icon"/> <a href="nicodevs@gmail.com">nicodevs@gmail.com </a></li> */}
                <li><FaPhone className='icon'/> +124456789012 </li>
                <li> <FaMapPin className='icon' style={{marginRight:"25px"}}/> Dallas, Texas, United States</li>
                <li><FaEnvelope className="icon"/> <a href="nicodevs@gmail.com">nicodevs@gmail.com </a></li>
                </ul>
            </div>
            <span className="copyright" >&copy; Nico2024</span>
        </div>
    )
}
