import Shop from "./Shop"
import mens from "../assets/images/mens.png";
import watches from "../assets/images/watches.png";
import hbags from "../assets/images/hbags.png";
import ladies from "../assets/images/ladies.png";
function Shops(){
    return(
        <div className="container mx-auto">
            <div className="grid grid-cols-2 grid-rows-[200px_200px_200px] gap-3" >

        <Shop icon={mens} featured="Mens Collection" bgColor="bg-[#F0EFEF] row-span-2"/>
        <Shop icon={watches} featured="Luxury Watches" bgColor="bg-[#E3F9FB]"/>
        <Shop icon={ladies} featured="Ladies Collection" bgColor="bg-[#FEDBDB] row-span-2"/>
        <Shop icon={hbags} featured="Handbags" bgColor="bg-[#FFF1F1]"/>
       
       
        </div>
        </div>
    )
}
export default Shops;