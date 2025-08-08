
"use client";

import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, FolderGit2, GraduationCap, Building, Users, Rocket, Code, Palette, Cpu, Bot } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

const skills = [
  { name: "Spring Boot", description: "Robust Java backends with Spring Security & JPA." },
  { name: "Python", description: "Versatile scripting for automation and web backends." },
  { name: "Low Level & OS", description: "C/C++ and OS concepts for performance-critical tasks." },
  { name: "Web Design", description: "Minimalist, responsive UI/UX with Next.js & Tailwind." },
];

const timeline = [
    {
        icon: <GraduationCap className="h-5 w-5" />,
        date: "2023",
        title: "Passed-Out Class 12th",
        description: "Completed higher secondary education, focusing on commerce and mathematics.",
    },
    {
        icon: <Building className="h-5 w-5" />,
        date: "2023 - Present",
        title: "Bachelor of Computer Applications (BCA) - Holkar Science College",
        description: "Pursuing a comprehensive degree in computer science, covering data structures, algorithms, and software development.",
    },
     {
        icon: <Users className="h-5 w-5" />,
        date: "2024",
        title: "Team Lead - Smart India Hackathon",
        description: "Led a team in one of the world's largest hackathons, developing a solution for a real-world problem statement.",
    },
    {
        icon: <Rocket className="h-5 w-5" />,
        date: "Ongoing",
        title: "Open Source Contributor",
        description: "Actively contributing to various open-source projects under the RyuVerse banner, focusing on web development and developer tools.",
    },
];

const projects = [
    {
        title: "RyuVerse (Personal Website)",
        description: "A full-stack personal portfolio and blog built with Next.js, Tailwind CSS, and Framer Motion, reflecting my philosophy of minimalism. It serves as a platform to share my thoughts and showcase my work.",
    },
    {
        title: "Advaita Vedanta Explorer",
        description: "An interactive web platform designed to make the profound teachings of Advaita Vedanta accessible. Features timelines, simple explanations, and curated resources.",
    },
    {
        title: "Terminal-Based Navigation System",
        description: "A command-line interface for navigating the RyuVerse website, built with React to provide a unique and efficient user experience for technical audiences.",
    },
];


export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Resume | Harsh Parmar</title>
        <meta name="description" content="View and download the resume of Harsh Parmar, showcasing his skills in software development, project experience, and academic background." />
      </Head>
      <div id="resume-container" className="bg-background text-foreground font-body">
        <div className="container mx-auto max-w-4xl p-4 sm:p-8 md:p-12">
          <header id="resume-header" className="flex flex-col sm:flex-row items-start justify-between">
              <div>
                  <h1 className="text-4xl sm:text-5xl font-bold font-headline">Harsh Parmar</h1>
                   <p id="title" className="text-xl text-primary font-medium mt-1">Software Developer</p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <a href="mailto:hiamryu@duck.com" className="flex items-center gap-2 hover:text-primary" title="Email">
                          <Mail className="h-4 w-4" />
                      </a>
                      <a href="https://linkedin.com/in/Harsh-Parmar-2212b2201" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary" title="LinkedIn">
                          <Linkedin className="h-4 w-4" />
                      </a>
                      <a href="https://github.com/hiamryuthere" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary" title="GitHub">
                          <Github className="h-4 w-4" />
                      </a>
                  </div>
              </div>
              <div className="text-center mt-4 sm:mt-0">
                  <Button asChild>
                    <Link href="/download-resume" target="_blank">
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                    </Link>
                  </Button>
              </div>
          </header>

          <main id="resume-main-grid" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
              <aside id="resume-sidebar" className="md:col-span-1 space-y-8">
                  <section>
                      <h2 className="font-headline text-lg font-semibold border-b pb-2 mb-4">Skills</h2>
                      <div className="space-y-4">
                          {skills.map((skill) => (
                              <div key={skill.name}>
                                  <h3 className="font-semibold">{skill.name}</h3>
                                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                              </div>
                          ))}
                      </div>
                  </section>
                  <section>
                      <h2 className="font-headline text-lg font-semibold border-b pb-2 mb-4">Languages</h2>
                      <ul className="list-disc list-inside text-muted-foreground">
                          <li>English (Professional)</li>
                          <li>Hindi (Native)</li>
                      </ul>
                  </section>
              </aside>

              <div id="resume-main-content" className="md:col-span-2 space-y-10">
                  <section>
                      <h2 className="font-headline text-2xl font-semibold border-b pb-2 mb-4">Professional Summary</h2>
                      <p className="text-muted-foreground">
                        A minimalist developer and thinker with a passion for creating clean, elegant, and efficient solutions. I see programming as a craft to build applications that are as beautiful in their logic as they are in their execution. My philosophy is rooted in finding the essential, discarding the superfluous, and building technology that serves a clear purpose.
                      </p>
                  </section>
                  
                  <section>
                      <h2 className="font-headline text-2xl font-semibold border-b pb-2 mb-4">Experience &amp; Education</h2>
                      <div className="relative">
                          {timeline.map((item, index) => (
                              <div key={index} className="timeline-item">
                                  <div className="timeline-line"></div>
                                  <div className="timeline-icon-wrapper">
                                      <div className="timeline-icon">{item.icon}</div>
                                  </div>
                                  <div>
                                      <p className="date">{item.date}</p>
                                      <h3 className="font-semibold">{item.title}</h3>
                                      <p className="text-sm text-muted-foreground">{item.description}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </section>

                  <section>
                      <h2 className="font-headline text-2xl font-semibold border-b pb-2 mb-4">Projects</h2>
                      <div className="space-y-6">
                          {projects.map((project, index) => (
                            <div key={index} className="project-item">
                                  <FolderGit2 className="h-5 w-5 project-icon" />
                                  <div>
                                      <h3 className="font-semibold">{project.title}</h3>
                                      <p className="text-muted-foreground text-sm">{project.description}</p>
                                  </div>
                            </div>
                          ))}
                      </div>
                  </section>
              </div>
          </main>
        </div>
      </div>
    </>
  );
}
