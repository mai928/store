import { createSlice } from '@reduxjs/toolkit'


const initialState={
    todos :[

        {
            title: "learn node js",
            content: "Lorem ipsum dolor sit amet.",
          },
          {
            title: "go to the sea",
            content: "Lorem ipsum dolor sit amet.",
          },
          {
            title: "walk the dog",
            content: "Lorem ipsum dolor sit amet.",
          },
    ]
}

export const todoSlice =createSlice({

    name:'todo',
    initialState,
    reducers:{
      addTodoaction:(state ,action)=>{
           state.todos.push(action.payload)
           console.log('action',action);
           console.log('payload',action.payload);
        },  
        deleteTodoaction:( state ,action)=>{
          state.todos= state.todos.filter((item,index)=> 
          {
            return index !== action.payload} )
        }
    }
})



export const  {addTodoaction,deleteTodoaction} =todoSlice.actions
