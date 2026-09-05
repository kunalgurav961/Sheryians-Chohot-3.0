// tooltip demo page so users know where to hover
import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const basicUsageCode = `import { Tooltip, Button } from "dev-ease-ui";

<Tooltip content="Nice tooltip right here!" position="top">
  <Button variant="primary">Hover Me</Button>
</Tooltip>
<Tooltip content="Dark theme tooltip" variant="dark" position="bottom">
  <Button variant="secondary">Bottom Tooltip</Button>
</Tooltip>
<Tooltip content="Helpful info on left" variant="light" position="left">
  <Button variant="outline">Left Tooltip</Button>
</Tooltip>
<Tooltip content="Looking right at ya" variant="primary" position="right">
  <Button variant="ok">Right Tooltip</Button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "ReactNode | string",
      default: "-",
      description: "Text or custom component inside the tooltip bubble.",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Where the tooltip appears relative to trigger element.",
    },
    {
      prop: "variant",
      type: '"dark" | "light" | "primary"',
      default: '"dark"',
      description: "Visual styling color scheme for tooltip bubble.",
    },
    {
      prop: "delay",
      type: "number",
      default: "100",
      description: "Delay before showing tooltip in milliseconds.",
    },
    {
      prop: "animated",
      type: "boolean",
      default: "true",
      description: "Whether to animate in/out using GSAP spring physics.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">Tooltip</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          A popup that displays informational text when users hover over or focus an element.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Usage & Positions</h2>
        <ComponentDemo code={basicUsageCode}>
          <div className="flex gap-6 flex-wrap items-center justify-center p-6">
            <Tooltip content="Tooltip on Top ☝️" position="top">
              <Button variant="primary" size="sm">Top</Button>
            </Tooltip>

            <Tooltip content="Tooltip on Bottom 👇" variant="dark" position="bottom">
              <Button variant="secondary" size="sm">Bottom</Button>
            </Tooltip>

            <Tooltip content="Tooltip on Left 👈" variant="light" position="left">
              <Button variant="outline" size="sm">Left</Button>
            </Tooltip>

            <Tooltip content="Tooltip on Right 👉" variant="primary" position="right">
              <Button variant="ok" size="sm">Right</Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
