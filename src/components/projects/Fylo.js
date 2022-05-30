import '../../css/details.css'
import { Link } from 'react-router-dom';
import ProjectFooter from './ProjectFooter';
import { useContext } from 'react';
import { LangContext } from "../LanguageContext"


const Fylo = () => {
    const { data } = useContext(LangContext)

    const projectImages = data.projects.details.fylo.images 
    const projectIntro = data.projects.details.fylo.intro
    const projectData = data.projects.details.fylo.projectDescription
    const projectFooter = data.projects.footer

    return (
    <main>

        <section className="P-hero">
            <picture>
                <source media="(min-width:880px)" srcSet={projectImages.hero.desktop} />
                <source media="(min-width:730px)" srcSet={projectImages.hero.tablet} />
                <source media="(min-width:500px)" srcSet={projectImages.hero.mobile2x} />
                <img src={projectImages.hero.mobile} alt="Decoration"/>
            </picture>
        </section>

        <section className="P-intro">

            <div className="P-container">

                <h1 className="title">
                    {projectIntro.name}
                </h1>

                <p className="text">
                    {projectIntro.description}
                </p>


                <div className="tecnologies">
                    <span className="alternativeText">
                        {projectIntro.implementations}
                    </span>
        
                    <span className="alternativeText">
                        {projectIntro.tecnologies}
                    </span>

                </div>

                <button type="button" className="secondaryButton">
                    {projectIntro.button}
                </button>

            </div>





            <div className="P-description">

                <h2 className="subtitle">
                    {projectData.title}
                </h2>

                <p className="text">
                    {projectData.description}
                </p>

                <h2 className="subtitle">
                    {projectData.subtitle}
                </h2>

                <div className="imageContainer">

                    <picture>
                        <source media="(min-width:880px)" srcSet={projectImages.hero.desktop}/>
                        <source media="(min-width:730px)" srcSet={projectImages.hero.tablet}/>
                        <source media="(min-width:500px)" srcSet={projectImages.hero.mobile2x}/>
                        <img src={projectImages.hero.mobile} alt="Decoration"/>
                    </picture>

                    <picture>
                        <source media="(min-width:880px)" srcSet={projectImages.hero.desktop}/>
                        <source media="(min-width:730px)" srcSet={projectImages.hero.tablet}/>
                        <source media="(min-width:500px)" srcSet={projectImages.hero.mobile2x}/>
                        <img src={projectImages.hero.mobile} alt="Decoration"/>
                    </picture>

                </div>

            </div>

        </section>

        <section className="P-more">

            <Link to="/project/manage" className="previous">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M9 0L1 8l8 8"/></svg>

                <h3 className="subtitle">Manage</h3>

                <span>{projectFooter.previous}</span>
            </Link>

            <div className="middleLine"></div>

            <Link to="/project/insure" className="next">

                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/></svg>

                <h3 className="subtitle">Insure</h3>

                <span>{projectFooter.next}</span>
            </Link>
        </section>


        <ProjectFooter/>


    </main>
    )
}


export default Fylo;