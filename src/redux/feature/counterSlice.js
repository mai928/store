import { createSlice } from "@reduxjs/toolkit";


const initialState={
    countVal:0,
}

export const counterSlice =createSlice({
   
    name: 'counter',
    initialState,
    reducers:{

        Increament:(state)=>{
            state.countVal+=1;
        },
        Decreament:(state)=>{
           state.countVal-=1
        },
         incrementByAmount: (state, action) => {
            state.countVal += action.payload
          },
    }
})


export const {Increament,Decreament,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer


