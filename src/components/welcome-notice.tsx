"use client";

import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Terminal } from "lucide-react";

const NOTICE_SHOWN_KEY = "ryuverse-welcome-notice-shown";

export default function WelcomeNotice() {
  const { toast } = useToast();

  useEffect(() => {
    try {
      const hasBeenShown = sessionStorage.getItem(NOTICE_SHOWN_KEY);
      if (!hasBeenShown) {
        // Use a timeout to ensure the UI is ready
        setTimeout(() => {
             toast({
                id: "welcome-notice",
                duration: 10000, // Make it stay a bit longer
                title: (
                    <div className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    <span className="font-headline">I've open the source code </span>
                    </div>
                ),
                description: "Ryuverse is open source! Feel free to explore the codebase and contribute on GitHub.",
                action: (
                    <Button asChild>
                    <Link href="https://github.com/HiamRyuthere/Ryuverse/">See source code</Link>
                    </Button>
                ),
            });
            sessionStorage.setItem(NOTICE_SHOWN_KEY, "true");
        }, 1500); // Delay of 1.5 seconds
      }
    } catch (error) {
      console.warn("Could not access sessionStorage. Welcome notice may reappear.");
    }
  }, [toast]);

  return null;
}
