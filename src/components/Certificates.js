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