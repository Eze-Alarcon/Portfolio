import '../css/portfolio.css'
import PortfolioItem from './PortolioItem';
import { useContext } from 'react';
import { LangContext } from "./LanguageContext";

const PortfolioIndex = () => {
	const { data } = useContext(LangContext)

	const portfolioData = data.portolioPage

    return (
        <main>
			{

				portfolioData.map((itemData) => {
					return <PortfolioItem props={itemData} key={itemData.name} />
				})

			}
		</main>
    )
}


export default PortfolioIndex;