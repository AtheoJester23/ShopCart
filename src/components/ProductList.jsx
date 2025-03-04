import { useAtom } from "jotai";
import { fetchedData } from "../atoms";

const ProductList = () => {
    const [data] = useAtom(fetchedData);

    const products = data.data;

    console.log("Loadable: ", products);

    return(
        <div>
            {products ?    
                <div className="grid grid-cols-4 gap-5 justify-center items-center">
                    {products.map((item,index)=>
                        <div key={index} className="productContainer p-5 rounded shadow-lg">
                            <p className="font-bold text-xl">{item.name}</p>
                            <p>Price: P{item.price}</p>
                            <button className="addCart bg-green-600 py-2 px-7 rounded-full mt-5 hover:cursor-pointer hover:bg-green-700 font-bold">
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