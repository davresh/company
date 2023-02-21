
import { useRef } from 'react';
import useValidation from '../../hooks/useValidation';
import './style.scss';

function Contact(){
    const [name,setName] = useValidation()
    const [mail,setMail] = useValidation()
    const nameRef = useRef()
    const mailRef = useRef()
    return (
        <section className='contact-page'>
            <h1 className='showcase-text-name'>Contact.</h1>
            <div className="hr-box"><div/></div>
            <p>Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!</p>
            <div className="contact-inputs-box">
                <div className="input-box">
                    <label>Name</label>
                    <input type="text" placeholder='Name' ref={nameRef} required/>
                    {name}
                </div>
                <div className="input-box">
                    <label>Email</label>
                    <input type="email" placeholder='Email' ref={mailRef} required/>
                    {mail}
                </div>
                <div className="input-box">
                    <label>Message</label>
                    <textarea placeholder='Message...' required/>
                </div>
                <div className='input-box'>
                    <button onClick={()=>{
                        setName(nameRef.current);
                        setMail(mailRef.current);
                    }}>Send Message</button>
                </div>
            </div>
        </section>
    )
}
export default Contact;