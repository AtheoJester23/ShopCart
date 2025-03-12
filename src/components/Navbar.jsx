import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { cartData } from "../atoms/CartAtom";
import logo from "../Imgs/Logo.png"


const Navbar = () => {
    const [itemCount] = useAtom(cartData);

    // console.log(itemCount.length)

    return (  
        <div className="theNav px-7 py-4 flex justify-between px-30 shadow-xl items-center">
            <div className="text-black flex flex-row justify-center items-center gap-2">
                <Link to="/" className="text-black font-mono font-bold text-xl">
                    <img src={logo} alt="" className="logo"/>
                </Link>
            </div>
    
            <div className="cartPic">
                <Link to="/cart">
                    {itemCount < 1 ? 
                        <div>
                            <i class="bi bi-cart text-black hover:cursor-pointer text-[23px]"></i>
                            <p className="countCart bg-black rounded-full px-2 text-[12px]">{itemCount.length}</p>
                        </div>
                    : 
                        <div>
                            <i class="bi bi-cart-fill text-black hover:cursor-pointer text-[23px]"></i>
                            <p className="countCart bg-black rounded-full px-2 text-[12px]">{itemCount.length}</p>
                        </div>
                    }
                </Link>
            </div>
        </div>
    );
}
 
export default Navbar;