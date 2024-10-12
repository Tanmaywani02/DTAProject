import React from 'react'
import '../css/Login.css'
import login from '../images/login.jpg'

function Login() {
  return (
    <div className='container'>
      <div className='logincard'>
        <div className='loginform'>
        <h1>Login</h1>
        <div className='m-5 d-flex justify-content-center   '>
        <form class=" w-75">
           
           <div class="row mb-3">
             <div>
               <label class="form-label fs-6" for="email" >Email  </label>
               <input
                 type="text"
                 id="email"
                 class="form-control form-control"
                 name="email"
                 placeholder="Enter Your Email"
                 required
               />
             </div>
           </div>
 
         
 
           <div class="row mb-3">
             <div>
               <label class="form-label fs-6" for="password">Password</label>
               <input
                 type="password"
                 id="password"
                 class="form-control form-control"
                 name="password"
                 placeholder="Enter Your Password"
                 required/>
             </div>
           </div>
           
           <div class="button  fs-2 mt-4">
             <button type="submit" class="btn btn-success w-25">Login</button>
           </div>
 
           <div class="row mt-4 ">
             <p class="reg_para"> Forgot Password ?  <a routerLink="/forgetpassword" class="" > Click here  </a></p>
          <p class="reg_para"> New User ?  <a routerLink="/signup" class="" > Register  </a></p>
           </div>
         </form>
        </div>
      
        </div>
      <div className='loginimage'>
        <img src={login} alt="image"  />
      </div>
    </div>
    </div>
  )
}

export default Login;
