import { Link } from "react-router-dom";

const PortfolioItem = ({props}) => {

	const linkTo = `/project/${props.link}`

    return (
        <section className="projects">

			<picture id={props.id}>
				<source media="(min-width:880px)" srcSet={props.images.desktop} />
				<source media="(min-width:730px)" srcSet={props.images.tablet} />
				<source media="(min-width:500px)" srcSet={props.images.mobile2x} />
				<img src={props.images.mobile} alt="Project fotos"/>
			</picture>

			<div className="container">

				<h2 className="title">
					{props.name}
				</h2>

				<p className="text">
					{props.description}
				</p>
				

				<Link to={linkTo}>
					<button type="button" className="secondaryButton">
						{props.button}
					</button>
				</Link>

			</div>

		</section>

    )
}

export default PortfolioItem;