import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner(){
    
    return <div className="sg-banner">
        <img src={logo} alt="sungla-logo" className="sg-logo" />
        <h1 className='sg-title'>sungla</h1>
        </div>
}

export default Banner;