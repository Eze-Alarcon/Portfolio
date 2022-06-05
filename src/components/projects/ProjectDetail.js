import '../../css/details.css'
import PageSwitch from './PageSwitch'
import ContactSection from '../RepetitiveSection';
import { useContext } from 'react';
import { LangContext } from "../LanguageContext"
import { useParams } from "react-router-dom"

const ProjectDetail = () => {
    const { data } = useContext(LangContext)

    const { idProject } = useParams()

    const projectImages = data.projects.details[idProject].images 
    const projectIntro = data.projects.details[idProject].intro
    const projectData = data.projects.details[idProject].projectDescription
    const projectPage = data.projects.details[idProject].footerProjects
    const projectFooter = data.projects.footer

    return (
    <main>

        <section className="P-hero">
            <picture>
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

                <a href={projectIntro.website} target="blank">
                    <button type="button" className="secondaryButton">
                        {projectIntro.button}
                    </button>
                </a>

            </div>


            <div className="P-description">

                <h2 className="subtitle">
                    {projectData.subtitle}
                </h2>

                <div className="imageContainer">

                    <picture>
                        <img src={projectImages.preview[0].mobile} alt="Decoration"/>
                    </picture>

                    <picture>
                        <img src={projectImages.preview[1].mobile} alt="Decoration"/>
                    </picture>

                </div>

            </div>

        </section>

        <section className="P-more">

            <PageSwitch page={projectPage} text={projectFooter} />
            
        </section>


        <ContactSection/>


    </main>
    )
}

export default ProjectDetail
