import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './css/fontawesome/all.min.css';
import SlideShow from './components/SlideShow';
import CardBox from './components/CardBox';
import ProductCarousel from './components/ProductCarousel';
import OfferSec from './components/OfferSec';
import CategoryCarousel from './components/CategoryCarousel';
import FeaturedBrand from './components/FeaturedBrand';
import RecentlyViewed from './components/RecentlyViewed';
import CollectionPage from './pages/CollectionPage';
import SingleProductPage from "./pages/SingleProductPage";
import './App.css';
import OrderTracking from './components/OrderTracking';
import UnderPriceSec from './components/UnderPriceSec';
import DealsOfTheDay from './components/DealsOfTheDay';
import MobProductSec from './components/MobProductSec';
import Cart from './components/Cart';
import EmptyCart from './components/EmptyCart';
import Checkout from './components/Checkout';
import SellerPage from './pages/SellerPage';
import CustomerDashboard from './components/CustomerDashboard';
import MyOrderPage from './pages/MyOrderPage';
import CustomerInformationPage from './pages/CustomerInformationPage';
import CustomerAddressPage from './pages/CustomerAddressPage';
import CustomerSavedCard from './pages/CustomerSavedCard';
import AvailableCouponsPage from './pages/AvailableCouponsPage';
import CustomerReviewPage from './pages/CustomerReviewPage';
import AllNotificationsPage from './pages/AllNotificationsPage';
import CustomerWishlistPage from './pages/CustomerWishlistPage';
import OrderStatusPage from './pages/OrderStatusPage';
import MainForm from './components/sellerform/MainForm';
import GoToTop from './components/GoToTop';
import TopScrollBar from './components/TopScrollBar';
import OrderConfirmed from './pages/OrderConfirmed';
import PageNotFound from './pages/PageNotFound';
import SubCategoryPage from './pages/SubCategoryPage';
import SinglePage from './pages/SinglePage';
import CustomerAccountMob from './pages/CustomerAccountMob';

function App() {

  React.useEffect(() => {

    /*
    $(document).ready(function () {
      var $header = $("#navfix");
      var $mobheader = $("#mobnavfix");
      // var $category = $(".myheader-category");
      var $category = $("#root");
      var $headerHeight = $header.innerHeight();
      var $mobheaderHeight = $mobheader.innerHeight();
      if (window.matchMedia("(min-width: 1024px)").matches) {
        $category.css({ "margin-top": $headerHeight });
      } else {
        $category.css({ "margin-top": $mobheaderHeight });
      }

    });
    */

    $(window).scroll(function () {
      if ($(this).scrollTop() > 5) {
        $('#navfix').addClass('fixed-top');
      } else {
        $('#navfix').removeClass('fixed-top');
      }
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('#mobnavfix').addClass('fixed-top');
      } else {
        $('#mobnavfix').removeClass('fixed-top');
      }
    });


    // sidebar fixed
    $(document).ready(function () {
      var $window = $(window);
      var $sidebar = $(".p-side1");
      var $sidedecs = $(".p-side-decs");
      var $sidebarHeight = $sidebar.innerHeight();
      var $footerOffsetTop = $(".scrollend").offset().top;
      var $sidebarOffset = $sidebar.offset();

      $window.scroll(function () {
        if (window.matchMedia("(min-width: 1024px)").matches) {

          if ($window.scrollTop() + $sidebarHeight > $footerOffsetTop) {
            $sidebar.css({ "top": -($window.scrollTop() + $sidebarHeight - $footerOffsetTop) });
          } else {
            $sidebar.css({ "top": "67px", "width": "41%", });
          }
          if ($window.scrollTop() > $sidebarOffset.top) {
            $sidebar.addClass("myfixed");
            $sidedecs.addClass("offset-lg-5");
          } else {
            $sidebar.removeClass("myfixed");
            $sidebar.removeAttr("style");
            $sidedecs.removeClass("offset-lg-5");
          }

        }
      });
    });


    // sidebar fixed
    $(document).ready(function () {
      var $window = $(window);
      var $sidebar2 = $("#sidebar");
      var $sideprod = $(".collection-rside-filter");
      var $sidebarHeight2 = $sidebar2.innerHeight();
      var $footerOffsetTop2 = $(".collection-scroll-end").offset().top;
      var $sidebarOffset2 = $sidebar2.offset();

      $window.scroll(function () {
        if (window.matchMedia("(min-width: 1024px)").matches) {

          if ($window.scrollTop() + $sidebarHeight2 > $footerOffsetTop2) {
            $sidebar2.css({ "top": -($window.scrollTop() + $sidebarHeight2 - $footerOffsetTop2) });
          } else {
            $sidebar2.css({ "top": "67px", "width": "19.5%" });
          }
          if ($window.scrollTop() > $sidebarOffset2.top) {
            $sidebar2.addClass("myfixed");
            $sideprod.css({ "margin-left": "20%", });
          } else {
            $sidebar2.removeClass("myfixed");
            $sidebar2.removeAttr("style");
            $sideprod.removeAttr("style");
          }

        }
      });


    });


  }, []);
  return (
    <>
      <Router>
        <TopScrollBar />
        <NavBar />
        <Routes>
          <Route exact path="/" element={
            <>
              <SlideShow />
              <CardBox />
              <div className='slideshow-bottom'></div>
              <OrderTracking />
              <UnderPriceSec />
              <DealsOfTheDay />
              <MobProductSec productsectitle="Suggested for you" />
              <OfferSec />
              <CategoryCarousel categorysectitle="Top Offers" />
              <CategoryCarousel categorysectitle="Top Deals on Electronics" />
              <ProductCarousel productsectitle="Best Seller" />
              <ProductCarousel productsectitle="New Arrival" />
              <OfferSec />
              <FeaturedBrand />
              <ProductCarousel productsectitle="Best Seller" />
              <ProductCarousel productsectitle="New Arrival" />
              <RecentlyViewed productsectitle="Recently Viewed" />
            </>
          } />
          <Route path="/collections/all" element={
            <CollectionPage />
          } />
          <Route path="/subcategory" element={
            <SubCategoryPage />
          } />
          <Route path="/single-product" element={
            <SingleProductPage />
          } />
          <Route path="/cart" element={
            <Cart />
          } />
          <Route path="/empty-cart" element={
            <EmptyCart />
          } />
          <Route path="/checkout" element={
            <Checkout />
          } />
          <Route path="/order-complete" element={
            <OrderConfirmed />
          } />
          <Route path="/sell-on-topmaybe" element={
            <SellerPage />
          } />
          <Route path="/seller-registration" element={
            <MainForm />
          } />
          <Route path="/customer-dashboard" element={
            <CustomerDashboard />
          } />
          <Route path="/account/orders" element={
            <MyOrderPage />
          } />
          <Route path="/account" element={
            <CustomerInformationPage />
          } />
          <Route path="/my-account" element={
            <CustomerAccountMob />
          } />
          <Route path="/account/address" element={
            <CustomerAddressPage />
          } />
          <Route path="/account/carddetails" element={
            <CustomerSavedCard />
          } />
          <Route path="/account/rewards" element={
            <AvailableCouponsPage />
          } />
          <Route path="/account/reviews" element={
            <CustomerReviewPage />
          } />
          <Route path="/notifications" element={
            <AllNotificationsPage />
          } />
          <Route path="/wishlist" element={
            <CustomerWishlistPage />
          } />
          <Route path="/account/order-status" element={
            <OrderStatusPage />
          } />
          <Route path="/about-us" element={
            <SinglePage title="About Us" />
          } />
          <Route path="/privacy-policy" element={
            <SinglePage title="Privacy Policy" />
          } />
          <Route path="/terms-condition" element={
            <SinglePage title="Terms And Conditions" />
          } />
          <Route path="/shipping-policy" element={
            <SinglePage title="Shipping Policy" />
          } />
          <Route path="/return-policy" element={
            <SinglePage title="Return Policy" />
          } />
          <Route path="/refund-policy" element={
            <SinglePage title="Refund Policy" />
          } />
          <Route path="*" element={
            <PageNotFound />
          } />
        </Routes>
        <Footer />
        <GoToTop />
      </Router>
    </>
  );
}

export default App;
