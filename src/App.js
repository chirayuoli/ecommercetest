import React from "react";
import Footer from "./components/footer";
import HomeBody from "./components/homebody";
import Header from "./components/header";
import "./components/styles/header.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeBody />
      <Footer />
    </div>
  );
}

export default App;
