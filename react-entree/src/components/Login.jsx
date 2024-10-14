import React, { useState } from 'react'
import '../css/Login.css'
import login from '../images/login.jpg'
import { useNavigate } from "react-router-dom";


function Login({onSubmitClick}) {
  const [inputFields, setInputFields] = useState([{email:'', password:''}])
  const handleSubmit=(e)=>{
    e.preventDefault();
    setInputFields([{email:'', password:''}])
    onSubmitClick(inputFields[0])



    
  }
  const handleChange=(index,e)=>{
    let data = [...inputFields]
    data[index][e.target.name] = e.target.value;
    setInputFields(data)
    console.log(data)
  }
  const navigate = useNavigate();

  return (
    <div className='container' id='loginContainer'>
      <div className='logincard'>
        <div className='loginform'>
        <h1>Login</h1>
        <div className='m-5 d-flex justify-content-center   '>
        <form className=" w-75" onSubmit={handleSubmit}>
          {inputFields.map((input,index)=>{
            return(
              <div>
                <div className="row mb-3">
             <div>
               <label className="form-label fs-6" for="email" >Email  </label>
               <input
                 type="text"
                 id="email"
                 className="form-control form-control"
                 name="email"
                 value={input.email}
                 onChange={e=>handleChange(index,e)}
                 placeholder="Enter Your Email"
                 required
               />
             </div>
           </div>
           
           <div className="row mb-3">
             <div>
               <label className="form-label fs-6" for="password">Password</label>
               <input
                 type="password"
                 id="password"
                 className="form-control form-control"
                 name="password"
                 value={input.password}
                 onChange={e=>handleChange(index,e)}
                 placeholder="Enter Your Password"
                 required/>
             </div>
           </div>
           
           <div className="button  fs-2 mt-4">
             <button type="submit" className="btn btn-success w-25">Login</button>
           </div>
 
           <div className="row mt-4 ">
             <p className="reg_para" onClick={()=>navigate("/forgetpassword")}> Forgot Password ? <button className='btn btn-link'> Click here </button></p>
             <p className="reg_para" onClick={()=>navigate("/register")}> New User ? <button className='btn btn-link'> Register </button></p>
           </div>
              </div>
            )
          })}
           
         </form>
        </div>
      
        </div>
      <div className='loginimage'>
        <img src={login} alt="image1"  />
      </div>
    </div>
    </div>
  )
}

export default Login;
