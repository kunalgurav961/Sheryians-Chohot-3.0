// devendra left this half baked, finished it before professor marks us down lol
import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Button } from "@/components/Button/Button";

const NavbarPage = () => {
  const lightCode = `import { Navbar } from "dev-ease-ui";

<Navbar variant="light" size="default" />`;

  const darkCode = `import { Navbar } from "dev-ease-ui";

<Navbar variant="dark" size="default" />`;

  const glassCode = `import { Navbar } from "dev-ease-ui";

<Navbar variant="glass" size="default" className="bg-slate-800/60 backdrop-blur-md" />`;

  const customCode = `import { Navbar, Button } from "dev-ease-ui";

<Navbar variant="primary" size="lg">
  <div className="flex items-center gap-2 font-bold text-xl text-white">
    <span>⚡ EaseUI Pro</span>
  </div>
  <div className="flex gap-6 font-medium text-white/90">
    <a href="#docs" className="hover:text-white">Docs</a>
    <a href="#components" className="hover:text-white">Components</a>
    <a href="#pricing" className="hover:text-white">Pricing</a>
  </div>
  <Button variant="dark" size="sm">Get Started</Button>
</Navbar>`;

  const propsData = [
    {
      prop: "variant",
      type: '"light" | "dark" | "primary" | "glass"',
      default: '"light"',
      description: "Visual appearance and theme variant for the navbar.",
    },
    {
      prop: "size",
      type: '"sm" | "default" | "lg" | "xl"',
      default: '"default"',
      description: "Height presets for the navigation bar.",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "GSAP entrance animation when mounting.",
    },
    {
      prop: "hoverAnimation",
      type: '"jiggle" | "scale" | "bounce" | "none"',
      default: '"none"',
      description: "Animation effect triggered when hovering over the navbar.",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "undefined (renders default logo + links)",
      description: "Optional custom elements to render inside the navbar container.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">Navbar</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          A flexible header bar for top-level branding, navigation links, and action buttons with GSAP animation support.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Examples</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200">Light Variant (Default)</h3>
          <ComponentDemo code={lightCode}>
            <div className="w-full">
              <Navbar variant="light" size="default" />
            </div>
          </ComponentDemo>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200">Dark Variant</h3>
          <ComponentDemo code={darkCode}>
            <div className="w-full">
              <Navbar variant="dark" size="default" />
            </div>
          </ComponentDemo>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200">Glassmorphism Variant</h3>
          <ComponentDemo code={glassCode}>
            <div className="w-full p-4 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 rounded-lg">
              <Navbar variant="glass" size="default" className="bg-white/15 backdrop-blur-md" />
            </div>
          </ComponentDemo>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200">Custom Content & Primary Variant</h3>
          <ComponentDemo code={customCode}>
            <div className="w-full">
              <Navbar variant="primary" size="lg">
                <div className="flex items-center gap-2 font-bold text-xl text-white">
                  <span>⚡ EaseUI Pro</span>
                </div>
                <div className="flex gap-6 font-medium text-white/90">
                  <a href="#docs" className="hover:text-white transition">Docs</a>
                  <a href="#components" className="hover:text-white transition">Components</a>
                  <a href="#pricing" className="hover:text-white transition">Pricing</a>
                </div>
                <Button variant="dark" size="sm" hoverAnimation="bounce">Get Started</Button>
              </Navbar>
            </div>
          </ComponentDemo>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;
