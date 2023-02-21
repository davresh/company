
import './style.scss';

function Intairer({img}){
    return (
        <div className='showcase-image-block'>
            <img src={img.img} alt="" />
        </div>
    )
}
export default Intairer;