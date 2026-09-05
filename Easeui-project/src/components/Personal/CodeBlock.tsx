// code block so clean it looks like we didn't write this the night before it was due
import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "tsx" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-b-xl overflow-hidden border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-inner">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between bg-zinc-900/90 px-4 py-2 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Terminal size={13} className="text-indigo-400" />
          <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">
            {language}
          </span>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-md transition-colors"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-zinc-200">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
