 
 import { useSelector } from "react-redux";


 const Home=()=>{
    const  reduxStore =useSelector(state=>state.todos)   //return data (array)
   console.log(reduxStore);
    return(
    
        <div>
            <h3>Home</h3>
        </div>
    )
    
    }
    export default Home;