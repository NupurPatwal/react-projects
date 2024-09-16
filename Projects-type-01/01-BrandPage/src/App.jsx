// const App = () => {
//   return <div>My first react project.</div>;
// };

// export default App;

// import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <Navigation></Navigation>;
      <Hero />
    </div>
  );
};

export default App;
