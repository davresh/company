
import './style.scss';

function Support({sup}){
    return (
        <ul className='package-support'>    
            <li className="support-list" style={{backgroundColor:sup.name[0]}}>
                {sup.name[1]}
            </li>
            <li className="support-list ">{sup.floor}</li>
            <li className="support-list">{sup.hour}</li>
            <li className="support-list">{sup.ptext}</li>
            <li className="support-list">{sup.discount}</li>
            <li className="support-list">{sup.deal}</li>
            <li className="support-list">
                <h2>$ {sup.per}</h2>
                <span>per room</span>
            </li>
            <li className="support-list">
                <button className={sup.btnColor}>Sign Up</button>
            </li>
        </ul>
    )
}

export default Support;