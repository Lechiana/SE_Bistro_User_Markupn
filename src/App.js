import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar/Navbar2";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import Popup from "./pages/Popup";
import Editpersonal from "./pages/Editpersonal";
import Editaddress from "./pages/Editaddress";
import Editpassword from "./pages/Editpassword";
import Address from "./pages/Address";
import Track1 from "./pages/Track1";
import Order from "./pages/Order";
import Food from "./pages/Food";
import Payment from "./pages/Payment";
import Editpass from "./pages/Editpass";
import Managefood from "./pages/Managefood";
import Track2 from "./pages/Track2";
import Track3 from "./pages/Track3";
import Track4 from "./pages/Track4";
import Newpassword from "./pages/Newpassword";
import Confirm from "./pages/Confirmemail";
import OTP from "./pages/OTP";
import Manageusers from "./pages/Manageusers";
import UserAdmin from "./pages/UserAdmin";
import Editfood from "./pages/Editfood";
import Addfood from "./pages/Addfood";
import Confirmorders from "./pages/Confirmorders";
import History from "./pages/History";
import Receipt from "./pages/Receipt";
import ConfirmOrder from "./pages/ConfirmOrder";
import AllCoupons from "./pages/AllCoupons";
import Recoveremail from "./pages/Recoveremail";
import Confirmemail from "./pages/Confirmemail";
// import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Cart" element={<Basket />} />
        <Route path="/Popup" element={<Popup />} />
        <Route path="/Editpersonal" element={<Editpersonal />} />
        <Route path="/Editaddress" element={<Editaddress />} />
        <Route path="/Editpassword" element={<Editpassword />} />
        <Route path="/Address" element={<Address />} />
        <Route path="/Track1" element={<Track1 />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Track2" element={<Track2 />} />
        <Route path="/Track3" element={<Track3 />} />
        <Route path="/Track4" element={<Track4 />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Editpass" element={<Editpass />} />
        <Route path="/Managefood" element={<Managefood />} />
        <Route path="/Newpass" element={<Newpassword />} />
        <Route path="/Confirm" element={<Confirm />} />
        <Route path="/OTP" element={<OTP />} />
        <Route path="/Manageusers" element={<Manageusers />} />
        <Route path="/User" element={<UserAdmin />} />
        <Route path="/Confirmorders" element={<Confirmorders />} />
        <Route path="/Confirmemail" element={<Confirmemail />} />
        <Route path="/Recoveremail" element={<Recoveremail />} />

        <Route path="/Editfood" element={<Editfood />} />
        <Route path="/Addfood" element={<Addfood />} />
        <Route path="/History" element={<History />} />
        <Route path="/Receipt" element={<Receipt />} />
        <Route path="/ConfirmOrder" element={<ConfirmOrder />} />
        <Route path="/AllCoupons" element={<AllCoupons />} />
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
