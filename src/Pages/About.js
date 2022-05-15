import Header from '../Components/Header';
import '../Assets/Style/Pages/About.css';
import Dropdown from "../Components/Dropdown";

export default function About () {
    return (
        <div className='About'>
            <Header actuel='About'/>
            <div className="AboutImageContainer"><img className="AboutImage" alt="About" src="https://i.ibb.co/x78zhBS/kalen-emsley-Bkci-8qcdv-Q-unsplash-2.png"/></div>
            <div className="DropdownAboutContainer">
                <Dropdown size="Large" title='Fiabilité' description='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'/>
                <Dropdown size="Large" title='Recspect' description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'/>
                <Dropdown size="Large" title='Service' description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
                <Dropdown size="Large" title='Sécurité' description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. "/>
            </div>
        </div>
    );
}