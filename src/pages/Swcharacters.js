// import Personcard from "../components/Personcard"
import Style from "../styles/swcharacters.module.css"
import { BiSearchAlt } from "react-icons/bi"
import { useEffect, useState } from "react"

const Swcharacters = () => {

    useEffect(() => {

        fetch('https://swapi.dev/api/people/')
        .then((response) => response.json())
        .then((data) => {
            setCharData(data.results)
            console.log(data.results)
        })
        .catch((err) => {console.log(err.message)})
    }, [])

    const [showModal, setShowModal] = useState(false)
    const [charData, setCharData] = useState([])

    const [charIndex, setIndex] = useState()


    const modal = (index) => {
        setShowModal(true)
        setIndex(index)

    }

    return <>
        {/* <Navbar/
        > */}

        <div className={Style.wrapper}>
            <div className={Style.heading}>
                <h1>Star Wars Characters</h1>
                <p>A Single Page Application showing all the characters from star wars Api</p>
                <form method="get">
                    <input type="search" name="" id="" placeholder="Search"/>
                    <BiSearchAlt/>
                </form>
            </div>

            <section className={Style.charWrap}>
            {
                charData.length === 0 && 
                <p>Loading...</p>
            }
            {
                charData.length > 0 &&
                charData.map((data, index) => {
                    return(

                        <div className={Style.card} key = {index}>

                            <img src="https://thumbs.dreamstime.com/b/close-up-smiling-young-black-female-fashion-model-portrait-84681420.jpg" alt="" />
                            <h3 onClick={() => modal(index)}>{data.name}</h3>
                        </div>
                    
                )})
            }
                
            </section>
        </div>

        <footer>
            <p>Made With Love❤️. Sophia</p>
        </footer>

        {
            charData.length > 0 && 
            charData.map((data, index) => 
                index === charIndex &&
                <div className={showModal? Style.modal : Style.hide}>
                    <div className={Style.modalCard}>
                        <p className={Style.close} onClick = {() => setShowModal(false)}>x</p>
                        <img src="https://thumbs.dreamstime.com/b/close-up-smiling-young-black-female-fashion-model-portrait-84681420.jpg" alt="" />
                        <div className={Style.details} key = {index}>
                            <h3>{data.name}</h3>
                            <p><span>Height: </span>{data.height}</p>
                            <p><span>Gender: </span>{data.gender}</p>
                        </div>
                    </div>
                </div> 

            )
        }


    </>

}

export default Swcharacters