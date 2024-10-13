import React, { useState } from 'react'
import '../css/ForgetPassword.css'
import login from '../images/login.jpg'

function ForgetPassword({onForgetPassword}) {
  const [inputFields, setInputFields] = useState([{email:'', code:'', password:''}])
  const [cnfpassword, setCnfPassword] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(inputFields[0]['password'] == cnfpassword){
      setInputFields([{email:'', code:'', password:''}]);
      setCnfPassword('')
      onForgetPassword(inputFields[0])
    }
    else{
      alert("Password doesn't match")
    }
  }
  const handleChange=(index,e)=>{
    let data = [...inputFields];
    if(e.target.name=='cnfpassword'){
      setCnfPassword(e.target.value)
    }
    else{
      data[index][e.target.name] = e.target.value;
      setInputFields(data)
    }
  }
  return (
    <div class="container">
    <div class="forgetcard ">
    
      <div class="forgetform">
        <h1>Reset Password</h1>
        <div class="m-5 d-flex justify-content-center   ">
          <form class=" w-75">
            {inputFields.map((input,index)=>{
              return(
                <div>
                  <div class="row mb-3">
              <div>
                <label class="form-label fs-6" for="email">Email </label>
                <input
                  type="text"
                  id="email"
                  class="form-control form-control"
                  placeholder="Enter Your Email"
                  name="email"
                  value={input.email}
                  onChange={e=>handleChange(index,e)}
                  required
                />
              </div>
            </div>
  
            <div class="row mb-3">
              <div>
                <label class="form-label fs-6" for="Security">Security Question</label>
                <input
                  type="text"
                  id="password"
                  class="form-control form-control"
                  name="security_code"
                  placeholder="What was the name of your favorite childhood pet?"
                  value={input.code}
                  onChange={e=>handleChange(index,e)}
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
                  placeholder="Create New Password"
                  required
                  minlength="4"
                  name="password"
                  value={input.password}
                  onChange={e=>handleChange(index,e)}
                />
              </div>
            </div>
  
            <div class="row mb-3">
              <div>
                <label class="form-label fs-6" for="cnfpassword"
                  >Confirm Password</label>
                <input
                  type="password"
                  id="cnfpassword"
                  class="form-control form-control"
                  placeholder="Confirm New Password"
                  name="cnfpassword"
                  value={cnfpassword}
                  onChange={e=>handleChange(index,e)}
                  required
                />
              </div>
            </div>
            
            <div class="button  fs-2 mt-4">
              <button type="submit" class="btn btn-success">Update Password</button>
            </div>
  
            <div class="row mt-4 ">
           <p class="reg_para"> New User ?  <a routerLink="/signup" class=""> Signup  </a></p>
            </div>

            <div class="row ">
                <p class="reg_para">
                  Already have acount ? <a routerLink="/login" class=""> Login </a>
                </p>
            </div>
                </div>
              )
            })}
           
            
         
          </form>
        </div>
      </div>
      <div class="loginimage ">
        <img src={login} alt="image"  />
      </div>
      
    </div>
</div>
  )
}

export default ForgetPassword
