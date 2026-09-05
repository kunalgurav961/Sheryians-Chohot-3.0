// layout page: showing off grids, stacks, and containers
import { Layout } from "@/components/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const gridUsageCode = `import { Layout } from "dev-ease-ui";

<Layout type="grid3" gap="lg">
  <div className="p-6 bg-indigo-50 border border-indigo-200 rounded-lg text-center">Column 1</div>
  <div className="p-6 bg-indigo-50 border border-indigo-200 rounded-lg text-center">Column 2</div>
  <div className="p-6 bg-indigo-50 border border-indigo-200 rounded-lg text-center">Column 3</div>
</Layout>`;

  const splitUsageCode = `import { Layout } from "dev-ease-ui";

<Layout type="split" padding="md" className="bg-slate-100 dark:bg-slate-800 rounded-lg">
  <div>
    <h4 className="font-bold">Project Architecture</h4>
    <p className="text-sm text-gray-500">Component modularity with CVA & Tailwind</p>
  </div>
  <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full font-medium">Status: Active</span>
</Layout>`;

  const propsData = [
    {
      prop: "type",
      type: '"container" | "stack" | "row" | "grid2" | "grid3" | "grid4" | "split"',
      default: '"container"',
      description: "Structural layout archetype specifying display flex or grid rules.",
    },
    {
      prop: "gap",
      type: '"none" | "sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description: "Spacing between direct child items.",
    },
    {
      prop: "padding",
      type: '"none" | "sm" | "md" | "lg" | "xl"',
      default: '"none"',
      description: "Internal padding surrounding layout boundaries.",
    },
    {
      prop: "as",
      type: "React.ElementType",
      default: '"div"',
      description: "Underlying HTML element to render (e.g., section, main, article).",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">Layout</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Structural layout primitives including responsive grids, stacks, rows, and responsive containers.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Grid System</h2>
        <ComponentDemo code={gridUsageCode}>
          <div className="w-full">
            <Layout type="grid3" gap="md">
              <div className="p-6 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 shadow-xs rounded-xl text-center font-medium text-zinc-900 dark:text-white">
                Box 1
              </div>
              <div className="p-6 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 shadow-xs rounded-xl text-center font-medium text-zinc-900 dark:text-white">
                Box 2
              </div>
              <div className="p-6 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 shadow-xs rounded-xl text-center font-medium text-zinc-900 dark:text-white">
                Box 3
              </div>
            </Layout>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Split Layout</h2>
        <ComponentDemo code={splitUsageCode}>
          <div className="w-full">
            <Layout type="split" padding="lg" className="bg-white dark:bg-zinc-800/90 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-xs">
              <div>
                <h4 className="font-bold text-lg text-zinc-900 dark:text-white">EaseUI Component Architecture</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Tailwind CSS 4.x with Class Variance Authority</p>
              </div>
              <span className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-full font-medium shadow-xs">
                Production Ready
              </span>
            </Layout>
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

export default LayoutPage;
