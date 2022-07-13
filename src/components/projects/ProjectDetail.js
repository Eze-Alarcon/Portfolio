import '../../css/details.css'
import PageSwitch from './PageSwitch'
import ContactSection from '../RepetitiveSection';
import { useContext } from 'react';
import { LangContext } from "../LanguageContext"
import { useParams } from "react-router-dom"

const ProjectDetail = () => {
    const { data } = useContext(LangContext)

    const { idProject } = useParams()

    const shorcut = data.projectsPage.projectDetails

    const projectImages = shorcut[idProject].images 
    const projectIntro = shorcut[idProject].intro
    const projectPage = shorcut[idProject].footerProjects
    const projectFooter = data.projectsPage.footer
    
    return (
    <main>

        <section className="P-hero">
            <picture>
                <img src={projectImages.hero} alt="Decoration"/>
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

                <a href={projectIntro.website} target="blank" className="button-container">
                    <button type="button" className="secondaryButton">
                        {projectIntro.button}
                    </button>
                </a>

            </div>


            <div className="P-description">

                <h2 className="subtitle">
                    {shorcut.subtitle}
                </h2>

                <div className="imageContainer">

                    <picture>
                        <img src={projectImages.preview[0]} alt="Decoration"/>
                    </picture>

                    <picture>
                        <img src={projectImages.preview[1]} alt="Decoration"/>
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
