import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import Umra from "../pages/umra/Umra";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blogs";
import PageNotFound from "../pages/PageNotFound";
import TourPackage from "../components/tourPackage/TourPackage";
import ReadArticle from "../components/readArticle/ReadArticle";
import PackagePage from "../pages/packagePage/PackagePage";
import VideoContent from "../pages/videoContent/VideoContent";
import ReadVideo from "../components/readVideo/ReadVideo";
import OpinionPage from "../pages/opinion/OpinionPage";

function Routes() {
  return createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<RootLayout />}
          errorElement={<PageNotFound />}
        >
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/umra" element={<Umra />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/opinion" element={<OpinionPage />} />
          <Route path="/packages" element={<PackagePage />} />
          <Route path="/tour-package" element={<PackagePage />} />
          <Route path="/main/post/" element={<Blog />} />
          <Route path="/main/post/:id" element={<ReadArticle />} />
          <Route path="/packages/:id" element={<TourPackage />} />
          <Route path="/video-content" element={<VideoContent />} />
          <Route path="/video-content/:id" element={<ReadVideo />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </>
    )
  );
}

export default Routes;
