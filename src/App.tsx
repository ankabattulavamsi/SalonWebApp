/** @format */

import React, { useEffect } from "react";
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
import CustomerBridalService from "./components/CustomerSalonServices/CustomerBridalService";
import CustomerKidsHair from "./components/CustomerSalonServices/CustomerKidsHair";
import CustomerHairColor from "./components/CustomerSalonServices/CustomerHairColor";
import CustomerFacial from "./components/CustomerSalonServices/CustomerFacial";
import CusstomerSpa from "./components/CustomerSalonServices/CusstomerSpa";
import CustomerSingleServicePage from "./components/CustomerSalonServices/CustomerSingleServicePage";
import { categoryData } from "./utils/data/customer/CustomerData";



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
					<Route path='customer/service/bridal' element={ <CustomerBridalService /> } />
					<Route path='customer/service/kids-haircut' element={ <CustomerKidsHair /> } />
					<Route path='customer/service/hair-colors' element={ <CustomerHairColor /> } />
					<Route path='customer/service/facial' element={ <CustomerFacial /> } />
					<Route path='customer/service/spa' element={ <CusstomerSpa /> } />
					<Route path='customer/service/haircut/haircut-details' element={ <CustomerSingleServicePage /> } />
					<Route path='customer/service/bridal/bridal-details' element={ <CustomerSingleServicePage /> } />
					<Route path='customer/service/kids-haircut/kids-haircut-details' element={ <CustomerSingleServicePage /> } />
					<Route path='customer/service/hair-colors/hair-color-details' element={ <CustomerSingleServicePage /> } />
					<Route path='customer/service/facial/facial-details' element={ <CustomerSingleServicePage /> } />
					<Route path='customer/service/spa/spa-details' element={ <CustomerSingleServicePage /> } />
					{/* Salon Customer */}
				</Routes>
			</ThemeProvider>
		</div>
	);
}

export default App;
