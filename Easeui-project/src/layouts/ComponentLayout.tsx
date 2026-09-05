// sidebar layout: fixed relative path stacking bug so clicking card from button doesn't take us to narnia
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Menu, X, Sparkles } from "lucide-react";

type Props = {};

const ComponentLayout = ({}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const components = [
    "Button",
    "Card",
    "Modal",
    "Input",
    "Navbar",
    "Carousel",
    "Tooltip",
    "Layout",
  ];

  const filteredComponents = components.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex min-h-[calc(100vh-4rem)] text-[var(--text-color)]">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden backdrop-blur-xs"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          w-64 p-6 flex flex-col
          border-r border-gray-200 dark:border-zinc-800
          fixed md:static top-0 left-0 h-full z-30
          bg-[var(--bg-color)]
          transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          md:translate-x-0
        `}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-indigo-500" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Components
            </h2>
          </div>
          <button
            className="md:hidden text-gray-500 hover:text-black dark:hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick filter input */}
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter components..."
          className="w-full mb-4 px-3 py-1.5 text-xs rounded-md border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/50 outline-none focus:ring-1 focus:ring-indigo-500 transition"
        />

        <ul className="flex flex-col gap-1.5 overflow-y-auto">
          {filteredComponents.map((item) => {
            const path = `/components/${item.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <li
                onClick={() => {
                  navigate(path);
                  setSidebarOpen(false);
                }}
                key={item}
                className={`cursor-pointer text-sm font-medium px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between ${
                  isActive
                    ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800/60 hover:text-black dark:hover:text-white"
                }`}
              >
                <span>{item}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto p-4 md:p-8">
        <button
          className="md:hidden mb-4 p-2 rounded-md border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-200 flex items-center gap-2 text-sm"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={18} />
          <span>Menu</span>
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default ComponentLayout;
