import "./App.css"; // Import your custom CSS file
import Navigation from "./Components/Navigation/Navigation";
import ContactHeader from "./Components/ContHeader/ContactHeader";
import ContactForm from "./Components/ContactForm/ContactForm";
function App() {
  return (
    <>
      <Navigation></Navigation>
      <ContactHeader></ContactHeader>
      <ContactForm></ContactForm>
    </>
  );
}

export default App;
