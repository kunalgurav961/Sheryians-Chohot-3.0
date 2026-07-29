import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { useContext } from "react";
import { SkyMart } from "../context/AppContext";

const Cart = () => {
  const { cart } = useContext(SkyMart);

  return (
    <div className="bg-[#111111]">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-white mb-8">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl text-zinc-400">
              Your cart is empty 🛒
            </h2>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>

            <CartSummary />
          </div>
        )}

      </section>
    </div>
  );
};

export default Cart;