import SocialMedia from "./components/SocialMedia";
import ContactInfo from "./components/ContactInfo";
import Middle from "./components/Middle";
import Navigation from "./components/Navigation";



function App() {
  return (
    <div className="app">
      <Navigation />
      <Middle />
      <ContactInfo />
      <SocialMedia />
    </div>
  );
}

export default App;
