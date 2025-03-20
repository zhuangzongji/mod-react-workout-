import Header from "../components/Header";
import Productlist from "../components/Productlist";
import Footer from "../components/Footer";

function Home(){

    return(
    <div className="container mx-auto main-layout">
        <Header />
        <Productlist />
        <Footer />
    </div>
    )
}

export default Home