
import { useContext } from 'react';
import Support from '../../components/support';
import { userContext } from '../../router';
import './style.scss';

function Package(){
    const box = useContext(userContext)
    return (
        <section className='package-page'>
            <h1 className='showcase-text-name'>Packages.</h1>
            <div className="hr-box"><div/></div>
            <p>Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
            <div className='package-blocks'>
                {box.room.map(sup => <Support key={sup.id} sup={sup} />)}
            </div>
        </section>
    )
}
export default Package;