import '../Assets/Style/Components/Header.css'
import Logo from './Logo'
import { Link } from "react-router-dom";

function Header(props) {
    let pageActuel = props.actuel
    return (
        <header className='Header'>
            <Logo size='200' />
            <nav>
                <Link to='/Home' className={pageActuel === 'Home' ? 'lienNav active' : 'lienNav' }  id="Home">Accueil</Link>
                <Link to='/About' className={pageActuel === 'About' ? 'lienNav active' : 'lienNav' } id="About">A Propos</Link>
            </nav>

        </header>
    );
}

export default Header;