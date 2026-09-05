// making the props table legible in dark mode so developers don't have to squint like they lost their glasses
interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50/80 dark:bg-zinc-800/50 border-b border-gray-200/80 dark:border-zinc-800">
            <th className="px-4 py-3 text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 tracking-wider">
              Prop
            </th>
            <th className="px-4 py-3 text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 tracking-wider">
              Type
            </th>
            <th className="px-4 py-3 text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 tracking-wider">
              Default
            </th>
            <th className="px-4 py-3 text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 tracking-wider">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
          {data.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-indigo-50/30 dark:hover:bg-zinc-800/30 transition-colors"
            >
              <td className="px-4 py-3 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                {row.prop}
              </td>
              <td className="px-4 py-3 text-xs font-mono text-pink-600 dark:text-pink-400">
                <span className="bg-pink-50 dark:bg-pink-950/40 px-1.5 py-0.5 rounded border border-pink-100 dark:border-pink-900/40">
                  {row.type}
                </span>
              </td>
              <td className="px-4 py-3 text-xs font-mono text-amber-600 dark:text-amber-400">
                {row.default}
              </td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 leading-normal">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
