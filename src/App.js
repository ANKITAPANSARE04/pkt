import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./comp/Home";
import About from "./comp/About";
import Service from "./comp/Services";
import Ventures from "./comp/Ventures";
import Events from "./comp/Events";
import Blogs from "./comp/Blogs";
import Career from "./comp/Career";
import Contact from "./comp/Contact";
import EloCreators from "./comp/EloCreators";
import Meteor from "./comp/Meteor";
import Fabric from "./comp/Fabric";
import TravelEase from "./comp/TravelEase";
import Piink from "./comp/Piink";
import Golive from "./comp/GoLive";
import Imax from "./comp/ImaxApp";
import Actbadly from "./comp/ActBoldly";
import Webdev from "./comp/Webdev";
import Appdev from "./comp/Appdev";
import Marketing from "./comp/Marketing";
import "./App.css";
import icon from "./img/logo192.png";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" href={icon} />
      </Helmet>
      <Router>
        <Routes>
          {/* Web_Site start */}
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/service/" element={<Service />} />
          <Route path="/venture/" element={<Ventures />} />
          <Route path="/events/" element={<Events />} />
          <Route path="/blogs/" element={<Blogs />} />
          <Route path="/career/" element={<Career />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/v1/" element={<EloCreators />} />
          <Route path="/v2/" element={<Meteor />} />
          <Route path="/v3/" element={<Fabric />} />
          <Route path="/v4/" element={<TravelEase />} />
          <Route path="/v5/" element={<Piink />} />
          <Route path="/v6/" element={<Golive />} />
          <Route path="/v7/" element={<Imax />} />
          <Route path="/v8/" element={<Actbadly />} />
          <Route path="/webdev/" element={<Webdev />} />
          <Route path="/appdev/" element={<Appdev />} />
          <Route path="/marketing/" element={<Marketing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
