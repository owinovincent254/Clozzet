import logo from "../assets/images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="container mx-auto flex justify-between items-center capitalize">
      <div>
        <ul className="ul flex justify-between gap-8 items-center py-4">
          <Link to="/">
            <img src={logo} alt="Clozzet Nav Logo" className="w-40" />
          </Link>
         <Link to="/"> <li className="hidden md:block">Home</li></Link>
          <li className="hidden md:block">About Us</li>
          <Link to="/shop">  <li className="hidden md:block">Shop</li></Link>
        </ul>
      </div>
      <div>
        <ul className="ul flex justify-between items-center gap-8 py-4">
        <Link to="/cart"> <li>
            <AiOutlineShoppingCart size={25} />
          </li></Link>
          <li>Sign Up</li>
          <button className="py-2 px-6 rounded-full border-2 border-black">
            Log In
          </button>
          <li className="block md:hidden">
            <FaBars size={25} />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
