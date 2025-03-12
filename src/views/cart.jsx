import { useAtom } from "jotai";
import { cartData, open, selectedItem, totalCost } from "../atoms/CartAtom";
import CheckoutInfo from "../components/checkoutInfo";
import { fetchedData } from "../atoms";
import { Modal } from "../components/Modal";
import { useState } from "react";

const Cart = () => {
    const [cartItems, setCart] = useAtom(cartData);
    const [data] = useAtom(fetchedData);
    const [theOpen, setTheOpen] = useAtom(open);
    const [selected, setSelected] = useAtom(selectedItem);
    const [total, setTotal] = useAtom(totalCost);


    const totalPrice = cartItems.reduce((accumulator, currentPrice, index, array)=> {
        return accumulator + currentPrice.price
    }, 0) 

    const totl = () => {
        const response = cartItems.map((item)=>{})
    }

    console.log(totalPrice);

    // const checkData = () => {
    //     console.log("The current cart Item is: ", cartItems);
    // }

    // const openModal = () => {
    //     setTheOpen(true);
    //     console.log("This is a passed function");
    //     console.log("The Id is: ", selected);
    // }

    const removeItem = (id) => {
        console.log("The id is: ", id);

        setCart((prevArray) => prevArray.filter((index) => index.id != id))
    }

    const addQuan = (id)=>{
        const ogItem = data.data.find((item) => item.id === id);

        const ogPrice = ogItem.price;

        setCart((items)=>{
            return(
                items.map((theIndex) => theIndex.id === id ? {...theIndex, quantity: theIndex.quantity += 1, price: theIndex.price += ogPrice} : theIndex)
            )
        })
    }

    const openModal = (id) =>{
        setSelected(id);

        setTheOpen(true);
    }

    const minusQuan = (id) => {
        setSelected(id);

        console.log("The selected is: ", selected)

        const findItem = cartItems.find((item) => item.id === id);
        const ogItem = data.data.find((item) => item.id === id);

        const ogPrice = ogItem.price;

        console.log(findItem);

        if(findItem.quantity === 1 && theOpen === false){
            setTheOpen(true);
            return;
        }else{
            setTheOpen(false);
            setCart((items) => {
                return(
                    items.map((theIndex) => theIndex.id === id && theIndex.quantity > 1 ? {...theIndex, quantity: theIndex.quantity -= 1, price: theIndex.price -= ogPrice} : theIndex)
                )
            })

            console.log(cartItems);
        }
    }

    return (  
        <div className="flex relative flex-col">
            <div className="pt-20 px-20 flex-1 relative">
                {cartItems.length && data ? 
                    <div className="flex flex-col gap-5">
                        {cartItems.map((item, index)=>
                            <div key={item.id} className="bg-indigo-50 text-black p-5 rounded flex justify-between relative shadow-xl">
                                <div>
                                    <p className="font-bold">Product Name: {item.name}</p>
                                    <p>Price: {item.price}</p>
                                    <div className="flex items-center gap-3">
                                        <p className="">Quantity: {item.quantity}</p>
                                        <button onClick={() => addQuan(item.id)} className="border-2 border-solid px-2 hover:cursor-pointer rounded -translate-y-[1.5px] hover:translate-none duration-200">+</button>
                                        <button onClick={() => minusQuan(item.id)} className="border-2 border-solid px-[11px] hover:cursor-pointer rounded -translate-y-[1.5px] hover:translate-none duration-200">-</button>
                                    </div>
                                </div>

                                <div onClick={() => openModal(item.id)} className="flex items-center bg-red-500 p-5 hover:cursor-pointer hover:bg-red-600 absolute top-0 right-0 bottom-0 rounded-e-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                    </svg>
                                </div>

                                
                            </div>
                        )}
                    </div>
                : <p>Nothing on cart</p>}
            </div>

            <div className="bg-indigo-200 mt-10 mb-20 mx-20 text-black p-10 rounded">
                <h1>Total Cost: P{totalPrice}</h1>
            </div>  

            {/* <CheckoutInfo/> */}

            <Modal minusQuan={minusQuan} removeItem={removeItem}/>
        </div>
    );
}
 
export default Cart;