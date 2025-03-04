import { atom } from "jotai";
import axios from "axios";

import { loadable } from "jotai/utils";

const asyncData = atom(async () => {
    try {
        const response = await axios.get("https://shopcart-62cad-default-rtdb.firebaseio.com/.json")
        
        return response.data;
    } catch (error) {
        console.error("Error Fetching: ", error);
    }
})

export const fetchedData = loadable(asyncData);