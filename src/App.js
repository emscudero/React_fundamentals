import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Header from "./components/site/Header";
import Sidebar from "./components/site/Sidebar";
import Footer from "./components/site/Footer";
import { BrowserRouter as Router } from "react-router-dom";


const App = () => {
  //this is the root component

  return (
    <div>
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
