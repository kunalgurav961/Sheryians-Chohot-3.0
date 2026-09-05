// removing the concrete-grey background before my design friends roast me in the groupchat
import { useState } from "react";
import { Code, Eye } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({ children, code }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <div className="border border-gray-200/90 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm bg-white dark:bg-zinc-900/80 transition-all">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200/80 dark:border-zinc-800/80 bg-gray-50/80 dark:bg-zinc-800/50 backdrop-blur-xs">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          <Eye size={14} className="text-indigo-500" />
          <span>Preview</span>
        </div>
        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700/80 text-gray-700 dark:text-gray-200 rounded-lg transition-all shadow-xs"
        >
          <Code size={13} className="text-indigo-500" />
          <span>{isCodeVisible ? "Hide Code" : "View Code"}</span>
        </button>
      </div>

      {/* Interactive Component Stage */}
      <div className="py-16 px-6 flex items-center justify-center bg-gradient-to-b from-gray-50/50 to-white dark:from-zinc-900/60 dark:to-zinc-950/60 min-h-[180px]">
        {children}
      </div>

      {/* Collapsible Code Block */}
      {isCodeVisible && (
        <div className="border-t border-gray-200 dark:border-zinc-800 animate-fadeIn">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
