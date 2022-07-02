import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'


const baseURL ='https://fakestoreapi.com/products'
const fetchProduct = createAsyncThunk('shop/getProductItems',()=>{
    fetch(baseURL)
    .then((res)=>res.json())
    .then((json)=>json)
    .catch(err=>console.log(err))

})

const intialState ={
    products: [],
    loading :false,
    err:{}
}

export const shopSlice  =createSlice({

    name:'shop',
    intialState,
    reducers:{
        addProduct : ()=>{
            // console.log(ac);
        }
    },extraReducers:{
        [fetchProduct.pending]:(state)=>{
              state.loading=true
        },
        [fetchProduct.fulfilled]:(state ,action)=>{
            state.products = action.payload
        },
        [fetchProduct.rejected]:(state ,action)=>{
             state.err = action.payload
        },
    },
})

export const {addProduct}  =shopSlice.actions
export default shopSlice.reducer