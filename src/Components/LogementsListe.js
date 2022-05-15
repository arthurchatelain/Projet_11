import logements from '../Back-End/logements.json'
import { Link } from 'react-router-dom'

export default function LogementsListe () {
    return (
        <section className='LogementsListe'>
            {logements.map((item) => (
                <Link to={`/Logement/${item.id}`} key={item.id} className='locationBackground'>
                    <img className='locationImage' alt={item.Id} src={item.cover}/>
                    <div className='locationImageDiv'></div>
                    <p className='locationTitre'>{item.title}</p>
                </Link>
            ))}
        </section>
    )
}