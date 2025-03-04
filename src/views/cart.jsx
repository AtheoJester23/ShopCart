import { useAtom } from "jotai";
import { cartData } from "../atoms/CartAtom";

const Cart = () => {
    const [cartItems] = useAtom(cartData);

    const checkData = () => {
        console.log("The current cart Item is: ", cartItems);
    }

    return (  
        <div className="p-20">
            <p>this is cart views</p>
            <button onClick={checkData} className="bg-blue-700 rounded-full m-5 py-1 px-7">
                Check
            </button>
        </div>
    );
}
 
export default Cart;