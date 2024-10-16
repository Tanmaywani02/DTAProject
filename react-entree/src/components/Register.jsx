import React, { useState } from 'react'
import register from '../images/register.jpg'
import { useNavigate } from "react-router-dom";


function Register({onSubmitClick}) {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState([{name:'', email:'', code:'', password:''}])
  const [cnf_pass, setCnfPass] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(inputFields[0]['password']===cnf_pass){
      setInputFields([{name:'', email:'', code:'', password:''}])
      setCnfPass('');
      onSubmitClick(inputFields[0]);
    }
    else{
      alert("Password doesn't match");
    }
  }
  const handleChange=(index,e)=>{
    let data = [...inputFields]
    if(e.target.name==='cnfpassword'){
      setCnfPass(e.target.value)
      console.log("change in cnf")
    }
    else{
      data[index][e.target.name] = e.target.value;
      setInputFields(data);
    }
  }
  return (
    <div className="container">
  <div className="logincard">
    <div className="loginimage">
      <img src={register} alt="image2" />
    </div>
    <div className="loginform">
      <h1>Register</h1>
      <div className="m-5 d-flex justify-content-center">
        <form className="w-75" onSubmit={handleSubmit}>
          {inputFields.map((input, index)=>{
            return(
              <div>
            <div className="row mb-3">
            <div>
              <label className="form-label fs-6" for="name">Name </label>
              <input
                type="text"
                id="name"
                name="name"
                value={input.name}
                onChange={e=>handleChange(index,e)}
                className="form-control form-control"
                placeholder="Enter Your Name"
              
                required
              />
            </div>
            </div>
          <div className="row mb-3">
            <div>
              <label className="form-label fs-6" for="email">Email </label>
              <input
                type="text"
                id="email"
                
                value={input.email}
                onChange={(e)=>handleChange(index,e)}
                className="form-control form-control"
                placeholder="Enter your Email"
                name="email"
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div>
              <label className="form-label fs-6" for="security_code">Security Question</label>
              <input
                type="text"
                id="pnumber"
                value={input.code}
                onChange={(e)=>handleChange(index,e)}
                className="form-control form-control"
                placeholder="What was the name of your favorite childhood pet?"
                name="code"
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
                value={input.password}
                onChange={(e)=>handleChange(index,e)}
                className="form-control form-control"
                placeholder="Create Password"
                required
                minlength="4"
               
                name="password"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div>
              <label className="form-label fs-6" for="cnfpassword">Confirm Password</label>
              <input
                type="password"
                id="cnfpassword"
                value={cnf_pass}
                onChange={(e)=>handleChange(index,e)}
                className="form-control form-control"
                placeholder="Confirm Password"
                
                name="cnfpassword"
                required
              />
            </div>
          </div>

          <div className="button fs-2 mt-4">
            <button type="submit" className="btn btn-success w-25">SignUp</button>
          </div>

          <div className="row mt-4">
            <p className="reg_para" onClick={()=>navigate("/login")}>
              Already have acount ? <button className="btn btn-link"> Login </button>
            </p>
          </div>
          </div>
            )
          })}
          
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Register
