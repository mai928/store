
import { Link } from "react-router-dom";
const Navbar =() =>{
    
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container m-auto">
          <a class="navbar-brand" href="#">Navbar</a>
        
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">

              <li class="nav-item me-5">
                <Link class="nav-link active" aria-current="page" to ="/">Home</Link>
              </li>

              <li class="nav-item me-5">
                <Link class="nav-link active" to="/about">About</Link>
              </li>
             
              <li class="nav-item ">
                <Link class="nav-link active" to="/shop" >Shop</Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/todo" >ToDolist</Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/counter" >Counter</Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/signin" >Sign in</Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/signup" >Sign up</Link>
              </li>



            </ul>
            
           
          </div>
        </div>
      </nav>
      </>
    )
}


export default  Navbar;