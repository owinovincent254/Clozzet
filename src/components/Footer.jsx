import logo from "../assets/images/logo.svg";
import email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import  facebook from "../assets/images/facebook.png";
import  instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
function Footer(){
    return(
        <div className=" mx-auto bg-gray-200 mt-20 w-100%">
            <h4 className="items-center gap-3 flex justify-center text-4xl mt-10 mb-4">Subscribe & get up to 30% OFF</h4>
            <div className="gap-4 flex justify-center items-center">
                <div className="rounded-full py-4 px-[3em] border-[#45C9A1] border-2 m-5 text-2xl bg-white">
<input className="outline-0" type="text" placeholder="Enter your email" />
</div>
<div>
<button  className="p-4 rounded-full  text-white bg-[#45C9A1]  font-bold"> Subscribe</button>
</div>
</div>
<div className="container mx-auto">
<div className="flex justify-between gap-10 mt-10 ">
    <div className="">
    <img src={logo} alt=""className="w-40 mb-5" />
    <p className="w-60 text-1xl">Offering a unique andstylish perspective onfashion is our numberone priority. Confuseyour mirror by ourtrendy outfits.</p>
    </div>
    <div className="text-1xl">
        <h4 className="font-bold mb-5">Store</h4>
        <p className="mb-3">Women’s Fashion</p>
        <p className="mb-3">Men’s Fashion</p>
        <p className="mb-3">Store Sale</p>
        <p className="mb-3">Collections</p>
        </div>
        <div className="text-1xl">
            <h4 className="font-bold mb-5">Help</h4>
            <p className="mb-3">Customer Support</p>
            <p className="mb-3">Terms & Conditions</p>
            <p className="mb-3">Privacy Policy</p>
            <p className="mb-3">Track Your Order</p>
           
            </div>
            <div className="flex justify-between gap-5">
                 
            <div className="gap-1">
            <h4 className="font-bold mb-5">Contact Us</h4>
            <div className="flex justify-start gap-3 mb-5 text-1xl">
        <img src={email} alt="" className="w-5" />
        <p>contact@clozzet.com</p>
        </div>
        
        <div className="flex justify-start gap-2 text-1xl">
        <img src={phone} alt="" className="w-5" />
        <p>254-700-333-333</p>
        </div>
        
        
        
        <h4 className=" mb-2 mt-3 ">Follow Us</h4>
    <div className="flex justify-between">
        <img src={facebook} alt=""className="w-8" />
        <img src={instagram} alt="" className="w-8" />
        <img src={twitter} alt=""  className="w-8"/>
        </div>
        </div>
        </div>
</div>

</div>
</div>


    )
}
export default Footer;