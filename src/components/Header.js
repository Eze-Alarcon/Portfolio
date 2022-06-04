/* eslint-disable jsx-a11y/no-redundant-roles */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "./LanguageContext";

const Header = () => {
    const [burgerMenu, setBurgerMenu] = useState("toggle-button")
    const [navbar, setNavbar] = useState("navbar")
    const [openHeader, setOpenHeader] = useState(false)
    const { data, lang, setLang} = useContext(LangContext)

    const changeLang = () => {
        if (lang === "en") {
            setLang(() => "es")
        } else if (lang === "es") {
            setLang(() => "en")
        }
    }

    const openModal = () => {

        if (!openHeader) {
            setOpenHeader(() => true)
            setBurgerMenu(() => "toggle-button open") 
            setNavbar(() => "navbar active")

        } else if (openHeader) {
            setOpenHeader(() => false)
            setBurgerMenu(() => "toggle-button")
            setNavbar(() => "navbar close")

            setTimeout(() => setNavbar(() => "navbar") , 3000)
        }
    }

    const headerData = data.header

    return ( 
        <header>
            <div className="header">
                <Link to="/">
                    <div className="header-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#33323D" fillRule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
                    </div>
                </Link>
                <div className="H-burgerContainer">
                    <a href=".#" className={burgerMenu} onClick={openModal}>
                        <span className="bar"></span>
                    </a>
                </div>
                <nav className={navbar}>
                    <ul role="list">
                        <li><Link to="/">{headerData.link1}</Link></li>
                        <li><Link to="/index">{headerData.link2}</Link></li>
                        <li><Link to="/contact">{headerData.link3}</Link></li>
                        <li><span onClick={changeLang}>{headerData.link4}</span></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header;