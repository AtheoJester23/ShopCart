import { useAtom } from "jotai";
import { fetchedData } from "../atoms";
import { cartData } from "../atoms/CartAtom";

const ProductList = () => {
    const [data] = useAtom(fetchedData);
    const [cart, setCart] = useAtom(cartData);

    const products = data.data;

    // console.log(cart);

    const addItem = (item) =>{
        console.log("Add button activated...");

        setCart((prevCart) => [...prevCart, item]);

        console.log(cart);
    }

    return(
        <div>
            {products ?    
                <div className="grid grid-cols-4 gap-5 justify-center items-center">
                    {products.map((item,index)=>
                        <div key={index} className="productContainer p-5 rounded shadow-lg">
                            <p className="font-bold text-xl">{item.name}</p>
                            <p>Price: P{item.price}</p>
                            <button onClick={() => addItem({id: item.id, name: item.name, price: item.price})} className="addCart bg-green-600 py-2 px-7 rounded-full mt-5 hover:cursor-pointer hover:bg-green-700 font-bold">
                                Add to cart
                            </button>
                        </div>
                    )}
                </div>
            : <p>Loading</p>}
        </div>
    )
}
 
export default ProductList;