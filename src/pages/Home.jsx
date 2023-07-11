import Nav from "../components/Nav";
import Hero from "../components/Hero";
import TopCategories from "../components/TopCategories";
import FeaturedCollections from "../components/FeaturedCollections";
import Shops from "../components/Shops"
import Footer from "../components/Footer";


function Home() {
  return (
    <div>
      <div className="bg-[url(assets/images/background1.png)] bg-no-repeat bg-right-top">
        <Nav />
        <Hero />
        <TopCategories/>
        
        <FeaturedCollections/>
        <Shops/>
        <Footer/>
        
      </div>
    </div>
  );
}
export default Home;
