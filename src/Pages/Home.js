import '../Assets/Style/Pages/Home.css'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import LogementsListe from '../Components/LogementsListe';

export default function Home () {
    return (
        <div className='Home'>
            <Header actuel='Home'/>
            <div className='background'>
                <img className='backgroundImage' alt='Fond' src='https://i.ibb.co/mqz1Vbv/Fond.png' />
                <p className='backgroundText'>Chez vous, partout et ailleurs</p>
            </div>
            <LogementsListe />
            <Footer />
        </div>
    );
}