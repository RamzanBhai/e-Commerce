import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 py-8 text-white sm:px-6 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold">e-Shop</h3>
          <p className="mt-4">
            Your one-step for all your needs. Shop with use and experience the
            best online shopping experiences.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4>Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div >
          <h4 className="text-lg font-semibold">Follow us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
          </div>
          <form className="mt-8 flex w-full max-w-md flex-col items-stretch sm:flex-row">
            <input type="email" placeholder="Enter an email" className="min-w-0 flex-1 rounded-t-lg border border-gray-600 bg-gray-800 p-2 sm:rounded-l-lg sm:rounded-r-none"/>
            <button className="rounded-b-lg border border-gray-600 bg-red-600 px-4 py-2 text-white sm:rounded-r-lg sm:rounded-l-none">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 ">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p>&copy; 2026 e-Shop All rights reserved</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-end">
            <a href="" className="hover:underline">Privacy policy</a>
            <a href="" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
