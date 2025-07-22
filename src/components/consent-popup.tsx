"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CONSENT_KEY = "ryuverse-consent-given";

export default function ConsentPopup() {
  const [consentState, setConsentState] = useState<"pending" | "given" | "denied">("pending");

  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem(CONSENT_KEY);
      if (storedConsent === "true") {
        setConsentState("given");
      }
    } catch (error) {
        // If localStorage is not available (e.g. server-side or private mode), we can't store consent.
        // We will default to 'given' to avoid blocking the UI, but the popup will reappear on next visit.
        console.warn("Could not access localStorage. Consent will not be saved.");
        setConsentState("given"); 
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "true");
    } catch (error) {
        console.warn("Could not save consent to localStorage.");
    }
    setConsentState("given");
  };

  const handleDecline = () => {
    setConsentState("denied");
  };

  if (consentState === "given") {
    return null;
  }

  return (
    <>
      {consentState === "denied" && (
        <div className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center max-w-md p-6">
                <h2 className="font-headline text-3xl mb-4">Access Denied</h2>
                <p className="text-muted-foreground mb-6">
                    You need to agree to the terms and conditions to access this website. Your privacy and data are important, and these terms outline how they are handled.
                </p>
                <Button onClick={handleAccept}>I Agree to the Terms</Button>
            </div>
        </div>
      )}

      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-[99] bg-background/95 border-t border-border/40 p-4 transition-transform duration-500",
          consentState === 'pending' ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>This website is still under construction. By continuing, you agree to our{" "}
            <Link href="/terms" target="_blank" className="underline hover:text-primary">
              Terms and Conditions
            </Link>
            . We may use your data for analytics and development purposes, and we do not guarantee its security.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2">
            <Button onClick={handleAccept}>Accept</Button>
            <Button variant="secondary" onClick={handleDecline}>Decline</Button>
          </div>
        </div>
      </div>
    </>
  );
}
