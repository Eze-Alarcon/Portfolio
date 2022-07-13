import '../css/index.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LangContext } from "./LanguageContext";
import ContactSection from './RepetitiveSection';

const Home = () => {
	const { data } = useContext(LangContext)

	const homeData = data.homePage
	const homeImages = homeData.images

	 const goTo = () => {
        const anchor = document.getElementById("aboutMe")
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }


    return (
        <main>
		<section className="I-intro">

			<picture>
					<img src={homeImages.hero}  alt="Decoration fotos"/>
			</picture>

			<div className="intro-content">
				<h1 className="title">
					{homeData.title}
				</h1>
	
				<button type="button" className="primaryButton" onClick={goTo}> 
					<div className="PB-iconContainer">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fillRule="evenodd" stroke="#5FB4A2"><path d="M0 9l8 4 8-4"/><path opacity="1" d="M0 5l8 4 8-4"/><path opacity=".5" d="M0 1l8 4 8-4"/></g></svg>
					</div>
					<div className="PB-textContainer">
						<p className="PB-text">{homeData.buttonAbout}</p>
					</div>
				</button>
			</div>
		</section>




		<section className="I-myInfo" id="aboutMe">
			<picture>
					<img src={homeImages.profile}  alt="Foto of myself"/>
			</picture>

			<div className="myInfo-content">
				<h2 className="title">{homeData.subtitle}</h2>
	
				<p className="text">
					{homeData.description}
				</p>
	
				<Link to="./index">
					<button type="button" className="secondaryButton">
						{homeData.buttonPortfolio}
					</button>
				</Link>

			</div>


		</section>

		<ContactSection/>

	</main>
    )
}


export default Home;