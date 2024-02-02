import './CSS/Header.css';
// import ReactSwitch from 'react-switch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState} from 'react';

export default function Header() {
    
    /* 
    ------ toggle button for theme --------------------
    const toggleTheme = () =>{
         theme == "light"?setTheme("dark"):setTheme("light"());
         console.log("clicked")
        } 
    */

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        setInterval(() => setTime(new Date()), 1000);
    },[])
    return (
        <div className="Head">
            <h2><FontAwesomeIcon className="comp" icon={faComputer}/>NICODEV</h2>
            <div className="addons">
                <div className="date">
                <h3>{time.toLocaleString()}</h3>                
                </div>
                {/* <div className="switch">
                    <ReactSwitch onClick={toggleTheme} checked={theme}/>
                </div> */}
            </div>
        </div>
    )
}
