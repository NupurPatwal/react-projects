// const App = () => {
//   return <div>My first react project.</div>;
// };

// export default App;

import React from "react";

const App = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="images/brand_logo.png" alt="logo" />
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">contact</li>
          </ul>
          <button>login</button>
        </div>
      </nav>
    </div>
  );
};

export default App;
