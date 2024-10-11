// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
//import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="content">
        <Header/>
        <br/><br/><br/>
        <h1 className='text-center'>ECommerce App </h1>
        <br/><br/><br/>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
