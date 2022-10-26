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
import CustomerHairService from "./components/CustomerSalonServices/CustomerHairService";
function App() {
	return (
		<div>
			<ThemeProvider theme={theme}>
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
					<Route path='/customer/service' element={<CustomerSevice />} />
					<Route path='customer/service/haircut' element={ <CustomerHairService /> } />
					{/* Salon Customer */}
				</Routes>
			</ThemeProvider>
		</div>
	);
}

export default App;
