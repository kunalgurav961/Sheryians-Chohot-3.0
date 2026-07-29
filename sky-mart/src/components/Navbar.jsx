import { Link } from "react-router-dom";
import { ShoppingCart, LogOut, Zap } from "lucide-react";
import { useContext } from "react";
import { SkyMart } from "../context/AppContext";

const Navbar = () => {
  const {
    currentUser,
    setCurrentUser,
    setIsLoggedIn,
    navigate,
    cart
  } = useContext(SkyMart);

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);

    localStorage.removeItem("currentUser");
    localStorage.setItem("isLoggedIn", JSON.stringify(false));

    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0E0E0E] border-b border-zinc-700">
      <div className="max-w-full mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-lime-400 flex items-center justify-center">
            <Zap size={20} className="text-black fill-black" />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-zinc-400 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-lime-400 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              className="hover:text-lime-400 transition"
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-lime-400 transition"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* User */}
          <div className="flex items-center gap-3 border border-zinc-700 rounded-xl px-3 py-2">
            <div className="w-9 h-9 rounded-lg bg-lime-400 text-black font-bold flex items-center justify-center">
              {currentUser?.name?.charAt(0).toUpperCase()}
            </div>

            <span className="text-white hidden sm:block">
              {currentUser?.name}
            </span>
          </div>

          {/* Cart */}
          <button
            onClick={() => navigate("/cart")}
            className="w-12 h-12 rounded-xl border border-zinc-700 text-white hover:bg-zinc-800 transition flex items-center justify-center relative"
          >
            <ShoppingCart size={22} />
            {Object.keys(cart).length > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-lime-400 text-black text-xs flex items-center justify-center font-bold">
                {Object.keys(cart).length}
              </span>
            )}
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-12 h-12 rounded-xl border border-zinc-700 text-white hover:bg-red-600 transition flex items-center justify-center"
          >
            <LogOut size={20} />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;