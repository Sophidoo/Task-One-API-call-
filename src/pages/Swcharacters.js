import Style from "../styles/swcharacters.module.css"
import { useEffect, useState } from "react"
import { images } from '../data'
import {TbWifiOff} from "react-icons/tb"
import Header from "../components/Header."
import Footer from "../components/Footer"
import Loader from "../components/Loader"


const Swcharacters = () => {
    const [page, setPage] = useState(1)
    const [status, setStatus] = useState()
    const [itemsNum, setItemsNum] = useState()
    const pageNum = []
    const [showModal, setShowModal] = useState()
    const [charData, setCharData] = useState([])
    const [charIndex, setIndex] = useState()
    const [error, setError] = useState()
    
    for (let i = 1; i <= Math.ceil(itemsNum/10); i++) {
        pageNum.push([i])
    }
    
    
    
    useEffect(() => {

        fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then((response) => response.json())
        .then((data) => {
            setCharData(data.results)
            setItemsNum(data.count)
            setStatus(true)
            console.log(data.results)
        })
        .catch((err) => {
            setError(true)
            console.log(err.message)
        })

    }, [page])

    const modal = (index) => {
        setShowModal(true)
        setIndex(index)
    }


    return <>

        <div className={Style.wrapper}>
            <Header/>

            

            <section className={Style.charWrap}>
                {
                    !status && !error &&
                    <Loader/>
                }
                    
                {
                    !status && error &&
                    <div className={Style.error}>
                    <div className={Style.errorwrap}>
                        <TbWifiOff/>
                        <h2>No Internet Connection...</h2>
                    </div>
                    </div>
                }
                {
                    status && 
                    charData.map((data, index) => {
                        return(

                            <div className={Style.card} key = {index}>

                                <img src={images[index]} alt="" />
                                <h3 onClick={() => modal(index)}>{data.name}</h3>
                            </div>
                        
                    )})
                }
            </section>
        </div>


        <section className={status ? Style.pagination : Style.hide} onClick = {() => setStatus(false)}>
            <div className={Style.paginationWrap}>
                <h4 onClick={() => setPage(page < 2 ? 1 : page - 1)} className = {page === parseInt(1) ? Style.hide : undefined}>prev</h4>
                {
                    status && pageNum.map((data) => {
                        return(
                            <p onClick={() => setPage(data)} className = {parseInt(page) === parseInt(data) ? Style.active : Style.num} key = {data}>{data}</p>
                        )
                    })
                }
                <h4 onClick={() => setPage(page > 8 ? 9 : page + 1)} className = {page === 9 ? Style.hide : undefined}>next</h4>
            </div>
        </section>


        <Footer/>

        {
            charData.length > 0 && 
            charData.map((data, index) => 
                index === charIndex &&
                <div className={showModal? Style.modal : Style.hide}>
                    <div className={Style.modalCard}>
                        <p className={Style.close} onClick = {() => setShowModal(false)}>x</p>
                        <img src={images[index]} alt="" />
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