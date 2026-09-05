// personal navbar: polished with sticky glassmorphism and absolute path links so clicks actually work
import { useState } from "react";
import { toggleTheme } from "@/features/ThemeSlice";
import { Moon, Search, Sun, Github, Sparkles, Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const query = searchQuery.trim().toLowerCase();
    const available = ["button", "card", "modal", "input", "navbar", "carousel", "tooltip", "layout"];
    const match = available.find((item) => item.includes(query)) || "button";
    navigate(`/components/${match}`);
    setSearchQuery("");
  };

  return (
    <nav className="h-16 w-full sticky top-0 z-40 flex items-center justify-between px-6 sm:px-8 border-b border-gray-200 dark:border-zinc-800 bg-[var(--bg-color)]/85 backdrop-blur-md transition-colors">
      <div className="flex items-center gap-8">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 font-black text-2xl tracking-tight cursor-pointer hover:opacity-90 transition select-none"
        >
          <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-base shadow-sm">
            <Sparkles size={18} />
          </span>
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            EaseUi
          </span>
        </div>

        <form onSubmit={handleSearch} className="hidden sm:flex items-center rounded-lg px-3 py-1.5 border border-gray-200 dark:border-zinc-700 bg-gray-50/50 dark:bg-zinc-800/40 focus-within:ring-2 focus-within:ring-indigo-500/20 transition">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search docs (e.g. button, card)..."
            className="ml-2 bg-transparent outline-none text-xs text-[var(--text-color)] placeholder-gray-400 w-48 lg:w-64"
          />
        </form>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
        <button
          onClick={() => navigate("/components/button")}
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          Components
        </button>
        <button
          onClick={() => navigate("/")}
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          Documentation
        </button>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-black dark:hover:text-white transition flex items-center gap-1.5 text-gray-500"
        >
          <Github size={17} />
          <span className="text-xs">GitHub</span>
        </a>

        {/* Theme Toggle Button */}
        <button
          className="cursor-pointer p-2 rounded-lg border border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          onClick={() => dispatch(toggleTheme())}
          aria-label="Toggle light or dark theme"
        >
          {mode === "dark" ? (
            <Sun size={17} className="text-amber-400" />
          ) : (
            <Moon size={17} className="text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Actions */}
      <div className="flex md:hidden items-center gap-2">
        <button
          className="p-2 rounded-lg border border-gray-200 dark:border-zinc-700"
          onClick={() => dispatch(toggleTheme())}
        >
          {mode === "dark" ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-gray-600" />}
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-600 dark:text-gray-300"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full border-b border-gray-200 dark:border-zinc-800 bg-[var(--bg-color)] p-4 flex flex-col gap-3 shadow-xl md:hidden z-50">
          <button
            onClick={() => {
              navigate("/components/button");
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 font-medium hover:text-indigo-600"
          >
            Components
          </button>
          <button
            onClick={() => {
              navigate("/");
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 font-medium hover:text-indigo-600"
          >
            Home / Overview
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
