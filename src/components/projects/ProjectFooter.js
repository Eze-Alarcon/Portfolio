import { Link } from "react-router-dom";

const ProjectFooter = () => {


    return (
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
    )
}

export default ProjectFooter;