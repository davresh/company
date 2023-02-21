
import Contact from '../contact';
import Designer from '../designer';
import Footer from '../footer';
import Packages from '../package';
import Service from '../service';
import Showcase from '../showcase';
import './style.scss';

function Home(){
    return (
        <section className='home-page'>
            <Showcase/>
            <Service/>
            <Designer/>
            <Packages/>
            <Contact/>
        </section>
    )
}
export default Home;