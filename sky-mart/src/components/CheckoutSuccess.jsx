import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="bg-[#111111] border border-zinc-700 rounded-3xl p-10 max-w-lg w-full text-center">

        <CheckCircle
          size={90}
          className="text-lime-400 mx-auto mb-6"
        />

        <h1 className="text-4xl font-bold text-white">
          Order Placed Successfully!
        </h1>

        <p className="text-zinc-400 mt-5 leading-7">
          Thank you for shopping with <span className="text-lime-400 font-semibold">SkyMart</span>.
          <br />
          Your order has been placed successfully and will be delivered soon.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-3 rounded-xl transition"
        >
          Continue Shopping
        </Link>

      </div>
    </div>
  );
};

export default CheckoutSuccess;