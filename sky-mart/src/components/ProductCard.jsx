import { ShoppingCart, Star } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { SkyMart } from "../context/AppContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(SkyMart);
  return (
    <div className="bg-[#111111] border border-zinc-700 rounded-3xl overflow-hidden hover:border-lime-400 transition-all duration-300 group shadow-lg">

      {/* Clickable Area */}
      <Link to={`/products/${product.id}`}>
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-5">
          <p className="text-sm text-lime-400 capitalize">
            {product.category}
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white line-clamp-2 min-h-[56px]">
            {product.title}
          </h3>

          <div className="flex items-center gap-2 mt-3">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="text-zinc-400 text-sm">
              {product.rating}
            </span>
          </div>
        </div>
      </Link>

      {/* Footer */}
      <div className="px-5 pb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          ${product.price}
        </h2>

        <button
          onClick={() => addToCart(product)}

          className="bg-lime-400 hover:bg-lime-500 active:scale-95 transition-all duration-200 p-3 rounded-xl"
        >
          <ShoppingCart
            size={18}
            className="text-black"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;