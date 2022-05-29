import { Link } from 'react-router-dom';
import '../../css/details.css'

const Manage = () => {

    return (
    <main>

        <section class="P-hero">
            <picture>
                <source media="(min-width:880px)" srcset="./images/detail/desktop/image-manage-hero@2x.jpg"/>
                <source media="(min-width:730px)" srcset="./images/detail/tablet/image-manage-hero@2x.jpg"/>
                <source media="(min-width:500px)" srcset="./images/detail/mobile/image-manage-hero@2x.jpg"/>
                <img src="./images/detail/mobile/image-manage-hero.jpg" alt="Decoration"/>
            </picture>
        </section>

        <section class="P-intro">

            <div class="P-container">

                <h1 class="title">
                    Manage
                </h1>

                <p class="text">
                    This project required me to build a fully responsive landing page to the designs 
                    provided. I used HTML5, along with CSS Grid and JavaScript for the areas that 
                    required interactivity, such as the testimonial slider.
                </p>


                <div class="tecnologies">
                    <span class="alternativeText">
                        Interaction Design / Front End Development
                    </span>
        
                    <span class="alternativeText">
                        HTML / CSS / JS
                    </span>

                </div>

                <button type="button" class="secondaryButton">
                    Visit Website
                </button>

            </div>





            <div class="P-description">

                <h2 class="subtitle">
                    Project Background
                </h2>

                <p class="text">
                    This project was a front-end  challenge from Frontend Mentor. It&#39s a platform that 
                    enables you to practice building websites to a design and project brief. Each challenge 
                    includes mobile and desktop designs to show how the website should look at different 
                    screen sizes. Creating these projects has helped me refine my workflow and solve 
                    real-world coding problems. I&#39ve learned something new with each project, helping 
                    me to improve and adapt my style.
                </p>

                <h2 class="subtitle">
                    Static Previews
                </h2>

                <div class="imageContainer">

                    <picture>
                        <source media="(min-width:880px)" srcset="./images/detail/desktop/image-manage-preview-1@2x.jpg"/>
                        <source media="(min-width:730px)" srcset="./images/detail/tablet/image-manage-preview-1@2x.jpg"/>
                        <source media="(min-width:500px)" srcset="./images/detail/mobile/image-manage-preview-1@2x.jpg"/>
                        <img src="./images/detail/mobile/image-manage-preview-1.jpg" alt="Decoration"/>
                    </picture>

                    <picture>
                        <source media="(min-width:880px)" srcset="./images/detail/desktop/image-manage-preview-2@2x.jpg"/>
                        <source media="(min-width:730px)" srcset="./images/detail/tablet/image-manage-preview-2@2x.jpg"/>
                        <source media="(min-width:500px)" srcset="./images/detail/mobile/image-manage-preview-2@2x.jpg"/>
                        <img src="./images/detail/mobile/image-manage-preview-2.jpg" alt="Decoration"/>
                    </picture>

                </div>

            </div>

        </section>

        <section class="P-more">

            <a href=".#" class="previous">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M9 0L1 8l8 8"/></svg>

                <h3 class="subtitle">Fylo</h3>

                <span>Previous Project</span>
            </a>

            <div class="middleLine"></div>

            <a href=".#" class="next">

                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/></svg>

                <h3 class="subtitle">Bookmark</h3>

                <span>Next Project</span>
            </a>
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


export default Manage;