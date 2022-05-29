import '../css/portfolio.css'
import { Link } from 'react-router-dom';

const PortfolioIndex = () => {


    return (
        <main>

		<section class="projects">

			<picture>
				<source media="(min-width:880px)" srcset="./images/portfolio/desktop/image-portfolio-manage@2x.jpg"/>
				<source media="(min-width:730px)" srcset="./images/portfolio/tablet/image-portfolio-manage@2x.jpg"/>
				<source media="(min-width:500px)" srcset="./images/portfolio/mobile/image-portfolio-manage@2x.jpg"/>
				<img src="./images/portfolio/mobile/image-portfolio-manage.jpg" alt="Project fotos"/>
			</picture>

			<div class="container">

				<h2 class="title">
					Manage
				</h2>



				<p class="text">
					This project required me to build a fully responsive landing page to the designs provided. 
					I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
					such as the testimonial slider.
				</p>
				

				<button type="button" class="secondaryButton">
					VIEW PROJECT
				</button>

			</div>

		</section>

		<section class="projects">

			<picture>
				<source media="(min-width:880px)" srcset="./images/portfolio/desktop/image-portfolio-bookmark@2x.jpg"/>
				<source media="(min-width:730px)" srcset="./images/portfolio/tablet/image-portfolio-bookmark@2x.jpg"/>
				<source media="(min-width:500px)" srcset="./images/portfolio/mobile/image-portfolio-bookmark@2x.jpg"/>
				<img src="./images/portfolio/mobile/image-portfolio-bookmark.jpg" alt="Project fotos"/>
			</picture>

			<div class="container">

				<h2 class="title">
					Bookmark
				</h2>



				<p class="text">
					This project required me to build a fully responsive landing page to the designs provided. I 
					used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such 
					as the features section.
				</p>
				

				<button type="button" class="secondaryButton">
					VIEW PROJECT
				</button>

			</div>

		</section>  


		<section class="projects">

			<picture>
				<source media="(min-width:880px)" srcset="./images/portfolio/desktop/image-portfolio-insure@2x.jpg"/>
				<source media="(min-width:730px)" srcset="./images/portfolio/tablet/image-portfolio-insure@2x.jpg"/>
				<source media="(min-width:500px)" srcset="./images/portfolio/mobile/image-portfolio-insure@2x.jpg"/>
				<img src="./images/portfolio/mobile/image-portfolio-insure.jpg" alt="Project fotos"/>
			</picture>

			<div class="container">

				<h2 class="title">
					Insure
				</h2>



				<p class="text">
					This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive 
					landing page. The only JavaScript this project required was to enable the toggling of the 
					mobile navigation.
				</p>
				

				<button type="button" class="secondaryButton">
					VIEW PROJECT
				</button>

			</div>

		</section>
  

  		<section class="projects">

			<picture>
				<source media="(min-width:880px)" srcset="./images/portfolio/desktop/image-portfolio-fylo@2x.jpg"/>
				<source media="(min-width:730px)" srcset="./images/portfolio/tablet/image-portfolio-fylo@2x.jpg"/>
				<source media="(min-width:500px)" srcset="./images/portfolio/mobile/image-portfolio-fylo@2x.jpg"/>
				<img src="./images/portfolio/mobile/image-portfolio-fylo.jpg" alt="Project fotos"/>
			</picture>

			<div class="container">

				<h2 class="title">
					Fylo
				</h2>



				<p class="text">
					This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and 
					built it so that it was fully-responsive. I took a mobile-first approach and used modern 
					CSS like Flexbox and Grid for layout purposes.
				</p>
				

				<button type="button" class="secondaryButton">
					VIEW PROJECT
				</button>

			</div>

		</section>


		<section class="RS-contact">
			<h2 class="title">
				Interested in doing a project together?
			</h2>

			<span class="line"></span>

			<Link to="./contact">
				<button type="button" class="secondaryButton">
					CONTACT ME
				</button>
			</Link>
		</section>

	</main>
    )
}


export default PortfolioIndex;