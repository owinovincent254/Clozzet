import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { products } from "../data";
import { useState } from "react";
function FeaturedCollection() {
  const [cart, setCart] = useState([]);
  

  function addToCart( e,product) {
    if (e.target.textContent.toLowerCase()==="add to cart"){
      setCart(prev=>[...prev,product]);
      e.target.textContent="Added To Cart"

  }
    
  }
  return (
    <div className="flex justify-between text-start items-center gap-5">
      {console.log(cart)}
      <MdOutlineArrowBackIosNew size={30} className="cursor-pointer" />
      {products.map((item) => {
        if (item.featuredProduct) {
          return (
            <div className="">
              <div className="h-[350px] w-[350px]  bg-[#F0EFEF] mt-5 mb-5 relative group">
                <img
                  src={`/src/assets/images/${item.img}`}
                  alt=""
                  className="h-[100%] w-[100%] object-contain"
                />
                <button
                  onClick={(e) => addToCart(e,item)}
                  className="bg-[#45C9A1] text-white p-3 rounded absolute  bottom-0 left-0 w-[100%] invisible group-hover:visible"
                >
                  ADD TO CART
                </button>
              </div>
              <div className="flex justify-between">
                <p className="capitalize text-1xl">{item.productName}</p>
                <AiOutlineHeart size={30} className="cursor-pointer" />
              </div>
              <p>{item.productPrice}</p>
            </div>
          );
        }
      })}
      <MdOutlineArrowForwardIos size={30} />
    </div>
  );
}
export default FeaturedCollection;
