import {AiOutlineSearch} from "react-icons/ai"
function Hero(){
    return(
        <div className="flex container mx-auto">
            <div className="w-[100%] md:w-[50%]"> 
<h1 className="text-5xl">Choose the look that<span className="text-[#45C9A1] font-bold"> suits</span> you best</h1>
<p className=" text-2xl py-5">Every day is a fashion show & the world is your runway.Clozzet will elevate your wardrobe with the best collections.
Be exclusive, Be Devine, Be yourself. Explore outfits that willmake you comfortably beautiful.True style never dies.
</p>
<div className="flex gap-8 p-5">
<button className="p-4 px-[7em] rounded-full border-2  text-white bg-[#45C9A1] text-1xl font-bold" >Shop Now</button>
<button className="p-4 px-[7em] rounded-full border-2 text-[#45C9A1] text-1xl font-bold">About Us</button>
</div>
<div className=" p-5 border-2  rounded-full mt-10 flex justify-start items-center gap-2 " >
<AiOutlineSearch size={50}/>
<input className=" text-4xl  outline-none" type="text"placeholder="search " />
</div>
            </div>
            <div className="hidden md:block w-[50%] bg-[url('assets/images/hero2.png')] bg-no-repeat bg-right">


            </div>
        </div>
    )
}
export default Hero;