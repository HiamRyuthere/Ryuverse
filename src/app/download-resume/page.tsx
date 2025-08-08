
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Github, Linkedin, Mail, FolderGit2, GraduationCap, Building, Users, Rocket, Code, Palette, Cpu, Bot } from "lucide-react";

const skills = [
  { name: "Spring Boot", icon: <Code />, description: "Robust Java backends with Spring Security & JPA." },
  { name: "Python", icon: <Bot />, description: "Versatile scripting for automation and web backends." },
  { name: "Low Level & OS", icon: <Cpu />, description: "C/C++ and OS concepts for performance-critical tasks." },
  { name: "Web Design", icon: <Palette />, description: "Minimalist, responsive UI/UX with Next.js & Tailwind." },
];

const timeline = [
    { icon: <GraduationCap />, date: "2023", title: "Passed-Out Class 12th", description: "Completed higher secondary education with a focus on science and mathematics." },
    { icon: <Building />, date: "2023 - Present", title: "Bachelor of Computer Applications (BCA)", description: "Pursuing a comprehensive degree in computer science at Holkar Science College." },
    { icon: <Users />, date: "2024", title: "Team Lead - Smart India Hackathon", description: "Led a team in developing a solution for a real-world problem statement." },
    { icon: <Rocket />, date: "Ongoing", title: "Open Source Contributor", description: "Actively contributing to various open-source projects under the RyuVerse banner." },
];

const projects = [
    { title: "RyuVerse (Personal Website)", description: "A full-stack personal portfolio and blog built with Next.js, Tailwind CSS, and Framer Motion." },
    { title: "Advaita Vedanta Explorer", description: "An interactive web platform designed to make the profound teachings of Advaita Vedanta accessible." },
    { title: "Terminal-Based Navigation", description: "A CLI for navigating the RyuVerse website, built to provide a unique user experience." },
];


export default function DownloadResumePage() {
    const router = useRouter();

    useEffect(() => {
        const printAndRedirect = async () => {
            await new Promise(resolve => setTimeout(resolve, 500)); // Allow content to render
            
            // Check if we're in a browser environment
            if (typeof window !== 'undefined') {
                try {
                    window.print();
                } finally {
                    // This will run whether printing succeeds or is cancelled
                    router.push('/resume');
                }
            }
        };

        printAndRedirect();
    }, [router]);

    return (
      <div className="bg-gray-100 text-gray-900 font-sans p-8">
          <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
              <div className="grid grid-cols-12">
                  <aside className="col-span-4 bg-gray-900 text-white p-8">
                      <div className="mb-10">
                          <h1 className="text-3xl font-bold text-white tracking-tight">Harsh Parmar</h1>
                          <p className="text-gray-400 mt-1">Software Developer</p>
                      </div>

                      <div className="space-y-8">
                          <div>
                              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 border-b border-gray-700 pb-2 mb-3">Contact</h2>
                              <ul className="space-y-2 text-sm text-gray-300">
                                  <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary"/> hiamryu@duck.com</li>
                                  <li className="flex items-center gap-3"><Linkedin className="w-4 h-4 text-primary"/> Harsh-Parmar-2212b2201</li>
                                  <li className="flex items-center gap-3"><Github className="w-4 h-4 text-primary"/> hiamryuthere</li>
                              </ul>
                          </div>
                          <div>
                              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 border-b border-gray-700 pb-2 mb-3">Skills</h2>
                              <div className="space-y-4">
                                  {skills.map(skill => (
                                      <div key={skill.name}>
                                          <h3 className="font-semibold flex items-center gap-2">{skill.icon} {skill.name}</h3>
                                          <p className="text-sm text-gray-400 mt-1">{skill.description}</p>
                                      </div>
                                  ))}
                              </div>
                          </div>
                           <div>
                              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 border-b border-gray-700 pb-2 mb-3">Languages</h2>
                              <ul className="text-sm text-gray-300 list-disc list-inside">
                                  <li>English (Professional)</li>
                                  <li>Hindi (Native)</li>
                              </ul>
                          </div>
                      </div>
                  </aside>

                  <main className="col-span-8 p-10">
                      <section className="mb-10">
                          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Professional Summary</h2>
                          <p className="text-gray-700 leading-relaxed">
                              A minimalist developer and thinker with a passion for creating clean, elegant, and efficient solutions. I see programming as a craft to build applications that are as beautiful in their logic as they are in their execution. My philosophy is rooted in finding the essential, discarding the superfluous, and building technology that serves a clear purpose.
                          </p>
                      </section>
                      
                      <section className="mb-10">
                          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Experience & Education</h2>
                          <div className="relative">
                              <div className="absolute left-3.5 h-full w-px bg-gray-200"></div>
                              <div className="space-y-8">
                                  {timeline.map((item, index) => (
                                      <div key={index} className="relative flex items-start pl-12">
                                          <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                                              {item.icon}
                                          </div>
                                          <div>
                                              <p className="text-xs font-bold uppercase tracking-wider text-primary">{item.date}</p>
                                              <h3 className="font-semibold text-gray-800 mt-1">{item.title}</h3>
                                              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </section>

                       <section>
                          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Projects</h2>
                           <div className="space-y-6">
                              {projects.map((project, index) => (
                                 <div key={index} className="flex items-start">
                                      <FolderGit2 className="h-5 w-5 mt-half mr-4 text-primary shrink-0" />
                                      <div>
                                          <h3 className="font-semibold text-gray-800">{project.title}</h3>
                                          <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                                      </div>
                                 </div>
                              ))}
                          </div>
                      </section>
                  </main>
              </div>
          </div>
      </div>
    );
}
