
"use client";

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import MatrixRain from './matrix-rain';
import { useTheme } from 'next-themes';
import SnakeGame from './snake-game';

type Output = {
  id: number;
  type: 'input' | 'output' | 'error' | 'system';
  content: string | JSX.Element;
};

const CommandOutput = ({ children }: { children: React.ReactNode }) => (
    <div className="mt-1">{children}</div>
);

const HelpOutput = ({ commands }: { commands: Record<string, Command>}) => (
    <CommandOutput>
        <p>Available commands:</p>
        <ul className="list-disc list-inside mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1">
            {Object.keys(commands).filter(c => !commands[c].aliasFor).sort().map(cmd => (
                <li key={cmd}>
                    <span className="text-green-300">{cmd}</span>
                </li>
            ))}
        </ul>
        <p className="mt-2">Try <span className='text-green-300'>help {'<command>'}</span> for more details. Some commands have hidden aliases.</p>
    </CommandOutput>
);

const SocialLinksOutput = () => (
     <CommandOutput>
        <p>Connecting to social databases...</p>
        <p>---</p>
        <p>Email:      <a href="mailto:hiamryu@duck.com" className="underline hover:text-green-200">hiamryu@duck.com</a></p>
        <p>Instagram:  <a href="https://instagram.com/Mayimweird" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-200">@Mayimweird</a></p>
        <p>LinkedIn:   <a href="https://linkedin.com/in/Harsh-Parmar-2212b2201" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-200">Harsh Parmar</a></p>
        <p>GitHub:     <a href="https://github.com/hiamryuthere" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-200">hiamryuthere</a></p>
        <p>---</p>
    </CommandOutput>
);

const WhoisRyuOutput = () => (
    <CommandOutput>
        <p>Querying identity matrix for 'ryu'...</p>
        <p>---</p>
        <p>User: Harsh Parmar</p>
        <p>Alias: Ryu</p>
        <p>Designation: Minimalist, Poet, Programmer</p>
        <p>Status: Currently pursuing BCA @ Holkar Science College</p>
        <p>---</p>
    </CommandOutput>
);

const WhoAmIOutput = ({ username, location }: { username: string, location: string}) => (
     <CommandOutput>
        <p>User: {username}</p>
        <p>Location: {location}</p>
        <p>Access Level: Guest</p>
        <p className="text-gray-500">(To learn about the site owner, type 'whois ryu')</p>
        <p className="text-gray-500">(Login feature coming soon for more info)</p>
    </CommandOutput>
);

const CalendarOutput = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const monthName = now.toLocaleString('default', { month: 'long' });
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    let header = `      ${monthName} ${year}`;
    let weekDays = "Su Mo Tu We Th Fr Sa";
    let days = "   ".repeat(firstDay);

    for (let day = 1; day <= daysInMonth; day++) {
        days += day.toString().padStart(2, ' ') + ' ';
        if ((day + firstDay) % 7 === 0) {
            days += '\n';
        }
    }

    return (
        <CommandOutput>
            <pre className="whitespace-pre-wrap">
{`${header}\n${weekDays}\n${days}`}
            </pre>
        </CommandOutput>
    );
};

const ProjectsOutput = () => (
    <CommandOutput>
        <p>RyuVerse Projects:</p>
        <ul className="list-disc list-inside mt-2">
            <li>RyuVerse Website (this site)</li>
            <li>Advaita Vedanta Explorer</li>
            <li>Terminal Navigation System</li>
        </ul>
    </CommandOutput>
);


type CommandContext = {
    username: string;
    location: string;
    router: ReturnType<typeof useRouter>;
    history: string[];
    enterMatrix: () => void;
    enterSnake: () => void;
    setTheme: (theme: string) => void;
    setOutput: React.Dispatch<React.SetStateAction<Output[]>>;
};

type Command = {
    description: string;
    usage?: string;
    aliasFor?: string;
    execute: (args: string[], context: CommandContext) => string | JSX.Element | Promise<string | JSX.Element>;
};

export default function HackerTerminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<Output[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [username, setUsername] = useState('guest');
  const [location, setLocation] = useState('an unknown location');
  const [isReady, setIsReady] = useState(false);
  const [activeComponent, setActiveComponent] = useState<'terminal' | 'matrix' | 'snake'>('terminal');
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setTheme } = useTheme();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, Command> = {
        help: {
            description: "Shows a list of all available commands or details about a specific command.",
            usage: "help [command]",
            execute: (args) => {
                if (args.length > 0) {
                    const cmdName = args[0];
                    let cmd = commands[cmdName];
                    if (cmd && cmd.aliasFor) cmd = commands[cmd.aliasFor];

                    if (cmd) {
                        return (
                            <CommandOutput>
                                <p><span className="text-green-300">{cmdName}</span>: {cmd.description}</p>
                                {cmd.usage && <p>Usage: <span className="text-gray-400">{cmd.usage}</span></p>}
                                {Object.entries(commands).filter(([, c]) => c.aliasFor === cmdName).map(([alias]) => (
                                    <p key={alias}>Alias: <span className="text-gray-400">{alias}</span></p>
                                ))}
                            </CommandOutput>
                        );
                    }
                    return `Error: Command '${cmdName}' not found.`;
                }
                return <HelpOutput commands={commands} />;
            }
        },
        whoami: {
            description: "Displays your current user information.",
            execute: (_, context) => <WhoAmIOutput username={context.username} location={context.location} />
        },
        'whois': {
            description: "Displays information about the site owner, Ryu.",
            usage: "whois ryu",
            execute: (args) => {
                if (args[0] === 'ryu') return <WhoisRyuOutput />;
                return `Error: Unknown subject '${args[0]}'. Did you mean 'whois ryu'?`;
            }
        },
        social: {
            description: "Lists social media contact links.",
            execute: () => <SocialLinksOutput />
        },
        contact: {
            aliasFor: 'social',
            description: "Alias for the 'social' command.",
            execute: () => commands.social.execute([], {} as CommandContext)
        },
        clear: {
            description: "Clears the terminal screen.",
            execute: (_, context) => {
                setOutput([
                    { id: Date.now(), type: 'system', content: `Screen cleared. Welcome back, ${context.username}!` },
                ]);
                return '';
            }
        },
        cls: {
            aliasFor: 'clear',
            description: "Alias for 'clear'.",
            execute: (args, context) => commands.clear.execute(args, context)
        },
        exit: {
            description: "Exits the terminal and returns to the homepage.",
            execute: (_, context) => {
                setTimeout(() => context.router.push('/'), 1000);
                return (<span>Disconnecting... Rerouting to <Link href="/" className="underline">Homepage</Link>.</span>);
            }
        },
        bye: {
            aliasFor: 'exit',
            description: "Alias for 'exit'.",
            execute: (args, context) => commands.exit.execute(args, context)
        },
        shutdown: {
            description: "Displays a fake shutdown message.",
            execute: () => "System is shutting down. All connections will be terminated."
        },
        restart: {
            description: "Reloads the terminal page.",
            execute: () => {
                window.location.reload();
                return "Restarting session...";
            }
        },
        goto: {
            description: "Navigates to a specific page.",
            usage: "goto <page_name>",
            execute: (args, context) => {
                const page = args[0];
                if (!page) return "Error: No page specified. Usage: goto <page_name>";
                const validPages = ['home', 'about', 'music', 'thoughts', 'advait', 'contact', 'resume', 'hire-me', 'explore'];
                if (validPages.includes(page)) {
                    context.router.push(page === 'home' ? '/' : `/${page}`);
                    return `Navigating to ${page}...`;
                }
                return `Error: Page '${page}' not found. Valid pages are: ${validPages.join(', ')}.`;
            }
        },
        cd: {
            aliasFor: 'goto',
            description: "Alias for the 'goto' command.",
            execute: (args, context) => commands.goto.execute(args, context)
        },
        navigate: {
            aliasFor: 'goto',
            description: "Alias for the 'goto' command.",
            execute: (args, context) => commands.goto.execute(args, context)
        },
        date: {
            description: "Displays the current date and time.",
            execute: () => new Date().toLocaleString()
        },
        time: {
            aliasFor: 'date',
            description: "Alias for 'date'.",
            execute: () => commands.date.execute([], {} as CommandContext)
        },
        echo: {
            description: "Prints the given text to the terminal.",
            usage: "echo <text>",
            execute: (args) => args.join(' ')
        },
        history: {
            description: "Displays your command history.",
            execute: (_, context) => (
                <CommandOutput>
                    {context.history.length > 0 ? context.history.slice(0, 10).reverse().map((cmd, i) => <p key={i}>{context.history.length - 1 - i}: {cmd}</p>) : <p>No history yet.</p>}
                </CommandOutput>
            )
        },
        sudo: {
            description: "Execute a command with superuser privileges.",
            usage: "sudo <command>",
            execute: (args, { username }) => {
                if (args[0] === 'rm' && args[1] === '-rf' && args[2] === '/') {
                    return "Ah, ah, ah! You didn't say the magic word!";
                }
                return `User ${username} is not in the sudoers file. This incident will be reported.`;
            }
        },
        ls: {
            aliasFor: 'projects',
            description: "Lists available projects.",
            execute: () => <ProjectsOutput />
        },
        projects: {
            description: "Lists available projects.",
            execute: () => <ProjectsOutput />
        },
        dir: {
            aliasFor: 'help',
            description: "Alias for 'help'.",
            execute: () => <HelpOutput commands={commands} />
        },
        pwd: {
            description: "Prints the current working 'directory' (page URL).",
            execute: () => {
                if (typeof window !== 'undefined') {
                    return window.location.href;
                }
                return '/terminal';
            }
        },
        quote: {
            description: "Displays a random philosophical quote.",
            execute: () => {
                const quotes = [
                    "The only true wisdom is in knowing you know nothing. - Socrates",
                    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Emerson",
                    "It is the mark of an educated mind to be able to entertain a thought without accepting it. - Aristotle",
                    "All that we are is the result of what we have thought. - Buddha",
                    "He who is contented is rich. - Lao Tzu",
                    "An unexamined life is not worth living. - Socrates"
                ];
                return quotes[Math.floor(Math.random() * quotes.length)];
            }
        },
        weather: {
            description: "Shows the weather for your location.",
            execute: async (_, context) => {
                 try {
                    const response = await fetch('https://ipapi.co/json/');
                    if (!response.ok) return "Could not fetch weather data.";
                    const data = await response.json();
                    const weatherResponse = await fetch(`https://www.7timer.info/bin/api.pl?lon=${data.longitude.toFixed(2)}&lat=${data.latitude.toFixed(2)}&product=civil&output=json`);
                    const weatherData = await weatherResponse.json();
                     if (weatherData && weatherData.dataseries && weatherData.dataseries.length > 0) {
                        const current = weatherData.dataseries[0];
                        return `Weather in ${context.location}: ${current.temp2m}°C, ${current.weather}.`;
                    }
                    return "Could not retrieve weather conditions."
                } catch (error) {
                    return "Error fetching weather data.";
                }
            }
        },
        fetch: {
            description: "Fetches information about Ryu.",
            usage: "fetch <info>",
            execute: (args) => {
                const info = args[0];
                switch (info) {
                    case "skills":
                        return "Skills: Spring Boot, Python, C/C++, Web Design (Next.js), OS Concepts.";
                    case "projects":
                        return <ProjectsOutput />;
                    case "resume":
                        return "To view the full resume, please run: goto resume";
                    default:
                        return "Error: Unknown info. Try 'skills', 'projects', or 'resume'.";
                }
            }
        },
        theme: {
            description: "Changes the website's color theme.",
            usage: "theme <theme_name>",
            execute: (args, context) => {
                const availableThemes = ["dark", "light", "rose", "mint", "gold"];
                const themeName = args[0];
                if (!themeName) return `Usage: theme <name>. Available: ${availableThemes.join(', ')}.`;
                if (availableThemes.includes(themeName)) {
                    context.setTheme(themeName === 'light' ? 'theme-light' : themeName);
                    return `Theme changed to ${themeName}.`;
                }
                return `Error: Theme '${themeName}' not found.`;
            }
        },
        cal: {
            description: "Displays a calendar for the current month.",
            execute: () => <CalendarOutput />
        },
        banner: {
            description: "Displays the RyuVerse banner.",
            execute: () => (
                <pre className="text-primary whitespace-pre">
{`
██████╗ ██╗   ██╗██╗   ██╗    ██╗   ██╗██╗   ██╗███████╗███████╗███████╗
██╔══██╗╚██╗ ██╔╝╚██╗ ██╔╝    ██║   ██║██║   ██║██╔════╝██╔════╝██╔════╝
██████╔╝ ╚████╔╝  ╚████╔╝     ██║   ██║██║   ██║███████╗█████╗  ███████╗
██╔══██╗  ╚██╔╝    ╚██╔╝      ██║   ██║╚██╗ ██╔╝╚════██║██╔══╝  ╚════██║
██║  ██║   ██║      ██║       ╚██████╔╝ ╚████╔╝ ███████║███████╗███████║
╚═╝  ╚═╝   ╚═╝      ╚═╝        ╚═════╝   ╚═══╝  ╚══════╝╚══════╝╚══════╝
`}
                </pre>
            )
        },
        uname: {
            description: "Prints system information.",
            execute: () => "RyuVerse OS v1.0.0 GNU/Linux"
        },
        repo: {
            description: "Opens the GitHub repository for this project.",
            execute: () => {
                window.open('https://github.com/hiamryuthere/RyuVerse', '_blank');
                return "Opening repository in a new tab...";
            }
        },
        resume: {
            description: "Navigates to the resume page.",
            execute: (_, context) => {
                context.router.push('/resume');
                return `Navigating to resume...`;
            }
        },
        search: {
            description: "Searches the web for a query.",
            usage: "search <query>",
            execute: (args) => {
                if (args.length === 0) return "Error: search query cannot be empty.";
                const query = args.join(' ');
                window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
                return `Searching for "${query}"...`;
            }
        },
        dance: {
            description: "See a man dance.",
            execute: () => (
                <pre className="whitespace-pre">
{`
  \\o/
   |
  / \\
`}
                </pre>
            )
        },
        credits: {
            description: "Displays project credits.",
            execute: () => "This website was designed and developed by Harsh Parmar (Ryu). Built with Next.js, TailwindCSS, and a touch of minimalism."
        },
        ryuverse: {
            description: "RyuVerse system command.",
            usage: "ryuverse [--hack]",
            execute: async (args, context) => {
                if (args[0] === '--hack') {
                    const hackSteps = [
                        "Initializing RyuVerse protocol...",
                        "Bypassing firewalls... Access granted.",
                        "Injecting neural-interface... Synced.",
                        "Downloading core memories...",
                        "Decoding philosophical subroutines... Done.",
                        "Welcome to the system, Ryu."
                    ];

                    for (const step of hackSteps) {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        context.setOutput(prev => [...prev, {
                            id: Date.now() + Math.random(),
                            type: 'system',
                            content: step
                        }]);
                    }
                    return "System compromised. You are now the master.";
                }
                return "Usage: ryuverse [--hack]";
            }
        },
        // Easter eggs
        matrix: { 
            description: "Are you the one?", 
            execute: (_, context) => {
                context.enterMatrix();
                return "Wake up, Neo...";
            } 
        },
        snake: {
            description: "Play the classic snake game.",
            execute: (_, context) => {
                context.enterSnake();
                return "Initializing snake game...";
            }
        },
        hello: { description: "Greets the user.", execute: (_, context) => `Hello, ${context.username}!`},
        ping: { description: "Check network connectivity.", execute: () => "pong"},
        cowsay: { description: "A friendly cow says something.", usage: "cowsay <message>", execute: (args) => {
            const message = args.join(' ') || "Moo!";
            return (
                <pre className="whitespace-pre">
{` ${'_'.repeat(message.length + 2)}
< ${message} >
 ---
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`}
                </pre>
            );
        }},
  };


  useEffect(() => {
    const startSession = async () => {
      let fetchedLocation = 'an unknown location';
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
          const data = await response.json();
          fetchedLocation = `${data.city}, ${data.country_name}`;
        }
      } catch (error) {
        console.error("Could not fetch location:", error);
      }
      setLocation(fetchedLocation);

      const queryUsername = searchParams.get('username');
      const finalUsername = queryUsername || 'guest';
      setUsername(finalUsername);
      
      setOutput([
        { id: 1, type: 'system', content: `Welcome to the RyuVerse, ${finalUsername} from ${fetchedLocation}!` },
        { id: 2, type: 'output', content: "RyuVerse CLI [Version 1.0.0]" },
        { id: 3, type: 'output', content: "(c) RyuVerse. All rights reserved." },
        { id: 4, type: 'output', content: 'Type "help" to see available commands.' },
      ]);
      setIsReady(true);
    };

    startSession();
  }, [searchParams]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isReady, activeComponent]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = async (command: string) => {
    const [cmd, ...args] = command.split(' ');
    const cmdLower = cmd.toLowerCase();
    
    let commandToExecute = commands[cmdLower];
    
    // Resolve alias
    if (commandToExecute && commandToExecute.aliasFor) {
        commandToExecute = commands[commandToExecute.aliasFor];
    }

    let content: string | JSX.Element;

    if (commandToExecute) {
      try {
        const result = commandToExecute.execute(args, { 
            username, 
            location, 
            router, 
            history, 
            enterMatrix: () => setActiveComponent('matrix'), 
            enterSnake: () => setActiveComponent('snake'),
            setTheme, 
            setOutput 
        });
        if (result instanceof Promise) {
          content = await result;
        } else {
          content = result;
        }
      } catch (e) {
          content = "An unexpected error occurred.";
          console.error(e);
      }
    } else if (command.trim()) {
      content = `command not found: ${command}. Type 'help' for a list of commands.`;
    } else {
        content = '';
    }

    const newOutput: Output = { 
        id: Date.now(), 
        type: typeof content === 'string' && content.startsWith('Error:') ? 'error' : 'output', 
        content 
    };
    
    if (newOutput.content) {
        setOutput(prev => [...prev, newOutput]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newCommand = input.trim();
      setOutput(prev => [...prev, { id: Date.now(), type: 'input', content: newCommand }]);
      handleCommand(newCommand);
      if (newCommand && (!history.length || history[0] !== newCommand)) {
        setHistory(prev => [newCommand, ...prev].slice(0, 50));
      }
      setHistoryIndex(-1);
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
        const matchingCommands = Object.keys(commands).filter(cmd => cmd.startsWith(input.toLowerCase()));
        if (matchingCommands.length === 1) {
            setInput(matchingCommands[0]);
        } else if (matchingCommands.length > 1) {
            const sharedPrefix = matchingCommands.reduce((prefix, cmd) => {
                while (!cmd.startsWith(prefix)) {
                    prefix = prefix.slice(0, -1);
                }
                return prefix;
            });
            setInput(sharedPrefix);
            setOutput(prev => [...prev, {
                id: Date.now(),
                type: 'output',
                content: <div className="flex flex-wrap gap-x-4 gap-y-1">{matchingCommands.join('   ')}</div>
            }]);
        }
    }
  };

  const prompt = `${username}@ryuverse:~$ `;

  if (activeComponent === 'matrix') {
      return <MatrixRain onExit={() => setActiveComponent('terminal')} />
  }

  if (activeComponent === 'snake') {
    return <SnakeGame onExit={() => setActiveComponent('terminal')} />
  }

  if (!isReady) {
    return <div className="p-4">Initializing Terminal Session...</div>;
  }

  return (
    <div
      ref={scrollRef}
      className="flex-grow overflow-y-auto p-4"
      onClick={() => inputRef.current?.focus()}
    >
      {output.map(line => (
        <div key={line.id} className="mb-1">
          {line.type === 'input' && <span className="text-green-500">{prompt}</span>}
          <span className={line.type === 'error' ? 'text-red-500' : ''}>
            {line.content}
          </span>
        </div>
      ))}

      <div className="flex">
        <label htmlFor="terminal-input" className="text-green-500 shrink-0">{prompt}</label>
        <input
          id="terminal-input"
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow bg-transparent border-none outline-none text-green-400 caret-green-400 pl-2"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
        />
         <span className="w-2 h-5 bg-green-400 animate-pulse"></span>
      </div>
    </div>
  );
}
