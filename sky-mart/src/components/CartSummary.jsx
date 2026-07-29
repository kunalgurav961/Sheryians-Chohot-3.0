import { useContext } from "react";
import { SkyMart } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
    const navigate = useNavigate();
    const { cart, setCart } = useContext(SkyMart);

    const handleCheckout = () => {
        if (cart.length === 0) return;

        setCart([]);
        localStorage.removeItem("cart");

        navigate("/checkout-success");
    };
    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const shipping = subtotal > 0 ? 20 : 0;

    const total = subtotal + shipping;

    return (
        <div className="bg-[#111111] border border-zinc-700 rounded-2xl p-6 h-fit sticky top-24">

            <h2 className="text-2xl font-bold text-white mb-6">
                Order Summary
            </h2>

            <div className="space-y-4">

                <div className="flex justify-between text-zinc-400">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-zinc-400">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                </div>

                <hr className="border-zinc-700" />

                <div className="flex justify-between text-2xl font-bold text-white">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>

            </div>

            <button className="mt-8 w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-4 rounded-xl transition"

            onClick={handleCheckout}
            >
                Proceed to Checkout
            </button>

        </div>
    );
};

export default CartSummary;