import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { SkyMart } from "../context/AppContext";
import Navbar from "../components/Navbar";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(SkyMart);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <h1 className="text-center text-3xl mt-10">
        Product Not Found
      </h1>
    );
  }

  return (
    <div className="bg-[#111111] h-full">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-12 ">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Image */}
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full rounded-3xl"
            />
          </div>

          {/* Details */}
          <div>

            <p className="text-lime-400 uppercase">
              {product.category}
            </p>

            <h1 className="text-5xl font-bold text-white mt-3">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 mt-4">
              <Star
                className="fill-yellow-400 text-yellow-400"
              />
              <span className="text-zinc-300">
                {product.rating}
              </span>
            </div>

            <h2 className="text-4xl font-bold text-lime-400 mt-6">
              ${product.price}
            </h2>

            <p className="text-zinc-400 mt-6 leading-8">
              {product.description}
            </p>

            <p className="text-zinc-300 mt-6">
              Brand :
              <span className="font-semibold">
                {" "}
                {product.brand}
              </span>
            </p>

            <p className="text-zinc-300 mt-2">
              Stock :
              <span className="font-semibold">
                {" "}
                {product.stock}
              </span>
            </p>

            <button className="mt-10 bg-lime-400 text-black px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-lime-500 transition">
              <ShoppingCart size={20} />
              Add To Cart
            </button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;