const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <img
            src="./images/frame.png"
            alt="Navigation- image"
          />

          <div
            className="nav-bar all-content h-72px w-1440px"
            id="nav">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
