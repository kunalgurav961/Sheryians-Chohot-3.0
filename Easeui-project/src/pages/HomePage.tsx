// homepage: upgraded the color palette so hard it feels like a $100k startup landing page
import { useState } from "react";
import { useNavigate } from "react-router";
import { 
  ArrowRight, 
  Copy, 
  Check, 
  Sparkles, 
  Zap, 
  Layers, 
  Palette, 
  ShieldCheck, 
  Sliders 
} from "lucide-react";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { FloatingLabelInput } from "@/components/Input/FloatingLabelInput";

type Props = {};

const HomePage = ({}: Props) => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const installCommand = "npm install dev-ease-ui";

  const copyInstall = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const featureList = [
    {
      icon: <Zap className="text-amber-500 dark:text-amber-400" size={20} />,
      bg: "bg-amber-50 dark:bg-amber-950/40 border-amber-200/60 dark:border-amber-800/40",
      title: "GSAP Physics Animations",
      description: "Smooth entrance and hover micro-animations crafted with GreenSock animation engine.",
    },
    {
      icon: <Layers className="text-indigo-500 dark:text-indigo-400" size={20} />,
      bg: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200/60 dark:border-indigo-800/40",
      title: "Class Variance Authority",
      description: "Type-safe, composable component variants built for scale and seamless customization.",
    },
    {
      icon: <Palette className="text-pink-500 dark:text-pink-400" size={20} />,
      bg: "bg-pink-50 dark:bg-pink-950/40 border-pink-200/60 dark:border-pink-800/40",
      title: "Dark & Light Mode Ready",
      description: "Built-in theme management powered by Redux Toolkit with silky CSS variable transitions.",
    },
    {
      icon: <ShieldCheck className="text-emerald-500 dark:text-emerald-400" size={20} />,
      bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/60 dark:border-emerald-800/40",
      title: "Radix UI Primitives",
      description: "Accessible slot delegation allowing components to render as custom links or wrappers.",
    },
    {
      icon: <Sliders className="text-sky-500 dark:text-sky-400" size={20} />,
      bg: "bg-sky-50 dark:bg-sky-950/40 border-sky-200/60 dark:border-sky-800/40",
      title: "Production Ready",
      description: "Tested bundle with TypeScript declaration maps and pure tree-shakeable ES modules.",
    },
    {
      icon: <Sparkles className="text-purple-500 dark:text-purple-400" size={20} />,
      bg: "bg-purple-50 dark:bg-purple-950/40 border-purple-200/60 dark:border-purple-800/40",
      title: "Plug & Play",
      description: "Drop components directly into any modern Vite, Next.js, or React 18/19 project.",
    },
  ];

  return (
    <div className="relative min-h-screen space-y-24 py-12 px-4 sm:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Ambient background glow decoration */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-pink-500/15 blur-3xl -z-10 rounded-full dark:from-indigo-500/20 dark:via-purple-500/15 dark:to-pink-500/20" />

      {/* Hero Section */}
      <section className="text-center space-y-8 pt-8 sm:pt-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800/70 bg-indigo-50/90 dark:bg-indigo-950/50 text-xs font-semibold text-indigo-700 dark:text-indigo-300 shadow-xs animate-fadeIn">
          <Sparkles size={14} className="text-indigo-600 dark:text-indigo-400" />
          <span>EaseUI v1.0 Released</span>
          <span className="text-indigo-200 dark:text-indigo-800">•</span>
          <span className="text-gray-600 dark:text-gray-300 font-normal">Animated React Components</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1] text-zinc-950 dark:text-white">
          Build modern interfaces with{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent">
            fluid animation.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          A modern, accessible UI library packed with interactive GSAP micro-animations, customizable Tailwind variants, and plug-and-play components.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            onClick={() => navigate("/components/button")}
            variant="primary"
            size="lg"
            hoverAnimation="scale"
            className="shadow-md shadow-indigo-500/20 text-base"
          >
            <span>Explore Components</span>
            <ArrowRight size={18} className="ml-2" />
          </Button>

          <div
            onClick={copyInstall}
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 font-mono text-sm cursor-pointer hover:border-gray-300 dark:hover:border-zinc-700 transition shadow-xs select-none"
          >
            <span className="text-indigo-500 dark:text-indigo-400">$</span>
            <span className="text-zinc-800 dark:text-zinc-200">{installCommand}</span>
            <span className="text-zinc-400 hover:text-zinc-700 dark:hover:text-white">
              {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Playground Preview Showcase */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
            Interactive Live Showcase
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Hover and click elements below to see GSAP physics in action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Buttons */}
          <div className="p-6 rounded-2xl border border-gray-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
                Button Physics
              </span>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white">Hover & Click Motion</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Elastic bounces, jiggles, and smooth scale physics.</p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="primary" size="sm" hoverAnimation="jiggle">Jiggle</Button>
              <Button variant="secondary" size="sm" hoverAnimation="bounce">Bounce</Button>
              <Tooltip content="Nice Tooltip Pop!" position="top">
                <Button variant="outline" size="sm">Hover Me</Button>
              </Tooltip>
            </div>
          </div>

          {/* Card 2: 3D Animated Card */}
          <div className="p-6 rounded-2xl border border-gray-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase text-purple-600 dark:text-purple-400 tracking-wider">
                3D Depth
              </span>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white">Perspective Card</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Subtle floating layers responding to cursor interaction.</p>
            </div>
            <Card
              title="Modern Card"
              description="Hover to see 3D perspective shift."
              variant="outline"
              size="sm"
              hoverAnimation="float3D"
              className="w-full"
            />
          </div>

          {/* Card 3: Inputs & Form */}
          <div className="p-6 rounded-2xl border border-gray-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase text-pink-600 dark:text-pink-400 tracking-wider">
                Animated Forms
              </span>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white">Floating Label</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Clean input transitions with active focus indicators.</p>
            </div>
            <div className="w-full">
              <FloatingLabelInput
                label="Your Username"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Engineered for developers, designed for delight.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Everything you need to build stunning, polished, and responsive web applications without the boilerplate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-gray-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xs hover:border-indigo-400/50 dark:hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 transition duration-200 space-y-3"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.bg}`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start Code Block */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-950 text-white p-6 sm:p-10 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Quick Start Example</h3>
            <p className="text-zinc-400 text-sm">Import easeui into any React component and start building</p>
          </div>
          <Button
            onClick={() => navigate("/components/button")}
            variant="secondary"
            size="sm"
          >
            Read All Docs
          </Button>
        </div>

        <pre className="font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto p-2 leading-relaxed">
          <code>
            <span className="text-purple-400">import</span> {"{ "}
            <span className="text-amber-300">Button</span>,{" "}
            <span className="text-amber-300">Card</span>,{" "}
            <span className="text-amber-300">Tooltip</span>
            {" }"} <span className="text-purple-400">from</span>{" "}
            <span className="text-emerald-400">"dev-ease-ui"</span>;{"\n"}
            <span className="text-purple-400">import</span>{" "}
            <span className="text-emerald-400">"dev-ease-ui/style.css"</span>;{"\n\n"}
            <span className="text-purple-400">export default function</span>{" "}
            <span className="text-blue-400">App</span>() {"{\n"}
            {"  "}<span className="text-purple-400">return</span> ({"\n"}
            {"    "}&lt;<span className="text-indigo-400">div</span> <span className="text-sky-300">className</span>=<span className="text-emerald-400">"p-8 space-y-4"</span>&gt;{"\n"}
            {"      "}&lt;<span className="text-amber-300">Tooltip</span> <span className="text-sky-300">content</span>=<span className="text-emerald-400">"Click to submit!"</span>&gt;{"\n"}
            {"        "}&lt;<span className="text-amber-300">Button</span> <span className="text-sky-300">variant</span>=<span className="text-emerald-400">"primary"</span> <span className="text-sky-300">hoverAnimation</span>=<span className="text-emerald-400">"jiggle"</span>&gt;{"\n"}
            {"          "}Get Started{"\n"}
            {"        "}&lt;/<span className="text-amber-300">Button</span>&gt;{"\n"}
            {"      "}&lt;/<span className="text-amber-300">Tooltip</span>&gt;{"\n"}
            {"    "}&lt;/<span className="text-indigo-400">div</span>&gt;{"\n"}
            {"  "});{"\n"}
            {"}"}
          </code>
        </pre>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-zinc-800 pt-8 pb-12 flex flex-col sm:flex-row items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-zinc-900 dark:text-zinc-100">EaseUI</span>
          <span>•</span>
          <span>Crafted with React, Tailwind & GSAP</span>
        </div>
        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          Assigned student project, now made completely working and upgraded!
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
