
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../assets/Tree/Banner/HeroBanner.png';
import img1 from '../assets/Tree/rec/rsz_planter.jpg';

const Blogs1 = () => {
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
            <div className="low-maintenance-plants-blog">
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
                <h1 className='mt-6 text-center font-bold text-2xl'>8 Best Low Maintenance Plants for Your Garden</h1>
                <div className="plant-descriptions p-5 space-y-4">
                    <p>Creating a lush garden doesn't have to be time-consuming and labor-intensive. With the right selection of low maintenance plants, you can enjoy beautiful greenery and blooms with minimal effort. Here are eight plants that thrive on neglect:</p>
                    <ul>
                        <li><strong>Succulents:</strong> Perfect for sunny spots, succulents like Aloe Vera and Echeveria require minimal watering and can survive in various climates.</li>
                        <li><strong>Snake Plant (Sansevieria):</strong> Known for its resilience, the snake plant tolerates low light and irregular watering, making it ideal for beginners.</li>
                        <li><strong>Spider Plant (Chlorophytum comosum):</strong> Adaptable to different light conditions, spider plants are known for their air-purifying qualities and produce small plantlets that can be propagated easily.</li>
                        <li><strong>ZZ Plant (Zamioculcas zamiifolia):</strong> Thriving in low light and drought conditions, the ZZ plant features glossy, dark green leaves that add a touch of elegance to any space.</li>
                        <li><strong>Peace Lily (Spathiphyllum):</strong> With its graceful white blooms, the peace lily prefers shade and infrequent watering, making it a popular choice for indoor gardens.</li>
                        <li><strong>Pothos (Epipremnum aureum):</strong> Also known as devil's ivy, pothos is a versatile vine that thrives in low light and can survive occasional neglect.</li>
                        <li><strong>Cast Iron Plant (Aspidistra elatior):</strong> True to its name, the cast iron plant is extremely hardy and can withstand low light, drought, and neglect.</li>
                        <li><strong>Lavender:</strong> For sunny gardens, lavender thrives with minimal water once established and adds fragrance and color to your garden.</li>
                    </ul>
                    <p>These low maintenance plants not only require less attention but also bring beauty and greenery to your living spaces without demanding much of your time. Whether you're a seasoned gardener or just starting out, incorporating these plants into your garden can enhance your surroundings with ease.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs1;
