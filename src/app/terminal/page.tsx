import HackerTerminal from "@/components/hacker-terminal";

export default function TerminalPage() {
  return (
    <div className="flex h-[calc(100vh-theme(spacing.14))] flex-col bg-black font-code text-green-400">
      <HackerTerminal />
    </div>
  );
}
