
import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../router';
import './style.scss';

function Header(){
    const box = useContext(userContext);
    const barRef = useRef();
    const location = useLocation();
    const [scroll,setScroll] = useState(0)
    const [touch,setTouch] = useState(0)
    useEffect(()=>{
        if(location.pathname == '/showcase'){
            box.headCol[1]('#227640')
        }else if(location.pathname == '/services'){
            box.headCol[1]('#226a76')
        }else if(location.pathname == '/designers'){
            box.headCol[1]('#757622')
        }else if(location.pathname == '/packages'){
            box.headCol[1]('#bf2323')
        }else if(location.pathname == '/contact'){
            box.headCol[1]('#3e578f')
        }else{
            box.headCol[1]('#f44336')
        }
    },[location])
    window.onscroll = () => {
        setScroll(Math.floor(window.scrollY/10))
    }
    window.ontouchmove = (e)=>{
        setTouch(Math.floor(e.changedTouches[0].clientX))
    }

    useEffect(()=>{
        if(touch>20 && touch<=100){
            barRef.current.classList.add('log-w993');
        }else if(touch>280){
            barRef.current.classList.remove('log-w993');
        }
    },[touch])

    return (
        <>
        <header style={{backgroundColor:box.headCol[0]}}
            
        > 
            <div className='header-w993'>
                <button className='icon-bars-solid' 
                    onClick={()=>{
                        barRef.current.classList.add('log-w993');
                    }}
                    // onBlur={(e)=>{
                    //     barRef.current.classList.remove('log-w993');
                    // }}
                />
                <h2>Company Name</h2>
            </div>
            <div 
                className='logo-company'
                ref={barRef} 
                onClick={(e)=>{
                    e.target.classList.remove('log-w993');
                }}
            >            
                <ul 
                    className='pages'
                    style={{backgroundColor:box.headCol[0]}}
                >
                    <span className='close-bar' onClick={()=>{
                        barRef.current.classList.remove('log-w993');
                    }}>X</span>
                    <li className="link-page"><h1>Company Name</h1></li>
                    <li className="link-page"><NavLink to='/'>Home</NavLink></li>
                    <li className="link-page"><NavLink to='/showcase'>Showcase</NavLink></li>
                    <li className="link-page"><NavLink to='/services'>Services</NavLink></li>
                    <li className="link-page"><NavLink to='/designers'>Designers</NavLink></li>
                    <li className="link-page"><NavLink to='/packages'>Packages</NavLink></li>
                    <li className="link-page"><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
            <a href="#home" className='to-top-btn' 
                style={{
                    display:scroll>=50?'block':'none'
                    ,backgroundColor:box.headCol[0]}}
            >TO TOP</a>
        </header>
        </>
    )
}
export default Header;