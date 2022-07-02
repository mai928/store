

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { Increament ,Decreament} from '../../redux/feature/counterSlice';

const Counter=()=>{
  // const [counter ,setCounter]=useState(0);

   const  val =useSelector((state)=>state.countreducer.countVal)
  // console.log(useSelector(state=>state.counter.count))
  const dispatch =useDispatch();

  // const increament=()=>{
  //   // setCounter(counter+1)
   
  // }

  // const decreament=()=>{
  //   // setCounter(counter-1)
  // }
  
  return (
    <div className='container border mt-5 py-5'>
      <h2 className='text-center py-5'> Counter</h2>
       <div className='m-auto d-table '>
       <button className='btn btn-success me-5 '  onClick={()=>dispatch(Increament())}> increament</button>
       <span className='me-5'>{val}</span>
       <button className='btn btn-danger' onClick={()=>dispatch(Decreament())}> decreament</button>
       </div>
       </div>
   
  );

}

  export default Counter;