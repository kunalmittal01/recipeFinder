import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home'
import Details from '../pages/Details';
import Fav from '../pages/Fav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contacts from '../pages/Contacts';
import About from '../pages/About';
function App() {
  return (
    <>
    <ToastContainer />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/favorities" element={<Fav />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
