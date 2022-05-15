import '../Assets/Style/Components/Footer.css'
import Logo from './Logo'

function Footer() {

    return (
        <footer className='Footer'>
            <Logo size='110'/>
            <p className='footer_description'>© 2022 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;