import { BrowserRouter,Routes,Route } from "react-router-dom"
import Product from "../pages/Product"
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import Shopping from "../pages/Shopping"
import NotFound from "../pages/NotFound"
function Router (){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/shop" element={<Shopping/>}/>  
          <Route path="/cart" element={<Cart/>}/>   
          <Route path="/product/:productId" element={<Shopping/>}/> 
          <Route path="*" element={<NotFound/>}/>  
        </Routes>
        </BrowserRouter>
        
    )
}
export default Router