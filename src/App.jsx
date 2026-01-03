import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Middle from "./components/Middle";
import ContactInfo from "./components/ContactInfo";
import SocialMedia from "./components/SocialMedia";
import Works from "./components/Works";

function Home() {
  return (
    <>
      <Middle />
      <ContactInfo />
      <SocialMedia />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
