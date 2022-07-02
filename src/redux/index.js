import {configureStore} from'@reduxjs/toolkit'
import { todoreducer } from './config';

import { todoSlice} from'./feature/todoSlice'
import  {shopSlice}from './feature/shopSlice'
import  {counterSlice} from './feature/counterSlice'


console.log('todoslice: ',todoSlice)
console.log('counterslice: ',counterSlice)
//Store
export const store=configureStore(
    //reducer
    {
        reducer:{
          todo:todoSlice.reducer,  
          countreducer:counterSlice.reducer
        }


       
    } 
    
);