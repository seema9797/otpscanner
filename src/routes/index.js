import React from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../features/home/Navabr";
import Home from '../components/Home.js'
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/Contact';
import Faq from '../components/Faq';
import JoiinUs from '../components/joinUs';
import Services from '../components/Service';
const authProtectedRoutes = [
  
  { path: "/", component: Home },
  { path: "/aboutus", component: AboutUs },
  { path: "/joinus", component: JoiinUs },
  { path: "/services", component: Services },
  { path: "/faq", component: Faq },
  { path: "/contact", component: ContactUs }
];


export { authProtectedRoutes };