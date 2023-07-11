import Nav from "../components/Nav";
import unisex from "../assets/images/unisex.png"
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Footer from "../components/Footer";
import { SlArrowDown } from "react-icons/sl";
function Product() {
  return (
    <div>
      <Nav />
      <div className="container mx-auto flex justify-start my-[5em]">
        <div className="w-[50%]">
          <img src={unisex} alt="" />
        </div>
        <div className="w-[50%]">
          <h5 className="text-[#45C9A1]  text-2xl my-5">SHOES</h5>
          <h2 className="font-bold text-5xl">Unisex Airforce Sneakers</h2>
          <p className="border-b-4 w-[140px] border-black my-5 " ></p>
          <p className="font-bold mt-5">KSh 3500</p>
          <p className="mt-8">
            The sneaker has all sizes which fits to normal size,it is suitable
            for all weather conditions, it is light in weight making it
            comfortable for a long wear. The shoe can be worn by both gender. It
            is suitable for outdoor activities. Buy from our shop, get it
            delivered to your doorstep and slay the whole day.
          </p>
          <div className="w-[100%] flex justify-between items-center mt-7">
            <div className="w-[w-40%] ">
              <h3 className="text-1.5xl text-center">SELECT SIZE</h3>
              <div className="flex justify-between items-center  py-1 px-9 rounded-full  border-2">
                <p className="border-r-2 border-black p-2">40</p>
                <p className="p-2">
                  <SlArrowDown/>
                </p>
              </div>
            </div>
            <div className="w-60% ">
              <h3 className="text-1.5xl text-center">QUANTITY</h3>
              <div className="flex justify-between items-center border-2 py-1 px-[5em] rounded-full">
                <p className="border-r-2 border-black p-2">-</p>
                <p className="border-r-2 border-black p-2">+</p>
                <p className="border-r-2 border-black p-2">1</p>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex justify-between my-7">
            <div className="bg-[#45C9A1] text-white p-4 rounded-md flex justify-center items-center gap-4 w-[40%]">
              <p>
                <AiOutlineShoppingCart size={25} />{" "}
              </p>
              <button className="font-bold text-1.5xl">ADD TO CART</button>
            </div>
            <div className="flex justify-center items-center gap-4 w-[40%] p-4 border rounded-md shadow bg-white">
              <p>
                <AiOutlineHeart size={25} />{" "}
              </p>
              <button className="text-1.5xl">SAVE TO WISHLIST</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Product;










