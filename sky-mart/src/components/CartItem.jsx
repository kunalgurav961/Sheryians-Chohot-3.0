import { Minus, Plus, Trash2 } from "lucide-react";
import { useContext } from "react";
import { SkyMart } from "../context/AppContext";

const CartItem = ({ item }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(SkyMart);

  return (
    <div className="bg-[#111111] border border-zinc-700 rounded-2xl p-5 flex gap-5">

      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-32 h-32 rounded-xl object-cover"
      />

      <div className="flex-1">

        <h2 className="text-xl font-semibold text-white">
          {item.title}
        </h2>

        <p className="text-lime-400 capitalize">
          {item.category}
        </p>

        <h3 className="text-2xl font-bold text-white mt-3">
          ${item.price}
        </h3>

        <div className="flex items-center gap-3 mt-5">

          <button
            onClick={() => decreaseQuantity(item.id)}
            className="bg-zinc-800 p-2 rounded-lg hover:bg-zinc-700"
          >
            <Minus size={18} />
          </button>

          <span className="text-xl font-semibold text-white">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="bg-zinc-800 p-2 rounded-lg hover:bg-zinc-700"
          >
            <Plus size={18} />
          </button>

        </div>

      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-400"
      >
        <Trash2 />
      </button>

    </div>
  );
};

export default CartItem;