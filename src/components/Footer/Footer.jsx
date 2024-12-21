import '../../styles/main.css';
import logo from "../../assets/logos/white_logo.png";


const Footer = () => {
    return (
        <footer className='footer'>
            <img src={logo} alt='Logo Kasa' className='footer-logo'/>
            <p className='footer-text'>Ⓒ 2020 Kasa. All right reserved</p>
        </footer>
    );
};


export default Footer