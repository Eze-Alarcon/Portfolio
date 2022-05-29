const Home = () => {


    return (
        <main>
		<section class="I-intro">

			<picture>
					<source media="(min-width:880px)" srcset="./images/homepage/desktop/image-homepage-hero@2x.jpg"/>
					<source media="(min-width:730px)" srcset="./images/homepage/tablet/image-homepage-hero.jpg"/>
					<source media="(min-width:500px)" srcset="./images/homepage/mobile/image-homepage-hero@2x.jpg"/>
					<img src="./images/homepage/mobile/image-homepage-hero.jpg" alt="Decoration fotos"/>
			</picture>

			<div class="intro-content">
				<h1 class="title">
					Hey, I&#39m Alex Spencer and I love building beautiful websites	
				</h1>
	
				<button type="button" class="primaryButton"> 
					<div class="PB-iconContainer">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fill-rule="evenodd" stroke="#5FB4A2"><path d="M0 9l8 4 8-4"/><path opacity="1" d="M0 5l8 4 8-4"/><path opacity=".5" d="M0 1l8 4 8-4"/></g></svg>
					</div>
					<div class="PB-textContainer">
						<p class="PB-text">ABOUT ME</p>
					</div>
				</button>
			</div>
		</section>




		<section class="I-myInfo">
			<picture>
					<source media="(min-width:1440px)" srcset="./images/homepage/desktop/image-homepage-profile@2x.jpg"/>
					<source media="(min-width:1280px)" srcset="./images/homepage/desktop/image-homepage-profile.jpg"/>
					<source media="(min-width:880px)" srcset="./images/homepage/tablet/image-homepage-profile@2x.jpg"/>
					<source media="(min-width:730px)" srcset="./images/homepage/tablet/image-homepage-profile.jpg"/>
					<source media="(min-width:500px)" srcset="./images/homepage/mobile/image-homepage-profile@2x.jpg"/>
					<img src="./images/homepage/mobile/image-homepage-profile.jpg" alt="Foto of myself"/>
			</picture>

			<div class="myInfo-content">
				<h2 class="title">About Me</h2>
	
				<p class="text">
					I&#39m a junior front-end developer looking for a new role in an exciting company. 
					I focus on writing accessible HTML, using modern CSS practices and writing clean 
					JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
					whatever tools are required. I&#39m based in London, UK, but I&#39m happy working remotely 
					and have experience in remote teams. When I&#39m not coding, you&#39ll find me outdoors. 
					I love being out in nature whether that&#39s going for a walk, run or cycling. I&#39d love 
					you to check out my work.
				</p>
	
				<button type="button" class="secondaryButton">
					GO TO PORTFOLIO
				</button>
			</div>


		</section>




		<section class="RS-contact">
			<h2 class="title">
				Interested in doing a project together?
			</h2>

			<span class="line"></span>

			<button type="button" class="secondaryButton">
				CONTACT ME
			</button>
		</section>

	</main>
    )
}


export default Home;