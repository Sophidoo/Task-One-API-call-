import Style from "../styles/swcharacters.module.css"
import { useEffect, useState } from "react"
import { images } from '../data'
import {TbLoaderQuarter} from "react-icons/tb"


const Swcharacters = () => {
    const [page, setPage] = useState(1)
    const [status, setStatus] = useState()
    const [itemsNum, setItemsNum] = useState()
    const pageNum = []
    const [showModal, setShowModal] = useState()
    const [charData, setCharData] = useState([])
    const [charIndex, setIndex] = useState()
    
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
            console.log(data)
        })
        .catch((err) => {console.log(err.message)})

    }, [page])

    const modal = (index) => {
        setShowModal(true)
        setIndex(index)
    }



    return <>

        <div className={Style.wrapper}>
            <div className={Style.heading}>
                <h1>Star Wars Characters</h1>
                <p>A Single Page Application showing all the characters from star wars Api</p>
            </div>

            

            <section className={Style.charWrap}>
                {
                    !status && 
                    <div className={Style.loader}>
                    <div className={Style.loadWrap}>
                        <TbLoaderQuarter/>
                        <h2>Loading...</h2>
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


        <section className={status ? Style.pagination : Style.hide}>
            <div className={Style.paginationWrap}>
                <h4 onClick={() => setPage(page <= 1 ? 1 : page - 1)} className = {page === 1 && Style.disabled}>prev</h4>
                {
                    status && pageNum.map((data) => {
                        return(
                            <p onClick={() => setPage(data)} className = {parseInt(page) === parseInt(data) ? Style.active : Style.num} key = {data}>{data}</p>
                        )
                    })
                }
                <h4 onClick={() => setPage(page >= 9 ? 9 : page + 1)} className = {page === 9 && Style.disabled}>next</h4>
            </div>
        </section>


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