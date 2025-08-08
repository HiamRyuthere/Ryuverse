
"use client";

import HackerTerminal from "@/components/hacker-terminal";
import { Suspense } from "react";

export default function TerminalPage() {
  return (
    <div className="flex h-[calc(100vh-theme(spacing.14))] flex-col bg-black font-code text-green-400">
      <Suspense fallback={<div className="p-4">Loading Terminal...</div>}>
        <HackerTerminal />
      </Suspense>
    </div>
  );
}
