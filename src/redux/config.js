import {createStore} from'redux'

//Action   type   payload   (add action)
  export const addTodoAction =(payload)=>{

    return{ 
        type:"ADD_TODO",
        payload :payload

    }
}
//  Delete action
 export const deleteTodoAction =(payload)=>{
        return{
            type: "DELETE_TODO",
            payload
        }
  }
//Intial State
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
//Reducer
  export const todoreducer =( state=initialState , action)=>{
      if(action.type === "ADD_TODO"){
            // State.todos.push()
            //add todo to the state
            return{...state ,todos:[...state.todos , action.payload]}
      }

      if(action.type === "DELETE_TODO"){
          return{...state,todos:[...state.todos.filter((item, index)=>{ return index !==action.payload})]}
      }
       return state;
 }
//Store
// export const store=createStore(
//     //reducer
//     reducer
    
// );



