// import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Checkout from "./components/Checkout";
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login.jsx'
import Register from './components/Register.jsx';
import { useEffect, useState } from 'react';
import Carousel from './components/Carousel.jsx';
import Products from './components/Products.jsx';
import Filter from './components/Filter.jsx';
import ForgetPassword from './components/ForgetPassword.jsx';
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";

// export const loginContext = createContext();

function App() {
  // const [isLogin, setLogin] = useState(false);
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  const usersUrl = "http://localhost:3000/users"
  const productsUrl = "http://localhost:3000/products"
  const cartUrl = "http://localhost:3000/carts"
  const listUrl = "http://localhost:3000/list"
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(productsUrl)
      .then(res=>res.json())
      .then(data=>setProducts(data))
  },[])

  // const [isLogin, setIsLogin] = useState(false)

  const handleRegisterUser=(user)=>{
    console.log("creating user")
    console.log(user)
    
    fetch(usersUrl,{
      method:'POST',
      body:JSON.stringify(user)
    }).then(res=>res.json())
      .then(data=>{
        alert("Registered Successfully")
        // routing here
        
        navigate("/")
        // Create cart and list for user here
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
            // setIsLogin(true)
            localStorage.setItem("id",temp[0].id)
            localStorage.setItem("name",temp[0].name)
            // console(`id: ${localStorage.getItem("id")} | isLogin: ${isLogin}`)
            // routing here
              // setLogin(true);
              
              navigate("/") 

          }
          else{
            console.log("Wrong Password")
          }
        }else{
          alert("User Not Found")
        }
      })
  }

  const handleForgetPassword=(inp)=>{
    fetch(usersUrl)
      .then(res=>res.json())
      .then(data=>{
        console.log("inside")
        var temp = data.find(x=>x.email==inp.email)
        if(temp!= undefined){
          console.log(temp)
          if(temp.email==inp.email && temp.code == inp.code){
            var temprecord = {id:temp.id, name:temp.name, email:temp.email, code:temp.code, password:inp.password}
            console.log(temprecord)
            fetch(`${usersUrl}/${temp.id}`,{
              method:"PUT",
              body:JSON.stringify(temprecord)
            }).then(res=>res.json())
              .then(data=>{console.log(data)//Password updated successfully
                navigate("/login")
          })
          }
          else{
            alert("Wrong Answer")
          }
        }
        else{
          alert("User not Found")
        }
        
      })
  }

  const handleSetCat=()=>{
    var category = document.getElementById("category").value;
    if(category=='all'){
      setFilterProducts(products)
    }
    else{
      setFilterProducts(products.filter((x)=>x.category==category))
    }
  }

  const handleATC=(pid)=>{
    // localStorage.setItem("id","1av3");
    if(localStorage.getItem("id") !== undefined){
      let data = {"productId":pid, "userid":localStorage.getItem("id"), "quantity":1}
      fetch(cartUrl,{
        method:'POST',
        body:JSON.stringify(data)
      }).then(res=>res.json())
        .then(data=>console.log(data))
      
      document.getElementById(`ATC${pid}`).disabled = true;
      
    }
    else{
      // routing to login page here
      navigate("/login")
    }
  }

  const handleATL=(idx)=>{
    // localStorage.setItem("id","1av3");
    if(localStorage.getItem("id") !== undefined){
      fetch(`${listUrl}/${localStorage.getItem("id")}`)
        .then(res=>res.json())
        .then(data=> 
      {
      data.products.push(idx)
      var newList = {"id":localStorage.getItem("id"), "products":data.products}
      fetch(`${listUrl}/${localStorage.getItem("id")}`,{
        method:"PUT",
        body: JSON.stringify(newList)
      }).then(resp=>resp.json()).then(data1=>console.log(data1))
    })
    }
    else{
      // routing to login page here
      alert("login first")
      navigate("/login")
    }
  }


  return (
    <div className="content">
      {/* <loginContext.Provider value={isLogin}> */}
      <Header/>
      {/* </loginContext.Provider> */}

        {/* <br/><br/><br/> */}
        {/* <h1 className='text-center'>ECommerce App </h1> */}
        {/* <Carousel/>
        <Filter onSelectCat={handleSetCat}/>
        <Products products={filterProducts.length==0?products:filterProducts} onATC={handleATC} onATL={handleATL}/> */}
        {/* <Login onSubmitClick={handleLoginUser}/> */}
        {/* <Register onSubmitClick={handleRegisterUser}/> */}
        {/* <ForgetPassword onForgetPassword={handleForgetPassword}/> */}
        
        {/* <br/><br/><br/> */}
        
        {/* <BrowserRouter>
          
        </BrowserRouter> */}
        <Routes>
        <Route path="/" element={
         <div>

          <Carousel/>
        <Filter onSelectCat={handleSetCat}/>
        <Products products={filterProducts.length==0?products:filterProducts} onATC={handleATC} onATL={handleATL}/>
         </div>
      
      } />
        <Route path="/login" element={<Login onSubmitClick={handleLoginUser}/>} />
        <Route path="/register" element={<Register onSubmitClick={handleRegisterUser}/>} />
        <Route path="/forgetpassword" element={<ForgetPassword onForgetPassword={handleForgetPassword}/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
// export {loginContext};
