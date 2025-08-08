
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CONSENT_KEY = "ryuverse-notice-understood";

export default function ConsentPopup() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    try {
      const hasUnderstood = localStorage.getItem(CONSENT_KEY);
      if (hasUnderstood !== "true") {
        setShowNotice(true);
      }
    } catch (error) {
        console.warn("Could not access localStorage. Notice may reappear.");
        setShowNotice(true); 
    }
  }, []);

  const handleUnderstand = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "true");
    } catch (error) {
        console.warn("Could not save notice status to localStorage.");
    }
    setShowNotice(false);
  };

  if (!showNotice) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[99] bg-background/95 border-t border-border/40 p-4 transition-transform duration-500",
        showNotice ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground text-center md:text-left">
          <p>
            Welcome! This website is a personal project and still under construction. Please avoid entering any sensitive data.
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center gap-2">
          <Button onClick={handleUnderstand}>I Understand</Button>
        </div>
      </div>
    </div>
  );
}
