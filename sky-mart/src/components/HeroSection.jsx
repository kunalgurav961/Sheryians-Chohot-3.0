import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { SkyMart } from "../context/AppContext";

const HeroSection = () => {
  const { currentUser, navigate } = useContext(SkyMart);

  return (
    <section className="max-w-full mx-auto pt-2">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-700 bg-[#111111]">

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative grid lg:grid-cols-2 gap-10 p-14">

          {/* Left */}
          <div className="space-y-8">

            <p className="uppercase tracking-widest text-lime-400 font-semibold">
              Good Afternoon 👋
            </p>

            <div>
              <h1 className="text-6xl font-bold text-white leading-tight">
                Welcome back,
              </h1>

              <h1 className="text-6xl font-bold text-lime-400">
                {currentUser?.name}!
              </h1>
            </div>

            <p className="text-zinc-400 text-xl max-w-xl">
              Discover today's picks — hand-curated products across
              electronics, fashion, furniture and more.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => navigate("/products")}
                className="flex items-center gap-2 bg-lime-400 text-black font-semibold px-8 py-4 rounded-xl hover:scale-105 transition"
              >
                Shop Now
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate("/products")}
                className="border border-zinc-700 text-white px-8 py-4 rounded-xl hover:bg-zinc-800 transition"
              >
                View All Products
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end items-center gap-6">

            <div className="space-y-5">

              <div className="bg-lime-400/15 border border-lime-400/30 rounded-2xl p-8 w-48 text-center">
                <h2 className="text-5xl font-bold text-lime-400">
                  20+
                </h2>

                <p className="text-zinc-300 mt-2">
                  Products Available
                </p>
              </div>

              <div className="border border-zinc-500 rounded-2xl p-8 w-48 text-center">
                <h2 className="text-5xl font-bold text-white">
                  Free
                </h2>

                <p className="text-zinc-400 mt-2">
                  Delivery on $999+
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;