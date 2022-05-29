import '../../css/details.css'
import { Link } from 'react-router-dom';

const Insure = () => {


    return (
    <main>

        <section className="P-hero">
            <picture>
                <source media="(min-width:880px)" srcset="/images/detail/desktop/image-insure-hero@2x.jpg"/>
                <source media="(min-width:730px)" srcset="/images/detail/tablet/image-insure-hero@2x.jpg"/>
                <source media="(min-width:500px)" srcset="/images/detail/mobile/image-insure-hero@2x.jpg"/>
                <img src="/images/detail/mobile/image-insure-hero.jpg" alt="Decoration"/>
            </picture>
        </section>

        <section className="P-intro">

            <div className="P-container">

                <h1 className="title">
                    Insure
                </h1>

                <p className="text">
                    This was a small project which mostly consisted of HTML and CSS. I built a 
                    fully-responsive landing page. The only JavaScript this project required was 
                    to enable the toggling of the mobile navigation.
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
                        <source media="(min-width:880px)" srcset="/images/detail/desktop/image-insure-preview-1@2x.jpg"/>
                        <source media="(min-width:730px)" srcset="/images/detail/tablet/image-insure-preview-1@2x.jpg"/>
                        <source media="(min-width:500px)" srcset="/images/detail/mobile/image-insure-preview-1@2x.jpg"/>
                        <img src="/images/detail/mobile/image-insure-preview-1.jpg" alt="Decoration"/>
                    </picture>

                    <picture>
                        <source media="(min-width:880px)" srcset="/images/detail/desktop/image-insure-preview-2@2x.jpg"/>
                        <source media="(min-width:730px)" srcset="/images/detail/tablet/image-insure-preview-2@2x.jpg"/>
                        <source media="(min-width:500px)" srcset="/images/detail/mobile/image-insure-preview-2@2x.jpg"/>
                        <img src="/images/detail/mobile/image-insure-preview-2.jpg" alt="Decoration"/>
                    </picture>

                </div>

            </div>

        </section>

        <section className="P-more">

            <Link to="/project/bookmark" className="previous">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M9 0L1 8l8 8"/></svg>

                <h3 className="subtitle">Bookmark</h3>

                <span>Previous Project</span>
            </Link>

            <div className="middleLine"></div>

            <Link to="/project/fylo" className="next">

                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/></svg>

                <h3 className="subtitle">Fylo</h3>

                <span>Next Project</span>
            </Link>
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


export default Insure;