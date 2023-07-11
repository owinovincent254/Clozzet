import { FaPlay } from "react-icons/fa";
function Shop({ icon, featured, bgColor }) {
  return (
    <div className={`${bgColor} `}>
      <div className=" flex justify-center items-end h-[100%]">
        <div className="m-10">
          <p className="text-gray-500">Casual Collection</p>
          <p className="text-2xl my-4 font-bold">{featured}</p>
          <div className="flex justify-start items-center gap-2">
            <p className="font-bold">Shop Now</p>
            <FaPlay size={15} />
          </div>
        </div>
        <div className="h-[100%] w-[50%]">
          <img src={icon} alt="Mens featured product" className="h-[100%] object-fill" />
        </div>
      </div>
    </div>
  );
}
export default Shop;
