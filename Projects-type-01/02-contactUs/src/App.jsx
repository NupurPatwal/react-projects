import "./App.css"; // Import your custom CSS file
import Navigation from "./Components/Navigation/Navigation";
import ContactHeader from "./Components/ContHeader/ContactHeader";
import ContactForm from "./Components/ContactForm/ContactForm";
import Button from "./Components/Button/Button";
function App() {
  return (
    <>
      <Navigation></Navigation>
      <main className="main-container">
        <ContactHeader></ContactHeader>
        <ContactForm></ContactForm>
      </main>
    </>
  );
}

export default App;
