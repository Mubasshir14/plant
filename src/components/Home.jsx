import Banner from "./Banner";
import BestSelling from "./BestSelling";
import Blogs from "./Blogs";
import Cleb from "./Cleb";
import DisplayTree from "./DisplayTree";
import Landscape from "./Landscape";
import Planters from "./Planters";
import Plants from "./Plants";
import TopSelling from "./TopSelling";


const Home = () => {
    return (
        <div>
            <Banner/>
            <DisplayTree/>
            <BestSelling/>
            <Plants/>
            <TopSelling/>
            <Planters/>
            <Blogs/>
            <Landscape/>
            <Cleb/>
        </div>
    );
};

export default Home;