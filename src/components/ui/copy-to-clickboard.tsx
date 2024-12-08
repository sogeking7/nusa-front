"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyToClipboard({
  text = "Text to copy",
}: {
  text?: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex items-center space-x-2 w-max ">
      <p className="font-medium text-right">{text}</p>
      <button
        onClick={copyToClipboard}
        className="text-info hover:text-gray-700"
        aria-label={isCopied ? "Copied" : "Copy to clipboard"}
      >
        {isCopied ? (
          <Check className="size-4 text-green-500" />
        ) : (
          <Copy className="size-4" />
        )}
      </button>
      <span className="sr-only">{isCopied ? "Copied!" : ""}</span>
    </div>
  );
}
