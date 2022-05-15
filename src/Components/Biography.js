import '../Assets/Style/Components/Biography.css'
import Tag from './Tag'
import Rating from './Rating'

export default function Biography (props) {
    const logement = props.logement
    return (
        <div className='biography'>
            <div className='biographyRight'>
                <h2 className='logTitle'>{logement.title}</h2>
                <h3 className='logLocation'>{logement.location}</h3>
                <div className='listeTags'>{logement.tags.map((i) => <Tag key={i} name={i} />)}</div>
            </div>
            <div className='biographyLeft'>
                <div className='Host'>
                    <p className='hostName'>{logement.host.name}</p>
                    <img alt='hostPicture' className='hostPicture' src={logement.host.picture}/>
                </div>
                <div className='Rating'>
                    <Rating rating={parseInt(logement.rating)}/>
                </div>
            </div>
        </div>
    )
}