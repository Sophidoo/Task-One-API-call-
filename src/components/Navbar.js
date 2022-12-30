import Style from "../styles/navbar.module.css"
import { BiSearchAlt } from "react-icons/bi"

const Navbar = () => {

    return<>
        <nav>
            <div className={Style.logo}>
                <p>StarWars</p>
            </div>
            <div className={Style.search}>
                <form method="get">
                    <input type="search" name="" id="" placeholder="Search"/>
                    <BiSearchAlt/>
                </form>
            </div>
        </nav>
    </>

}

export default Navbar