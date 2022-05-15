import Header from '../Components/Header';
import '../Assets/Style/Pages/Erreur.css'
import { Link } from "react-router-dom";

export default function Erreur () {
    return (
        <div className='Error'>
            <Header actuel='None'/>
            <div className="DivErreur">
                <p className="Erreur404">404</p>
                <p className="ErreurDescription">Oups! La page que vous demandez n'existe pas.</p>
                <Link className="RetourAccueil" to='/Home'>Retourner sur la page d’accueil</Link>
            </div>
        </div>    
    )
}