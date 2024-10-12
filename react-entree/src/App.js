// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login.jsx'
import Register from './components/Register.jsx';
import { useState } from 'react';

function App() {
  const usersUrl = "http://localhost:3000/users"

  const handleRegisterUser=(user)=>{
    console.log("creating user")
    console.log(user)
    // Data reached app POST in API here
    fetch(usersUrl,{
      method:'POST',
      body:JSON.stringify(user)
    }).then(res=>res.json())
      .then(data=>{
        alert("Registered Successfully")
        // routing here
      })
  }

  const handleLoginUser=(inp)=>{
    fetch(usersUrl)
      .then(res=>res.json())
      .then(data=>{
        var temp = data.filter(x=>x.email==inp.email)
        if(temp.length>0){
          if(temp[0].password==inp.password){
            // Successful login
            localStorage.setItem("id",temp[0].id)
            localStorage.setItem("name",temp[0].name)
            // routing here
          }
          else{
            console.log("Wrong Password")
          }
        }else{
          alert("User Not Found")
        }
  })
  }
  return (
    <div className="content">
        {/* <Header/> */}
        {/* <br/><br/><br/> */}
        {/* <h1 className='text-center'>ECommerce App </h1> */}

        <Login onSubmitClick={handleLoginUser}/>
        {/* <Register onSubmitClick={handleRegisterUser}/> */}
        
        {/* <br/><br/><br/> */}
        {/* <Footer/> */}
    </div>
  );
}

export default App;
