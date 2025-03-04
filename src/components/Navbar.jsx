import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { cartData } from "../atoms/CartAtom";

const Navbar = () => {
    const [itemCount] = useAtom(cartData);

    console.log(itemCount.length)

    return (  
        <div className="theNav p-7 flex justify-between px-30 shadow-xl">
            <div className="text-black flex flex-row justify-center items-center gap-2">
                <Link to="/" className="text-black font-mono font-bold text-xl">ShopCart</Link>
            </div>
    
            <div className="cartPic">
                <Link to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart text-black hover:cursor-pointer" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                    <p className="countCart bg-black rounded-full px-2 text-[12px]">{itemCount.length}</p>
                </Link>
            </div>
        </div>
    );
}
 
export default Navbar;