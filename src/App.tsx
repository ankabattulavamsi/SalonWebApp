/** @format */

import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme/Theme";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import LandingPageNavigation from "./routes/LandingPageNavigation/LandingPageNavigation";
import SalonPartner from "./routes/SalonPartner/SalonPartner";

import "./App.css";
import Nopage from "./routes/Nopage/Nopage";
import SpecialistTeam from "./components/OurSpecialists/SpecialistTeam";
import GallerySalon from "./components/GallerySalonOwner/Gallery.Salon";
import OffersSalon from "./components/OffersSection/OffersSalon";
import SalonBlogs from "./components/OurBlogs/SalonBlogs";
import SalonAllCategory from "./components/Categories/SalonAllCategory";
import BookingsMainPage from "./components/BookingsSection/BookingsMainPage/BookingsMainPage";
import SalonOwnerPage from "./components/SalonOwnerProfile/SalonOwnerPage";
import Customer from "./components/customer/Customer";
import CustomerSevice from "./components/CusomerServicePage/CustomerSevice";

import { categoryData } from "./utils/data/customer/CustomerData";

import SalonNearByPage from "./routes/SalonNearByPage/SalonNearByPage";
import CustomerHairService from "./components/CustomerSalonServices/CustomerAllService";
import CustomerSingleServicePage from "./components/CustomerSalonServices/CustomerSingleServicePage";
import CartItemsList from "./components/CustomerCartItems/CartItemsList";
import AppointmentPage from "./components/AppointmentPage/AppointmentPage";
import CustomerCatagory from "./components/customer/CustomerCatagory";
import CustomerCategories from "./components/CusomerServicePage/CustomerCategories";
import { ToastContainer } from "react-toastify";
import SalonNearByMainPage from "./routes/SalonNearByPage/SalonNearByMainPage";
import CustomerBlogMainPage from "./components/OurBlogs/CustomerBlogMainPage/CustomerBlogMainPage";
import SalonCustomerPage from "./components/SalonOwnerProfile/SalonCustomerPage";
import CustomerAllService from "./components/CustomerSalonServices/CustomerAllService";
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          {/*Guest Flow*/}
          <Route path="/" element={<LandingPageNavigation />}>
            <Route index element={<HomePage />} />
          </Route>
          {/*Guest Flow*/}

          {/* Salon Partners */}
          <Route path="salon" element={<SalonPartner />} />
          <Route path="salon/owner" element={<SalonOwnerPage />} />

          <Route path="salon/offers" element={<OffersSalon />} />
          <Route path="salon/gallery" element={<GallerySalon />} />
          <Route path="salon/team" element={<SpecialistTeam />} />
          <Route path="salon/blog" element={<SalonBlogs />} />
          <Route path="salon/booking" element={<BookingsMainPage />} />
          <Route path="salon/category" element={<SalonAllCategory />} />
          <Route path="/*" element={<Nopage />} />
          {/* Salon Partners */}

          {/* Salon Customer */}
          <Route path="customer" element={<Customer />} />
          <Route path="customer/profile" element={<SalonCustomerPage />} />
          <Route path="customer/cart-items" element={<CartItemsList />} />
          <Route path="/customer/service" element={<CustomerSevice />} />
          <Route path="/customer/category" element={<CustomerCategories />} />
          <Route
            path="/customer/category/:title"
            element={<CustomerAllService />}
          />
          <Route
            path="customer/category/:title/:title-details"
            element={<CustomerSingleServicePage />}
          />
          <Route path="/customer/salonNearby" element={<SalonNearByPage />} />
          <Route path="/customer/nearby" element={<SalonNearByMainPage />} />

          <Route path="customer/blog" element={<CustomerBlogMainPage />} />
          <Route path="customer/appointment" element={<AppointmentPage />} />

          {/* Salon Customer */}
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
