import { Link } from 'react-router-dom';

const PageSwitch = ({page, text}) => {
    const link1 = `/project/${page.previous}`
    const link2 = `/project/${page.next}`

    return (

        <>
        
        <Link to={link1} className="previous">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M9 0L1 8l8 8"/></svg>

            <h3 className="subtitle">{page.previousName}</h3>

            <span>{text.previous}</span>
        </Link>

        <div className="middleLine"></div>

        <Link to={link2} className="next">

            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/></svg>

            <h3 className="subtitle">{page.nextName}</h3>

            <span>{text.next}</span>
        </Link>
        
        
        </>
    )
}

export default PageSwitch