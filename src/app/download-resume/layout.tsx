
import type { Metadata } from "next";
import "./resume.css";

export const metadata: Metadata = {
  title: "Harsh Parmar Resume",
  description: "Printable resume for Harsh Parmar, Software Developer.",
};

export default function DownloadResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
