import '../css/index.css'
import { Link } from "react-router-dom";

const Home = () => {


    return (
        <main>
		<section className="I-intro">

			<picture>
					<source media="(min-width:880px)" srcSet="./images/homepage/desktop/image-homepage-hero@2x.jpg"/>
					<source media="(min-width:730px)" srcSet="./images/homepage/tablet/image-homepage-hero.jpg"/>
					<source media="(min-width:500px)" srcSet="./images/homepage/mobile/image-homepage-hero@2x.jpg"/>
					<img src="./images/homepage/mobile/image-homepage-hero.jpg" alt="Decoration fotos"/>
			</picture>

			<div className="intro-content">
				<h1 className="title">
					Hey, I'm Alex Spencer and I love building beautiful websites	
				</h1>
	
				<button type="button" className="primaryButton"> 
					<div className="PB-iconContainer">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fillRule="evenodd" stroke="#5FB4A2"><path d="M0 9l8 4 8-4"/><path opacity="1" d="M0 5l8 4 8-4"/><path opacity=".5" d="M0 1l8 4 8-4"/></g></svg>
					</div>
					<div className="PB-textContainer">
						<p className="PB-text">ABOUT ME</p>
					</div>
				</button>
			</div>
		</section>




		<section className="I-myInfo">
			<picture>
					<source media="(min-width:1440px)" srcSet="./images/homepage/desktop/image-homepage-profile@2x.jpg"/>
					<source media="(min-width:1280px)" srcSet="./images/homepage/desktop/image-homepage-profile.jpg"/>
					<source media="(min-width:880px)" srcSet="./images/homepage/tablet/image-homepage-profile@2x.jpg"/>
					<source media="(min-width:730px)" srcSet="./images/homepage/tablet/image-homepage-profile.jpg"/>
					<source media="(min-width:500px)" srcSet="./images/homepage/mobile/image-homepage-profile@2x.jpg"/>
					<img src="./images/homepage/mobile/image-homepage-profile.jpg" alt="Foto of myself"/>
			</picture>

			<div className="myInfo-content">
				<h2 className="title">About Me</h2>
	
				<p className="text">
					I'm a junior front-end developer looking for a new role in an exciting company. 
					I focus on writing accessible HTML, using modern CSS practices and writing clean 
					JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
					whatever tools are required. I'm based in London, UK, but I'm happy working remotely 
					and have experience in remote teams. When I'm not coding, you'll find me outdoors. 
					I love being out in nature whether that's going for a walk, run or cycling. I'd love 
					you to check out my work.
				</p>
	
				<Link to="./index">
					<button type="button" className="secondaryButton">
						GO TO PORTFOLIO
					</button>
				</Link>

			</div>


		</section>




		<section className="RS-contact">
			<h2 className="title">
				Interested in doing a project together?
			</h2>

			<span className="line"></span>

				<Link to="./contact">
					<button type="button" className="secondaryButton">
						CONTACT ME
					</button>
				</Link>
		</section>

	</main>
    )
}


export default Home;