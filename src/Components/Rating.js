import '../Assets/Style/Components/Rating.css'

export default function Rating(props) {
    let redStars = props.rating
    let greyStars = 5 - redStars
    let Stars = []
    while (redStars !== 0) {
        Stars.push(<svg key={'red' + redStars} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
        </svg>)
        redStars -= 1
    }
    while (greyStars !== 0) {
        Stars.push(<svg key={'grey' + greyStars} vwidth="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#E3E3E3"/>
        </svg>)
        greyStars -= 1
    }
    return (
        <>{Stars}</>
    )
}