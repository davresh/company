
import useLoader from '../hooks/useLoader';
import './style.scss';

function Loader({color}){
    const {loading} = useLoader()
    return loading && (
        <div className='loader' style={{backgroundColor:color}}>
            <span className='loader-anim'>Loading...</span>
        </div>
    )
}
export default Loader;