"use client";

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import Link from 'next/link';

type Output = {
  id: number;
  type: 'input' | 'output' | 'error';
  content: string | JSX.Element;
};

const HELP_TEXT = (
  <div>
    <p>Available commands:</p>
    <ul className="list-disc list-inside">
      <li><span className="text-green-300">help</span> - Show this help message.</li>
      <li><span className="text-green-300">whoami</span> - Display information about the user.</li>
      <li><span className="text-green-300">social</span> - List social media links.</li>
      <li><span className="text-green-300">projects</span> - Show a link to my projects (coming soon).</li>
      <li><span className="text-green-300">clear</span> - Clear the terminal screen.</li>
      <li><span className="text-green-300">exit</span> - Go back to the homepage.</li>
    </ul>
  </div>
);

const SOCIAL_LINKS = (
  <div>
    <p>Connecting to social databases...</p>
    <p>---</p>
    <p>Email:      <a href="mailto:hiamryu@outlook.com" className="underline hover:text-green-200">hiamryu@outlook.com</a></p>
    <p>Instagram:  <a href="https://instagram.com/Mayimweird" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-200">@Mayimweird</a></p>
    <p>LinkedIn:   <a href="https://linkedin.com/in/Harsh-Parmar-2212b2201" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-200">Harsh Parmar</a></p>
    <p>GitHub:     <a href="https://github.com/hiamryuthere" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-200">hiamryuthere</a></p>
    <p>---</p>
  </div>
);

const WHOAMI_TEXT = (
    <div>
        <p>Querying identity matrix...</p>
        <p>---</p>
        <p>User: Harsh Parmar</p>
        <p>Alias: Ryu</p>
        <p>Designation: Minimalist, Poet, Programmer</p>
        <p>Status: Currently pursuing BCA @ Holkar Science College</p>
        <p>---</p>
    </div>
)

export default function HackerTerminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<Output[]>([
    { id: 1, type: 'output', content: "RyuVerse CLI [Version 1.0.0]" },
    { id: 2, type: 'output', content: "(c) RyuVerse. All rights reserved." },
    { id: 3, type: 'output', content: 'Type "help" to see available commands.' },
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (command: string) => {
    let newOutput: Output = { id: Date.now(), type: 'output', content: '' };
    
    switch (command.toLowerCase()) {
      case 'help':
        newOutput.content = HELP_TEXT;
        break;
      case 'whoami':
        newOutput.content = WHOAMI_TEXT;
        break;
      case 'social':
        newOutput.content = SOCIAL_LINKS;
        break;
      case 'projects':
        newOutput.content = 'Accessing project archives... This feature is still under development.';
        break;
      case 'clear':
        setOutput([]);
        return;
      case 'exit':
         newOutput.content = (<span>Disconnecting... Rerouting to <Link href="/" className="underline">Homepage</Link>.</span>);
         setTimeout(() => window.location.href = '/', 1000);
        break;
      default:
        newOutput.type = 'error';
        newOutput.content = `command not found: ${command}. Type 'help' for a list of commands.`;
    }
    setOutput(prev => [...prev, newOutput]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newCommand = input.trim();
      if (newCommand) {
        setOutput(prev => [...prev, { id: Date.now(), type: 'input', content: newCommand }]);
        handleCommand(newCommand);
        setHistory(prev => [newCommand, ...prev].slice(0, 50));
        setHistoryIndex(-1);
      }
      setInput('');
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (history.length > 0) {
            const newIndex = Math.min(historyIndex + 1, history.length - 1);
            setHistoryIndex(newIndex);
            setInput(history[newIndex] || '');
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > -1) {
            const newIndex = Math.max(historyIndex - 1, -1);
            setHistoryIndex(newIndex);
            setInput(history[newIndex] || '');
        }
    } else if (e.key === 'Tab') {
        e.preventDefault();
        // Basic auto-complete
        const commands = ['help', 'whoami', 'social', 'projects', 'clear', 'exit'];
        const matchingCommand = commands.find(cmd => cmd.startsWith(input.toLowerCase()));
        if(matchingCommand) {
            setInput(matchingCommand);
        }
    }
  };

  return (
    <div
      ref={scrollRef}
      className="flex-grow overflow-y-auto p-4"
      onClick={() => inputRef.current?.focus()}
    >
      {output.map(line => (
        <div key={line.id} className="mb-1">
          {line.type === 'input' && <span className="text-green-500">ryu@verse:~$ </span>}
          <span className={line.type === 'error' ? 'text-red-500' : ''}>
            {line.content}
          </span>
        </div>
      ))}

      <div className="flex">
        <label htmlFor="terminal-input" className="text-green-500 shrink-0">ryu@verse:~$ </label>
        <input
          id="terminal-input"
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow bg-transparent border-none outline-none text-green-400 caret-green-400"
          autoComplete="off"
        />
         <span className="w-2 h-5 bg-green-400 animate-pulse"></span>
      </div>
    </div>
  );
}
