import Hero from '../components/Hero'
import image1 from '../assets/home/image (7).jpeg';
import image2 from '../assets/home/image (4).jpeg';
import image3 from '../assets/home/image (2).jpeg';
import Section1 from '../OurCSR/section1'
import Section2 from '../OurCSR/section2'
import Section3 from '../OurCSR/section3'

const ourCSR = () => {
    return (
        <div>
            <Hero title='Our CSR' currentPage='CSR' />
            <Section1 title="SHAKURPUR BASTI" description="This is a locality in North West Delhi, near Netaji Subash Place. It has a population of about 1.5 lakh people, mostly migrants from Uttar Pradesh and Bihar. The main occupation of the residents is casual labour, domestic work, street vending, and small-scale manufacturing. The slum lacks basic amenities like water supply, sanitation, drainage, and electricity. The literacy rate is low and the health status is poor." image1={image1} image2={image1} />
            <Section1 title="SHAKURPUR CEMENT GODAM" description="This is another sub-locality of Shakurpur Basti, situated near a cement godown. It has a population of about 25,000 people, mostly from Rajasthan and Madhya Pradesh. The residents work as loaders, unloaders, drivers, and helpers in the cement industry. The slum suffers from air pollution, dust, and respiratory diseases due to the cement dust. The slum also lacks basic services like water, sanitation, education, and health care." image1={image1} image2={image1} />
            <Section1 title="TILAK NAGAR, DOUBLE STOREY" description="A typical slum mostly inhabited by sanitation workers. The residents mostly engaged in hazardous sanitation work with a meagre income. The family including women and children often at risk of health and hygiene risks impacting their overall well-being." image1={image2} image2={image3} />
            <Section2 />
            <Section3 />
        </div>
    )
}

export default ourCSR