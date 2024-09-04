import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="py-3 bg-slate-500">
        <div className="container flex justify-between">
          <div className="logo">
            <a href="#">
              <img
                src="https://devzone.com.bd/wp-content/uploads/2024/08/office-devzone-logo2.png"
                alt=""
              />
            </a>
          </div>
          <div className="menu">
            <ul className="flex items-center h-full">
              <li>
                <Link className="py-3 px-3 text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="py-3 px-3 text-white" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="py-3 px-3 text-white" to="/team">
                  Team
                </Link>
              </li>
              <li>
                <Link className="py-3 px-3 text-white" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="py-3 px-3 text-white" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
