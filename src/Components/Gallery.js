import '../Assets/Style/Components/Gallery.css'
import { useState } from 'react'

export default function Gallery (props) {
    let logement = props.logement
    const [imgActive, SetImg] = useState(0)
    const picsLength = logement.pictures.length - 1
    const previous = () => imgActive === 0 ? SetImg(picsLength) : SetImg(imgActive - 1)
    const next = () => imgActive === picsLength ? SetImg(0) : SetImg(imgActive + 1)
    return (
        <div className='Gallery'>
                <img className='ImageActive' alt='Gallery' src={logement.pictures[imgActive]} />
                {logement.pictures.length > 1 ?
                    <><svg onClick={() => previous()} width="48" height="80" className='leftCross' viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/></svg>
                    <svg onClick={() => next()} width="48" height="80" className='rightCross' viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/></svg></>    
                : <></>
                }
        </div>
    )
}