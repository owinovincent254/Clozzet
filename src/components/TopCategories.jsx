import TopCategory from "../components/TopCategory";
import jacket from "../assets/images/jacket.png";
import handbag from "../assets/images/handbag.png";
import tshirt from "../assets/images/tshirt.png";
import dress from "../assets/images/dress.png";
import jeans from "../assets/images/jeans.png";
import shoe from "../assets/images/shoe.png";
import sweater from "../assets/images/sweater.png";
function TopCategories() {
  return (
    <div className="container mx-auto ">
      <h2 className="text-center font-bold text-3xl my-10">
        Top Categories
      </h2>
      <div className="flex justify-between">
        <TopCategory icon={jacket} category="Jacket" />
        <TopCategory icon={handbag}  category="Handbag"/>
        <TopCategory icon={tshirt}  category="Tshirt"/>
        <TopCategory  icon={dress} category="Dress"/>
        <TopCategory icon={jeans} category="Jeans" />
        <TopCategory icon={shoe} category="Shoe"/>
        <TopCategory icon={sweater}  category="Sweater"/>
        
      </div>
    </div>
  );
}
export default TopCategories;
