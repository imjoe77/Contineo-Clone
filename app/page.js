import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
// import Features from "../Components/Feautures";
import RoleSelection from "./Components/RoleSelection";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
       {/* <Features />  */}
       <CTA />
      <RoleSelection />
      
      <Footer />
    </>
  );
}