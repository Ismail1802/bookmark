import React from "react";
import Navbar from "./container/Navbar/Navbar";
import Header from "./container/Header/Header";
import Features from "./container/Features/Features";
import "./styles/styles.css";
import Download from "./container/Download/Download";
import Faq from "./container/Faq/Faq";
import ContactUs from "./container/ConactUs/ContactUs";
import Footer from "./container/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <main style={{ width: "100%" }}>
        <Features />
        <Download />
        <Faq />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default App;
