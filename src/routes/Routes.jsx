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
import Login from '../components/admin/login/Login';
import PrivateRoute from './../components/admin/privateRoute/PrivateRoute';
import AdminRoutes from './AdminRoutes';
import ScrollToTop from '../helpers/ScrollToTop';
import ReadVideo from '../components/readVideo/ReadVideo';
import OpinionPage from '../pages/opinion/OpinionPage';
// import AdminLayout from '../layouts/AdminLayout';

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
					<Route path='/opinion' element={<OpinionPage />} />
					<Route path='/packages' element={<PackagePage />} />
					<Route path='/tour-package' element={<PackagePage />} />
					<Route path='/main/post/' element={<Blog />} />
					<Route path='/main/post/:id' element={<ReadArticle />} />
					<Route path='/packages/:id' element={<TourPackage />} />
					<Route path='/video-content' element={<VideoContent />} />
					<Route path='/video-content/:id' element={<ReadVideo />} />
					<Route path='*' element={<PageNotFound />} />
				</Route>
				{/* <Route path='/login' element={<Login />} /> */}
				{/* {AdminRoutes} */}
			</>
		)
	);
}

export default Routes;
