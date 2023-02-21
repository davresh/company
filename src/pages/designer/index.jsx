
import { useContext } from 'react';
import DesignerBox from '../../components/designerBox';
import { userContext } from '../../router';
import './style.scss';

function Designer(){
    const box = useContext(userContext);
    return (
        <section className='designer-page'>
            <h1 className='showcase-text-name'>Designers.</h1>
            <div className="hr-box"><div/></div>
            <p>The best team in the world.</p>
            <p>We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h4>Our designers are thoughtfully chosen:</h4>
            <div className='disigner-blocks'>
                {box.person.map(user => <DesignerBox key={user.id} user={user} />)}
            </div>
        </section>
    )
}
export default Designer;