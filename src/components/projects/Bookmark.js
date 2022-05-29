import '../../css/details.css'
import { Link } from 'react-router-dom';

const Bookmark = () => {


    return (
    <main>

        <section className="P-hero">
            <picture>
                <source media="(min-width:880px)" srcSet="/images/detail/desktop/image-bookmark-hero@2x.jpg"/>
                <source media="(min-width:730px)" srcSet="/images/detail/tablet/image-bookmark-hero@2x.jpg"/>
                <source media="(min-width:500px)" srcSet="/images/detail/mobile/image-bookmark-hero@2x.jpg"/>
                <img src="/images/detail/mobile/image-bookmark-hero.jpg" alt="Decoration"/>
            </picture>
        </section>

        <section className="P-intro">

            <div className="P-container">

                <h1 className="title">
                    Bookmark
                </h1>

                <p className="text">
                    This project required me to build a fully responsive landing page to the designs 
				provided. I used HTML5, along with CSS Grid and JavaScript for the areas that 
				required interactivity, such as the features section.
                </p>


                <div className="tecnologies">
                    <span className="alternativeText">
                        Interaction Design / Front End Development
                    </span>
        
                    <span className="alternativeText">
                        HTML / CSS / JS
                    </span>

                </div>

                <button type="button" className="secondaryButton">
                    Visit Website
                </button>

            </div>





            <div className="P-description">

                <h2 className="subtitle">
                    Project Background
                </h2>

                <p className="text">
                    This project was a front-end  challenge from Frontend Mentor. It's a platform that 
                    enables you to practice building websites to a design and project brief. Each challenge 
                    includes mobile and desktop designs to show how the website should look at different 
                    screen sizes. Creating these projects has helped me refine my workflow and solve 
                    real-world coding problems. I've learned something new with each project, helping 
                    me to improve and adapt my style.
                </p>

                <h2 className="subtitle">
                    Static Previews
                </h2>

                <div className="imageContainer">

                    <picture>
                        <source media="(min-width:880px)" srcSet="/images/detail/desktop/image-bookmark-preview-1@2x.jpg"/>
                        <source media="(min-width:730px)" srcSet="/images/detail/tablet/image-bookmark-preview-1@2x.jpg"/>
                        <source media="(min-width:500px)" srcSet="/images/detail/mobile/image-bookmark-preview-1@2x.jpg"/>
                        <img src="/images/detail/mobile/image-bookmark-preview-1.jpg" alt="Decoration"/>
                    </picture>

                    <picture>
                        <source media="(min-width:880px)" srcSet="/images/detail/desktop/image-bookmark-preview-2@2x.jpg"/>
                        <source media="(min-width:730px)" srcSet="/images/detail/tablet/image-bookmark-preview-2@2x.jpg"/>
                        <source media="(min-width:500px)" srcSet="/images/detail/mobile/image-bookmark-preview-2@2x.jpg"/>
                        <img src="/images/detail/mobile/image-bookmark-preview-2.jpg" alt="Decoration"/>
                    </picture>

                </div>

            </div>

        </section>

        <section className="P-more">

            <a href=".#" className="previous">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M9 0L1 8l8 8"/></svg>

                <h3 className="subtitle">Manage</h3>

                <span>Previous Project</span>
            </a>

            <div className="middleLine"></div>

            <a href=".#" className="next">

                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/></svg>

                <h3 className="subtitle">Insure</h3>

                <span>Next Project</span>
            </a>
        </section>


        <section className="RS-contact">
            <h2 className="title">
                Interested in doing a project together?
            </h2>

            <span className="line"></span>


            <Link to="/contact">
                <button type="button" className="secondaryButton">
                    CONTACT ME
                </button>
            </Link>
        </section>


    </main>
    )
}


export default Bookmark;