import React, { useState } from 'react'
import '../css/ForgetPassword.css'
import login from '../images/login.jpg'

function ForgetPassword({onForgetPassword}) {
  const [inputFields, setInputFields] = useState([{email:'', code:'', password:''}])
  const [cnfpassword, setCnfPassword] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(inputFields[0]['password'] === cnfpassword){
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
    if(e.target.name==='cnfpassword'){
      setCnfPassword(e.target.value)
    }
    else{
      data[index][e.target.name] = e.target.value;
      setInputFields(data)
    }
  }
  return (
    <div className="container">
    <div className="forgetcard ">
    
      <div className="forgetform">
        <h1>Reset Password</h1>
        <div className="m-5 d-flex justify-content-center   ">
          <form className="w-75" onSubmit={handleSubmit}>
            {inputFields.map((input,index)=>{
              return(
                <div key={index}>
                  <div className="row mb-3">
              <div>
                <label className="form-label fs-6" htmlFor="email">Email </label>
                <input
                  type="text"
                  id="email"
                  className="form-control form-control"
                  placeholder="Enter Your Email"
                  name="email"
                  value={input.email}
                  onChange={e=>handleChange(index,e)}
                  required
                />
              </div>
            </div>
  
            <div className="row mb-3">
              <div>
                <label className="form-label fs-6" htmlFor="Security">Security Question</label>
                <input
                  type="text"
                  id="password1"
                  className="form-control form-control"
                  name="code"
                  placeholder="What was the name of your favorite childhood pet?"
                  value={input.code}
                  onChange={e=>handleChange(index,e)}
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div>
                <label className="form-label fs-6" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control form-control"
                  placeholder="Create New Password"
                  required
                  minLength="4"
                  name="password"
                  value={input.password}
                  onChange={e=>handleChange(index,e)}
                />
              </div>
            </div>
  
            <div className="row mb-3">
              <div>
                <label className="form-label fs-6" htmlFor="cnfpassword"
                  >Confirm Password</label>
                <input
                  type="password"
                  id="cnfpassword"
                  className="form-control form-control"
                  placeholder="Confirm New Password"
                  name="cnfpassword"
                  value={cnfpassword}
                  onChange={e=>handleChange(index,e)}
                  required
                />
              </div>
            </div>
            
            <div className="button  fs-2 mt-4">
              <button type="submit" className="btn btn-success">Update Password</button>
            </div>
  
            <div className="row mt-4 ">
           <p className="reg_para"> New User ?  <a routerlink="/signup" className="" href='/'> Signup  </a></p>
            </div>

            <div className="row ">
                <p className="reg_para">
                  Already have acount ? <a routerlink="/login" className="" href="/"> Login </a>
                </p>
            </div>
                </div>
              )
            })}
           
            
         
          </form>
        </div>
      </div>
      <div className="loginimage ">
        <img src={login} alt="image4"  />
      </div>
      
    </div>
</div>
  )
}

export default ForgetPassword
