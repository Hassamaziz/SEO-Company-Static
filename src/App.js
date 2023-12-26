
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import Header from './components/Header/Header';
import { Herosection } from './Pages/Landing Page/Herosection';
import Marketing from './Pages/Marketing/Marketing';
import Testimonial from './Pages/Testimonials/Testimonial';
import PricingSection from './Pages/Pricing Page/PricingSection';
import Call from './Pages/Call page/Call';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <> 

<Header/>
<Herosection/>
<Marketing />
<Testimonial />
<PricingSection />
<Call />
<Footer/>
     </>
  );
}

export default App;
