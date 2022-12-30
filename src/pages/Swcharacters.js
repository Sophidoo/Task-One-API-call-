// import Personcard from "../components/Personcard"
import Style from "../styles/swcharacters.module.css"
import { BiSearchAlt } from "react-icons/bi"
import { useState } from "react"

const Swcharacters = () => {

    const [showModal, setShowModal] = useState(false)

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
                <div className={Style.card}>
                    <img src="https://thumbs.dreamstime.com/b/close-up-smiling-young-black-female-fashion-model-portrait-84681420.jpg" alt="" />
                    <h3 onClick={() => setShowModal(true)}>John Doe</h3>
                </div>
                <div className={Style.card}>
                    <img src="https://thumbs.dreamstime.com/b/close-up-smiling-young-black-female-fashion-model-portrait-84681420.jpg" alt="" />
                    <h3>John Doe</h3>
                </div>
                <div className={Style.card}>
                    <img src="https://thumbs.dreamstime.com/b/close-up-smiling-young-black-female-fashion-model-portrait-84681420.jpg" alt="" />
                    <h3>John Doe</h3>
                </div>
                <div className={Style.card}>
                    <img src="https://thumbs.dreamstime.com/b/close-up-smiling-young-black-female-fashion-model-portrait-84681420.jpg" alt="" />
                    <h3>John Doe</h3>
                </div>
                <div className={Style.card}>
                    <img src="https://thumbs.dreamstime.com/b/close-up-smiling-young-black-female-fashion-model-portrait-84681420.jpg" alt="" />
                    <h3>John Doe</h3>
                </div>
                <div className={Style.card}>
                    <img src="https://thumbs.dreamstime.com/b/close-up-smiling-young-black-female-fashion-model-portrait-84681420.jpg" alt="" />
                    <h3>John Doe</h3>
                </div>
                <div className={Style.card}>
                    <img src="https://thumbs.dreamstime.com/b/close-up-smiling-young-black-female-fashion-model-portrait-84681420.jpg" alt="" />
                    <h3>John Doe</h3>
                </div>
                <div className={Style.card}>
                    <img src="https://thumbs.dreamstime.com/b/close-up-smiling-young-black-female-fashion-model-portrait-84681420.jpg" alt="" />
                    <h3>John Doe</h3>
                </div>
            </section>
        </div>

        <footer>
            <p>Made With Love❤️. Sophia</p>
        </footer>



        <div className={showModal? Style.modal : Style.hide}>
            <div className={Style.modalCard}>
                <p className={Style.close} onClick = {() => setShowModal(false)}>x</p>
                <img src="https://thumbs.dreamstime.com/b/close-up-smiling-young-black-female-fashion-model-portrait-84681420.jpg" alt="" />
                <div className={Style.details}>
                    <h3>John Doe</h3>
                    <p><span>Height: </span>250km</p>
                    <p><span>Gender: </span>Female</p>
                </div>
            </div>
        </div>

    </>

}

export default Swcharacters