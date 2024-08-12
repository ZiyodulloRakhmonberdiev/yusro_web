// src/routes/Routes.js
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/home/Home';
import AboutUs from '../pages/aboutUs/AboutUs';
import Haj from '../pages/haj/Haj';
import Umra from '../pages/umra/Umra';
import Contact from '../pages/contact/Contact';
import Blog from '../pages/blog/Blogs';
import PageNotFound from '../pages/PageNotFound';
import TourPackage from '../components/tourPackage/TourPackage';
import ReadArticle from '../components/readArticle/ReadArticle';
import PackagePage from '../pages/packagePage/PackagePage';
import VideoContent from '../pages/videoContent/VideoContent';
import AdminLayout from '../layouts/AdminLayout';
import Login from '../components/admin/login/Login';
import PrivateRoute from './../components/admin/privateRoute/PrivateRoute';
import AdminRoutes from './AdminRoutes';

function Routes() {
	return createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<RootLayout />} errorElement={<PageNotFound />}>
					<Route index element={<Home />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/haj' element={<Haj />} />
					<Route path='/umra' element={<Umra />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/packages' element={<PackagePage />} />
					<Route path='/article/:id' element={<ReadArticle />} />
					<Route path='/tour-package/:id' element={<TourPackage />} />
					<Route path='/video-content' element={<VideoContent />} />
					<Route path='*' element={<PageNotFound />} />
				</Route>
				<Route path='/login' element={<Login />} />
				{AdminRoutes}
			</>
		)
	);
}

export default Routes;
