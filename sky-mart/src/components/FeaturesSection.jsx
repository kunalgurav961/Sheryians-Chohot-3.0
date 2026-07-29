import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders above ₹999.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "100% safe and encrypted payments.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "7-day hassle-free return policy.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We're here whenever you need us.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Why Choose SkyMart?
        </h2>

        <p className="text-zinc-400 mt-3">
          Everything you need for a seamless shopping experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="bg-[#111111] border border-zinc-700 rounded-3xl p-8 text-center hover:border-lime-400 transition"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-lime-400/15 flex items-center justify-center">
                <Icon
                  size={30}
                  className="text-lime-400"
                />
              </div>

              <h3 className="text-white text-xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="text-zinc-400 mt-3">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;