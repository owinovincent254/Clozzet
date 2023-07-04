
function TopCategory({icon, category}){
    return(
<div className="w-28 h-28">
    <div className="bg-gray-300 h-[100%] rounded-full flex justify-center items-center" >
        <img src={icon} alt="Jacket Icon" width={60} />
    </div>
    <h4 className="text-center">{category}</h4>
</div>
    )
}
export default TopCategory