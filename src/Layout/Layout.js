import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Shop from "../pages/Shop/Shop";
import NotFound from "../pages/NotFound/NotFound"
import Brands from "../pages/Brands/Brand";
import {Routes, Route, useLocation} from "react-router-dom";


function Layout() {

    const location = useLocation();
  
    return (
        <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/brands" element={<Brands />}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        {
            location.pathname === "/" 
            || location.pathname === "/contact" 
            || location.pathname === "/shop" 
            || location.pathname === "/brands"
            ? <Footer /> : ''
        }
        </div>
    );
}

export default Layout;