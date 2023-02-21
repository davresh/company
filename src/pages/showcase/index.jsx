


import { useContext } from 'react';
import Intairer from '../../components/interier';
import { userContext } from '../../router';
import './style.scss';

function Showcase(){
    const box = useContext(userContext);
    return (
        <section className='showcase-page'>
            <div className='showcase-text'>
                <h1 className='site-name'>Interior Design</h1>
                <h1 className='showcase-text-name'>Showcase.</h1>
                <div className='hr-box'><div/></div>
            </div>
            <div className='showcase-images'>
               {box.showcaseImg.map(img =>  <Intairer key={img.id} img={img} />)}
            </div>
        </section>
    )
}
export default Showcase;