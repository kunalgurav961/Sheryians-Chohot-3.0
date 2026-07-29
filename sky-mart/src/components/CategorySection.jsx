import {
  Laptop,
  Shirt,
  Sofa,
  Smartphone,
  Watch,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    title: "Electronics",
    icon: Laptop,
    items: "120+ Products",
  },
  {
    title: "Fashion",
    icon: Shirt,
    items: "85+ Products",
  },
  {
    title: "Furniture",
    icon: Sofa,
    items: "40+ Products",
  },
  {
    title: "Mobiles",
    icon: Smartphone,
    items: "60+ Products",
  },
  {
    title: "Accessories",
    icon: Watch,
    items: "35+ Products",
  },
  {
    title: "Beauty",
    icon: Sparkles,
    items: "50+ Products",
  },
];

const CategorySection = () => {
  return (
    <section className="max-w-full mx-auto px-10 py-16">
      {/* Heading */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold text-white">
            Shop by Category
          </h2>

          <p className="text-zinc-400 mt-2">
            Browse products from your favorite categories.
          </p>
        </div>

        <button className="border border-zinc-700 px-5 py-2 rounded-xl text-white hover:bg-zinc-800 transition">
          View All
        </button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <div
              key={index}
              className="bg-[#111111] border border-zinc-700 rounded-3xl p-6 text-center cursor-pointer hover:border-lime-400 hover:-translate-y-1 transition duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-lime-400/15 flex items-center justify-center">
                <Icon
                  size={30}
                  className="text-lime-400"
                />
              </div>

              <h3 className="text-white font-semibold text-lg mt-5">
                {category.title}
              </h3>

              <p className="text-zinc-500 text-sm mt-1">
                {category.items}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;