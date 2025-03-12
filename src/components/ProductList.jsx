import { useAtom } from "jotai";
import { fetchedData } from "../atoms";
import { cartData } from "../atoms/CartAtom";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [data] = useAtom(fetchedData);
    const [cart, setCart] = useAtom(cartData);

    const products = data.data;

    // console.log(cart);

    const addItem = (item) =>{
        console.log("Add button activated...");

        setCart((prevCart) => {
            const existingidem = prevCart.find((cartItem) => cartItem.id === item.id);
            const ogItem = data.data.find((theItem) => theItem.id === item.id);

            const ogPrice = ogItem.price;


            if(existingidem){
                return prevCart.map((cartItem) => 
                    cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1, price:  ogPrice * (cartItem.quantity + 1)} : cartItem
                );
            }else{
                return(
                    [...prevCart, item]
                )
            }
        });

        console.log("Added on the cart: ", cart);
    }

    const testArray = [{id: 1, name: "testing", age: 22, somemoreInfo: {name: "new", age: 69}}, {id: 2, name: "test2", age: 23}, {id: 3, name: "test", age: 30}];

    const testObj = {id: 8, name: "something"};

    const useSlice = testArray.slice();

    // console.log(testObj);

    testObj.some = "value";

    // console.log(testObj);


    
    return(
        <div>
            {products ?    
                <div className="grid grid-cols-4 gap-5 justify-center items-center">
                    {products.map((item,index)=>
                        <div key={index} className="productContainer p-5 rounded shadow-lg">
                            <p className="font-bold text-xl">{item.name}</p>
                            <p>Price: P{item.price}</p>
                            <button onClick={() => addItem({id: item.id, name: item.name, price: item.price, quantity: 1})} className="addCart bg-green-600 py-2 px-7 rounded-full mt-5 hover:cursor-pointer hover:bg-green-700 font-bold shadow-lg hover:shadow-none">
                                Add to cart
                            </button>
                        </div>
                    )}
                </div>
            : <p>Loading...</p>}
        </div>
    )
}
 
export default ProductList;