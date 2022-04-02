import Home from "./pages/home/Home";
import About from "./pages/about/About";
// import Card from "./components/cards/Card";

import TopBar from "./components/topbar/TopBar";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/contact";
import Blogs from "./components/blogs/Blogs";
import ContactSection from "./components/contactSection/ContactSection";


import SinglePostPage from "./pages/singlePost/SinglePostPage";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Mentor from "./components/joinus/Mentor";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "./context/Context";   //header<about us<images<footer



function App() {
  const { user } = useContext(Context);
  

  
  return (
    <div>
      <TopBar /> 
      {/* <Home/> */}
      
    <Routes>
<<<<<<< HEAD
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        {/* <Route exact path="/card" element={<Card />} /> */}
        <Route exact path="/blogs" element={<Blogs/>} />
        <Route exact path="/post/:postid" element={<SinglePostPage />} />
        <Route exact path="/write" element={user?<Write />:<Register/>} />
        <Route exact path="/settings" element={user?<Settings />:<Register/>} />
        <Route exact path='/login' element={user?<Home/>:<Login />} />
        <Route exact path='/register' element={user ? <Home/>:<Register />} />
        <Route exact path='/contact' element={ <Contact/> } />
=======
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/post/:postid" element={<SinglePostPage />} />
        <Route path="/write" element={user?<Write />:<Register/>} />
        <Route path="/settings" element={user?<Settings />:<Register/>} />
        <Route path='/login' element={user?<Home/>:<Login />} />
        <Route path='/register' element={user ? <Home/>:<Register />} />
        <Route path='/contact' element={ <Contact/> } />
        <Route path='/Mentor' element={ <Mentor/> } />
>>>>>>> 92f5a5ff61b65280e2612c0b8eec8dcaaa98ba71
      </Routes>
      <ContactSection/>
      <Footer/>
      

       </div>
  );
}

export default App;
