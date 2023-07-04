import Nav from "../components/Nav";
import Hero from "../components/Hero";
import TopCategories from "../components/TopCategories";
import Footer from "../components/Footer";
import Shops from "../components/Shops"
function Home() {
  return (
    <div>
      <div className="bg-[url(assets/images/background1.png)] bg-no-repeat bg-right-top">
        <Nav />
        <Hero />
        <TopCategories/>
        
        <Shops/>
        <Footer/>
        
      </div>
    </div>
  );
}
export default Home;
