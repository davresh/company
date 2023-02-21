
import './style.scss';

function DesignerBox({user}){
    return (
        <div className='about-designer'>
            <div className="designer-img">
                <img src={user.img} alt="" />
            </div>
            <div className='designer-about-text'>
                <h1>{user.name}</h1>
                <h3>{user.prof}</h3>
                <p>{user.text}</p>
            </div>
        </div>
    )
}
export default DesignerBox;