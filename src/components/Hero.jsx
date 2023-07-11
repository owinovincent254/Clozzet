import { AiOutlineSearch } from "react-icons/ai";
function Hero() {
  return (
    <div className="flex container mx-auto items-center">
      <div className="w-[100%] md:w-[50%]">
        <h1 className="text-7xl font-bold">
          Choose the look that
          <span className="text-[#45C9A1]"> suits</span> you best
        </h1>
        <p className=" text-[1.3rem] my-10">
          Every day is a fashion show & the world is your runway.Clozzet will
          elevate your wardrobe with the best collections. Be exclusive, Be
          Devine, Be yourself. Explore outfits that willmake you comfortably
          beautiful.True style never dies.
        </p>
        <div className="flex justify-between w-[90%]">
          <button className="p-4 px-[7em] rounded-full border-2  text-white bg-[#45C9A1] text-1xl font-bold">
            Shop Now
          </button>
          <button className="p-4 px-[7em] rounded-full border-2 text-[#45C9A1] text-1xl font-bold">
            About Us
          </button>
        </div>
        <div className="p-3 border-2 rounded-full mt-10 flex justify-start items-center gap-2 w-[90%]">
          <AiOutlineSearch size={30} />
          <input
            className=" text-2xl outline-none"
            type="text"
            placeholder="search "
          />
        </div>
      </div>
      <div className="hidden md:block w-[50%] h-[65vh] bg-[url('assets/images/hero2.png')] bg-no-repeat bg-right"></div>
    </div>
  );
}
export default Hero;
