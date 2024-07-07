
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../assets/Tree/Banner/HeroBanner.png';
import img1 from '../assets/Tree/rec/rsz_planter.jpg';

const Blogs2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className='container mx-auto px-4'>
            <div className="air-purifying-plants-blog">
                <Slider {...settings}>
                    <div>
                        <img src={img} alt="Slide 1" className="w-full" />
                    </div>
                    <div>
                        <img src={img} alt="Slide 2" className="w-full" />
                    </div>
                    <div>
                        <img src={img1} alt="Slide 3" className="w-full" />
                    </div>
                    <div>
                        <img src={img} alt="Slide 4" className="w-full" />
                    </div>
                </Slider>
                <h1 className='mt-6 text-center font-bold text-2xl'>8 Best Air Purifying Plants for Your Home</h1>
                <div className="plant-descriptions p-5 space-y-4">
                    <p>Enhancing the air quality of your home can be as simple as adding a few houseplants. Here are eight plants known for their air-purifying qualities:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>Spider Plant (Chlorophytum comosum):</strong> This plant is great at removing formaldehyde and xylene from the air. It's also easy to grow and maintain, making it perfect for beginners.</li>
                        <li><strong>Snake Plant (Sansevieria trifasciata):</strong> Also known as mother-in-law's tongue, this plant absorbs toxins such as formaldehyde, xylene, toluene, and nitrogen oxides, and converts CO2 to oxygen at night.</li>
                        <li><strong>Peace Lily (Spathiphyllum):</strong> This elegant plant helps filter out harmful toxins like ammonia, benzene, formaldehyde, and trichloroethylene.</li>
                        <li><strong>English Ivy (Hedera helix):</strong> Known for its ability to filter airborne toxins, English Ivy is especially good at reducing mold in your home.</li>
                        <li><strong>Aloe Vera:</strong> Beyond its soothing gel, Aloe Vera helps remove formaldehyde and benzene, which are byproducts of chemical-based cleaners, paints, and more.</li>
                        <li><strong>Bamboo Palm (Chamaedorea seifrizii):</strong> This palm not only removes harmful chemicals from the air but also acts as a natural humidifier.</li>
                        <li><strong>Boston Fern (Nephrolepis exaltata):</strong> Known for its air-purifying qualities, the Boston Fern is particularly effective at removing formaldehyde and xylene.</li>
                        <li><strong>Rubber Plant (Ficus elastica):</strong> This hardy plant is effective at removing toxins like formaldehyde from the indoor air and is relatively easy to care for.</li>
                    </ul>
                    <p>These air purifying plants not only enhance the aesthetic of your home but also contribute to a healthier living environment by filtering out harmful toxins. Adding a few of these plants to your indoor space can significantly improve your air quality and well-being.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs2;
