import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useParams } from "react-router-dom"
import logements from '../Back-End/logements.json'
import Gallery from "../Components/Gallery"
import Biography from "../Components/Biography"
import Dropdown from "../Components/Dropdown"
import '../Assets/Style/Pages/Logement.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"

export default function Logement () {
    const [logement, setLogement] = useState(null)
    let params = useParams()
    let navigate = useNavigate();
    useEffect(()=>{
       let data = logements.find(item => item.id === params.id)
       setLogement(data)
       if (!data) navigate('/error')
    // eslint-disable-next-line   
    }, [])

    if (logement === null) return null
    return (
        <>
            <Header />
            <div className="Logement">
                <Gallery logement={logement}/>
                <Biography logement={logement}/>
                <div className="DropdownCont">
                    <Dropdown size='medium' title="Description" description={logement.description}/>
                    <Dropdown equipement="true" size='medium' title="Equipements" description={logement.equipments}/>
                </div>
            </div>
            <Footer />
        </>
    )
} 