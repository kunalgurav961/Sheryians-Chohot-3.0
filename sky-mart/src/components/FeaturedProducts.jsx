import { Star, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 1499,
    rating: 4.8,
    image: "https://picsum.photos/300?random=1",
  },
  {
    id: 2,
    title: "Smart Watch",
    category: "Accessories",
    price: 2999,
    rating: 4.7,
    image: "https://picsum.photos/300?random=2",
  },
  {
    id: 3,
    title: "Running Shoes",
    category: "Fashion",
    price: 1999,
    rating: 4.9,
    image: "https://picsum.photos/300?random=3",
  },
  {
    id: 4,
    title: "Gaming Mouse",
    category: "Electronics",
    price: 999,
    rating: 4.6,
    image: "https://picsum.photos/300?random=4",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold text-white">
            Featured Products
          </h2>

          <p className="text-zinc-400 mt-2">
            Most popular products this week.
          </p>
        </div>

        <button className="border border-zinc-700 text-white px-5 py-2 rounded-xl hover:bg-zinc-800 transition">
          View All
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#111111] border border-zinc-700 rounded-3xl overflow-hidden hover:border-lime-400 transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-60 w-full object-cover"
            />

            <div className="p-5">
              <span className="text-sm text-lime-400">
                {product.category}
              </span>

              <h3 className="text-white font-semibold text-xl mt-2">
                {product.title}
              </h3>

              <div className="flex items-center gap-1 mt-2">
                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span className="text-zinc-400">
                  {product.rating}
                </span>
              </div>

              <div className="flex justify-between items-center mt-5">
                <h2 className="text-2xl font-bold text-white">
                  ₹{product.price}
                </h2>

                <button className="bg-lime-400 hover:bg-lime-500 text-black p-3 rounded-xl transition">
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;    