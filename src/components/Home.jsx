import Banner from "./Banner";
import Blogs from "./Blogs";
import Cleb from "./Cleb";
import DisplayTree from "./DisplayTree";
import Landscape from "./Landscape";


const Home = () => {
    return (
        <div>
            <Banner/>
            <DisplayTree/>
            <Blogs/>
            <Landscape/>
            <Cleb/>
        </div>
    );
};

export default Home;