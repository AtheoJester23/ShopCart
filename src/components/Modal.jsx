import { useAtom } from "jotai";
import { cartData, open, selectedItem } from "../atoms/CartAtom";
import { X } from "react-feather";
import { fetchedData } from "../atoms";

export const Modal = ({ minusQuan, itemId, removeItem}) => {
    const [opening, onClose] = useAtom(open);
    const [selected, setSelected] = useAtom(selectedItem);
    const [cartItems, setCart] = useAtom(cartData);
    const [data] = useAtom(fetchedData);

    console.log("Modal Selected: ", selected);

    return (  
        <div
            onClick={() => onClose(false)}
            className={`
                fixed inset-0 flex justify-center items-center transition-colors
                ${opening ? "visible bg-black/20" : "invisible"}    
            `}
        >
            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                bg-white rounded-xl shadow p-9 transition-all flex flex-col gap-5
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                `}
            >
                <div className="text-black text-center">
                    <h1 className="font-bold">Confirm Delete</h1>
                    <p>
                        Are you sure you want to remove the item?
                    </p>
                    <button
                        onClick={() => onClose(false)}
                        className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                    >
                        <X className="hover:cursor-pointer"/>
                    </button>
                </div>

                <div className="flex gap-2 justify-center items-center">
                    <button 
                        className="bg-red-500 rounded py-2 px-5 hover:cursor-pointer hover:bg-red-700 -translate-y-1 hover:translate-none shadow-md hover:shadow-none"
                        onClick={() => {
                            removeItem(selected);
                            onClose(false); // Close the modal after executing
                        }}
                    >
                        Continue
                    </button>

                    <button onClick={() =>{
                        onClose(false);
                    }} 
                        className="text-black outline-2 outline-solid py-2 px-5 rounded hover:cursor-pointer hover:bg-black hover:text-white -translate-y-1 hover:translate-none shadow-md hover:shadow-none"
                    >
                        Close
                    </button>
                </div>
                
            </div>

        </div>
    );
}