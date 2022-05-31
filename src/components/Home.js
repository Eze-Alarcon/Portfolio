import '../css/index.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LangContext } from "./LanguageContext";
import ContactSection from './RepetitiveSection';

const Home = () => {
	const { data } = useContext(LangContext)

	const homeData = data.home
	const homeImages = data.home.images

    return (
        <main>
		<section className="I-intro">

			<picture>
					<source media="(min-width:880px)" srcSet={homeImages.hero.desktop} />
					<source media="(min-width:730px)" srcSet={homeImages.hero.tablet} />
					<source media="(min-width:500px)" srcSet={homeImages.hero.mobile2x} />
					<img src={homeImages.hero.mobile}  alt="Decoration fotos"/>
			</picture>

			<div className="intro-content">
				<h1 className="title">
					{homeData.title}
				</h1>
	
				<button type="button" className="primaryButton"> 
					<div className="PB-iconContainer">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fillRule="evenodd" stroke="#5FB4A2"><path d="M0 9l8 4 8-4"/><path opacity="1" d="M0 5l8 4 8-4"/><path opacity=".5" d="M0 1l8 4 8-4"/></g></svg>
					</div>
					<div className="PB-textContainer">
						<p className="PB-text">{homeData.button1}</p>
					</div>
				</button>
			</div>
		</section>




		<section className="I-myInfo">
			<picture>
					<source media="(min-width:1280px)" srcSet={homeImages.profile.desktop} />
					<source media="(min-width:730px)" srcSet={homeImages.profile.tablet} />
					<source media="(min-width:500px)" srcSet={homeImages.profile.mobile2x} />
					<img src={homeImages.profile.mobile}  alt="Foto of myself"/>
			</picture>

			<div className="myInfo-content">
				<h2 className="title">{homeData.subtitle}</h2>
	
				<p className="text">
					{homeData.description}
				</p>
	
				<Link to="./index">
					<button type="button" className="secondaryButton">
						{homeData.button2}
					</button>
				</Link>

			</div>


		</section>

		<ContactSection/>

	</main>
    )
}


export default Home;