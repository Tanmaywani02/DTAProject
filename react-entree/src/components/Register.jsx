import React from 'react'
import register from '../images/register.jpg'

function Register() {
  return (
    <div class="container">
  <div class="logincard">
    <div class="loginimage">
      <img src={register} alt="image" />
    </div>
    <div class="loginform">
      <h1>Register</h1>
      <div class="m-5 d-flex justify-content-center">
        <form class="w-75">
          <div class="row mb-3">
            <div>
              <label class="form-label fs-6" for="name">Name </label>
              <input
                type="text"
                id="name"
                name="name"
                class="form-control form-control"
                placeholder="Enter Your Name"
              
                required
              />
            </div>
          </div>
          <div class="row mb-3">
            <div>
              <label class="form-label fs-6" for="email">Email </label>
              <input
                type="text"
                id="email"
                class="form-control form-control"
                placeholder="Enter your Email"
               
                name="email"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div>
              <label class="form-label fs-6" for="security_code">Security Code</label>
              <input
                type="text"
                id="pnumber"
                class="form-control form-control"
                placeholder="Create a Security Code"
                
                name="security_code"
                required
                minlength="4"
                maxlength="4"
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
                placeholder="Create Password"
                required
                minlength="4"
               
                name="password"
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
                placeholder="Confirm Password"
                
                name="psw_repeat"
                required
              />
            </div>
          </div>

          <div class="button fs-2 mt-4">
            <button type="submit" class="btn btn-success w-25">SignUp</button>
          </div>

          <div class="row mt-4">
            <p class="reg_para">
              Already have acount ? <a routerLink="/login" class=""> Login </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Register
