import styles from "./Navigation.module.css"

const Navigation = () => {  
  return (
    <nav className={`${styles.Navigation} container`}>
      <div className="nav-logo">
      <img
        src="./images/frame.png"
        alt="do some coding logo"
      />
      </div>
      
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

export default Navigation;
