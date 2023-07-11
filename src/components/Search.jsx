import { AiOutlineSearch } from "react-icons/ai";
function Search() {
  return (
    <div className="container items-center flex mx-auto my-12 border-2 rounded-full border-[#45C9A1]  ">
      <div className=" px-8 py-5 w-[70%] flex items-center gap-5 border-r-2 ">
        <p>
          <AiOutlineSearch size={45} />
        </p>
        <input 
          type="text"
          placeholder="Search Products and categories"
          className="outline-0 text-3xl w-[40%]"
        />
      </div>
      <div>
        <select name="" id=""></select>
      </div>
    </div>
  );
}
export default Search;