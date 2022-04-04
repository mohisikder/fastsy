import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <header>
            <Header />
          </header>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
