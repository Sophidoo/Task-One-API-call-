import Style from "../styles/loader.module.css"
import {TbLoaderQuarter} from "react-icons/tb"

const Loader = () => {

    return<>
        <div className={Style.loaderWrapper}>
            <div className={Style.loader}>
                <TbLoaderQuarter/>
            </div>
            <div className={Style.loader}>
                <TbLoaderQuarter/>
            </div>
            <div className={Style.loader}>
                <TbLoaderQuarter/>
            </div>
            <div className={Style.loader}>
                <TbLoaderQuarter/>
            </div>
            <div className={Style.loader}>
                <TbLoaderQuarter/>
            </div>
            <div className={Style.loader}>
                <TbLoaderQuarter/>
            </div>
            <div className={Style.loader}>
                <TbLoaderQuarter/>
            </div>
            <div className={Style.loader}>
                <TbLoaderQuarter/>
            </div>
        </div>
    </>

}

export default Loader