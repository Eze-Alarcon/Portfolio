import { Link } from "react-router-dom";
import { useContext } from "react";
import { LangContext } from "./LanguageContext";

const ContactSection = () => {
    const { data } = useContext(LangContext)

	const cta = data.callToAction

    return (
        <section className="RS-contact">
			<h2 className="title">
				{cta.title}
			</h2>

			<span className="line"></span>

				<Link to="/contact">
					<button type="button" className="secondaryButton">
						{cta.button}
					</button>
				</Link>
		</section>
    )
}

export default ContactSection