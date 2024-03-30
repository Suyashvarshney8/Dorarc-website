// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// function fetchFromLocalStorage() {
//     let value = localStorage.getItem("details");
//     if (value) {
//         return JSON.parse(value);
//     }
//     else {
//         return []; // empty array
//     }
// }

// function storeInLocalStorage(data) {
//     localStorage.setItem("details", JSON.stringify(data));
// }

// const initialState = {
//     loading: false,
//     value: fetchFromLocalStorage(),
//     error: ""
// }

// export const getDetails = createAsyncThunk("getDetails", async (id) => {
//     const response = await axios.get(`https://dummyjson.com/products/${id}`);
//     // console.log(response);
//     // console.log(response.data); // Returns an object
//     return response.data;
// })
// // const productJsonUrl = '/products.json';

// // export const getDetails = createAsyncThunk("getDetails", async (id) => {
// //     // const response = await axios.get(`https://dummyjson.com/products/${id}`);
// //     // // console.log(response);
// //     // // console.log(response.data); // Returns an object
// //     // return response.data;

// //     const response = await axios.get(productJsonUrl);
// //     const product = response.data.products.find(product => product.id === id);
// //     return product;
// // })




// // Function to fetch data from the local JSON file
// // async function fetchProductDetailsFromJSON(id) {
// //     try {
// //         const response = await axios.get("/products.json"); // Assuming product.json is in the public directory
// //         const data = response.data.products.find(product => product.id === id);
// //         return data;
// //     } catch (error) {
// //         throw Error("Error fetching product details from JSON file");
// //     }
// // }

// // // Remaining code stays the same

// // export const getDetails = createAsyncThunk("getDetails", async (id) => {
// //     return fetchProductDetailsFromJSON(id);
// // })

// // // Remaining code stays the same


// export const detailsSlice = createSlice({
//     name: "details",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(getDetails.pending, (state, action) => {
//             state.loading = true;
//         })

//         builder.addCase(getDetails.fulfilled, (state, action) => {
//             state.loading = false;
//             state.value = action.payload; // api'den gelen verileri value'ya doldurma işlemi
//             storeInLocalStorage(state.value);
//         })

//         builder.addCase(getDetails.rejected, (state, action) => {
//             state.error = "Bad fetching!"
//         })
//     }
// });

// export default detailsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function fetchFromLocalStorage() {
    let value = localStorage.getItem("details");
    if (value && value!="undefined") {
        return JSON.parse(value);
    }
    else {
        return []; // empty array
    }
}

function storeInLocalStorage(data) {
    localStorage.setItem("details", JSON.stringify(data));
}

const initialState = {
    loading: false,
    value: fetchFromLocalStorage(),
    error: ""
}

export const getDetails = createAsyncThunk("getDetails", async (id) => {
    const response = await axios.get(`/products.json`);
    // console.log(response);
    // console.log(response.data); // Returns an object
    // return response.data;
    var a = response.data.products;

    for(var i=0;i<a.length;i++)
    {
        if(a[i].id == id)
        {
            return a[i];
        }
    }

    // return response.data.products;
})

export const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDetails.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(getDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload; // api'den gelen verileri value'ya doldurma işlemi
            storeInLocalStorage(state.value);
        })

        builder.addCase(getDetails.rejected, (state, action) => {
            state.error = "Bad fetching!"
        })
    }
});

export default detailsSlice.reducer;