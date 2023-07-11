
import { AiOutlineHeart } from "react-icons/ai";
import { products } from "../data";
function ShopItem() {
  return (
    <div className="container mx-auto flex flex-wrap gap-4">
      {products.map((item) => {
        return (
          <div className="">
            <div className="h-[350px] w-[350px]  bg-[#F0EFEF] mt-5 mb-5 relative group">
              <img
                src={`/src/assets/images/${item.img}`}
                alt=""
                className="h-[100%] w-[100%] object-contain"
              />
              <button className="bg-[#45C9A1] text-white p-3 rounded absolute  bottom-0 left-0 w-[100%] invisible group-hover:visible">
                ADD TO CART
              </button>
            </div>
            <div className="flex justify-between">
            <div className=" ">
              <p className="capitalize  text-bold">{item.productName}</p>
              <p className="text-[#45C9A1]">{item.productPrice}</p>
            </div>
            <AiOutlineHeart size={30} className="cursor-pointer" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ShopItem;
