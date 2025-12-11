import SocialMedia from "./SocialMedia";
import ContactInfo from "./ContactInfo";
import Middle from "./Middle";
import Navigation from "./Navigation";



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
