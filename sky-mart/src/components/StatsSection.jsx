import { Package, TrendingUp, Star, Tag } from "lucide-react";

const stats = [
  {
    icon: Package,
    value: "0",
    title: "Cart Items",
    subtitle: "In your bag",
    color: "bg-lime-400/15 text-lime-400",
  },
  {
    icon: TrendingUp,
    value: "$0.00",
    title: "Cart Value",
    subtitle: "Ready to checkout",
    color: "bg-blue-500/15 text-blue-400",
  },
  {
    icon: Star,
    value: "5",
    title: "Top Products",
    subtitle: "Highly rated",
    color: "bg-yellow-500/15 text-yellow-400",
  },
  {
    icon: Tag,
    value: "6",
    title: "Categories",
    subtitle: "To explore",
    color: "bg-purple-500/15 text-purple-400",
  },
];

const StatsSection = () => {
  return (
    <section className="max-w-full mx-auto px-6 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-[#111111] border border-zinc-700 rounded-3xl p-6 hover:border-lime-400 transition"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}
              >
                <Icon size={28} />
              </div>

              <h2 className="text-4xl font-bold text-white mt-5">
                {item.value}
              </h2>

              <p className="text-xl text-white mt-1">
                {item.title}
              </p>

              <p className="text-zinc-500 mt-1">
                {item.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;