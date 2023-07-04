import logo from "../assets/images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
function Nav() {
  return (
    <div className="container mx-auto flex justify-between items-center capitalize">
      <div>
        <ul className="ul flex justify-between gap-2 items-center py-4">
          <img src={logo} alt="Clozzet Nav Logo" className="w-40" />
          <li className="hidden md:block">Home</li>
          <li className="hidden md:block">About Us</li>
          <li className="hidden md:block">Shop</li>
        </ul>
      </div>
      <div>
        <ul className="ul flex justify-between items-center gap-2 py-4">
          <li>
            <AiOutlineShoppingCart size={25} />
          </li>
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
