/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [burgerMenu, setBurgerMenu] = useState("toggle-button")
    const [navbar, setNavbar] = useState("navbar")
    const [openHeader, setOpenHeader] = useState(false)


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


    return ( 
        <header>
            <div className="header">
                <div className="header-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#33323D" fillRule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
                </div>
                <div className="H-burgerContainer">
                    <a href=".#" className={burgerMenu} onClick={openModal}>
                        <span className="bar"></span>
                    </a>
                </div>
                <nav className={navbar}>
                    <ul role="list">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/index">PORTFOLIO</Link></li>
                        <li><Link to="/contact">CONTACT ME</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header;