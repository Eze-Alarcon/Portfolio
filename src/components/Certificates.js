import '../css/certificates.css'
import images from '../certificates.json'

const Certificates = () => {

    return (
        <main>

            <section className="container">

            {
                images.certificates.map(item => {

                    return (
                        <picture key={item.id}>
                            <source media="(min-width:880px)" srcSet={item.image} />
                            <source media="(min-width:730px)" srcSet={item.image} />
                            <source media="(min-width:500px)" srcSet={item.image} />
                            <img src={item.image} alt="My certificates"/>
                        </picture>
                    )
                })   
            }

            </section>

        </main>
    )
}

export default Certificates