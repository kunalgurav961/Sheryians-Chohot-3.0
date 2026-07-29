import { Search } from "lucide-react";
import { useContext } from "react";
import { SkyMart } from "../context/AppContext";

const SearchFilter = () => {
  const {
    search,
    setSearch,
    category,
    setCategory,
    sortBy,
    setSortBy,
  } = useContext(SkyMart);

  return (
    <div className="max-w-7xl mx-auto px-6 mt-8">
      <div className="bg-[#111111] border border-zinc-700 rounded-2xl p-5 flex flex-col md:flex-row gap-4">

        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl py-3 pl-12 pr-4 text-white outline-none focus:border-lime-400"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
        >
          <option value="all">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
        >
          <option value="default">Sort By</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
          <option value="rating">Highest Rated</option>
        </select>

      </div>
    </div>
  );
};

export default SearchFilter;