import { Link } from "react-router-dom";

const PortfolioItem = (props) => {


    return (
        <section className="projects">

			<picture>
				<source media="(min-width:880px)" srcSet="/images/portfolio/desktop/image-portfolio-manage@2x.jpg"/>
				<source media="(min-width:730px)" srcSet="/images/portfolio/tablet/image-portfolio-manage@2x.jpg"/>
				<source media="(min-width:500px)" srcSet="/images/portfolio/mobile/image-portfolio-manage@2x.jpg"/>
				<img src="/images/portfolio/mobile/image-portfolio-manage.jpg" alt="Project fotos"/>
			</picture>

			<div className="container">

				<h2 className="title">
					Manage
				</h2>

				<p className="text">
					This project required me to build a fully responsive landing page to the designs provided. 
					I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
					such as the testimonial slider.
				</p>
				

				<Link to="/project/manage">
					<button type="button" className="secondaryButton">
						VIEW PROJECT
					</button>
				</Link>

			</div>

		</section>

    )
}

export default PortfolioItem;