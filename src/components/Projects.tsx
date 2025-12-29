import { ExternalLink, Github, Grid, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { track } from '@vercel/analytics';

// Import project cover images
import homeUtilityImage from "@/assets/projects/home-utility.svg";
import zomatoReelImage from "@/assets/projects/zomato-reel.svg";
import obysAgencyImage from "@/assets/projects/obys-agency.svg";
import layout1Image from "@/assets/projects/layout-1.svg";
import layout2Image from "@/assets/projects/layout-2.svg";
import layout3Image from "@/assets/projects/layout-3.svg";
import layout4Image from "@/assets/projects/layout-4.svg";
import pinterestCardsImage from "@/assets/projects/pinterest-cards.svg";
import hospitalAppointmentImage from "@/assets/projects/hospital-appointment.svg";
import socialMediaAnalyzerImage from "@/assets/projects/social-media-analyzer.svg";
import apnisecImage from "@/assets/projects/apnisec.svg";

interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  category: string;
  coverImage: string;
  githubUrl: string;
  liveUrl: string;
}

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      title: "Home Utility Management System",
      description: "MERN app for booking plumbing, carpentry, and electrical services with real-time updates, admin dashboard, and AI recommendations.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Nodemailer"],
      gradient: "from-red-500/20 to-orange-500/20",
      category: "Full-Stack",
      coverImage: homeUtilityImage,
      githubUrl: "https://github.com/Vatsal1805/HomeEase",
      liveUrl: "#"
    },
    {
  title: "Social Media Content Analyzer",
  description: "AI-powered full-stack application that analyzes social media content and provides intelligent suggestions to improve engagement. Features file upload, OCR, sentiment analysis, and Google Gemini AI integration.",
  tech: ["React", "Node.js", "Express", "MongoDB", "Google Gemini AI", "Tesseract.js", "Vite"],
  gradient: "from-blue-500/20 to-slate-700/20",
  category: "Full-Stack",
  coverImage: socialMediaAnalyzerImage,
  githubUrl: "https://github.com/Vatsal1805/SOCIAL-MEDIA-ANALYZER",
  liveUrl: "https://social-media-analyzer-three.vercel.app/"
},
    {
  title: "ApniSec – Cybersecurity Issue Management Platform",
  description: "Professional cybersecurity issue tracking platform built with strict OOP principles for security teams to efficiently manage incidents, assessments, and VAPT. Features JWT authentication, dashboard analytics, advanced filtering, and 100% Lighthouse SEO score with modern dark theme.",
  tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Tailwind CSS", "Axios"],
  gradient: "from-emerald-500/20 to-slate-700/20",
  category: "Full-Stack",
  coverImage: apnisecImage,
  githubUrl: "https://github.com/Vatsal1805/Issue_Tracker",
  liveUrl: "https://issue-tracker-ashy-nine.vercel.app"
},

    {
      title: "Zomato Reel Clone",
      description: "A MERN full-stack web app with TikTok-style food video feed, secure user authentication, and responsive design.(Best viewed in mobile format).",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      gradient: "from-yellow-500/20 to-red-500/20",
      category: "Full-Stack",
      coverImage: zomatoReelImage,
      githubUrl: "https://github.com/Vatsal1805/Zomato-Reel",
      liveUrl: "https://zomato-reel-sepia.vercel.app/"
    },
    
    {
  title: "Hospital Appointment Booking System",
  description: "A web application developed using Node.js and Express.js for scheduling doctor appointments, featuring a user-friendly interface and efficient backend management.",
  tech: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
  gradient: "from-teal-500/20 to-blue-500/20",
  category: "Backend",
  coverImage: hospitalAppointmentImage,
  githubUrl: "https://github.com/Vatsal1805/Hospital_appointment",
  liveUrl: "#"
},
    {
      title: "Obys Agency Portfolio Clone",
      description: "A modern, interactive portfolio website inspired by the award-winning Obys Agency design. Features advanced web animations, smooth scrolling, and interactive elements using cutting-edge web technologies.",
      tech: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll"],
      gradient: "from-blue-500/20 to-indigo-500/20",
      category: "Frontend",
      coverImage: obysAgencyImage,
      githubUrl: "https://github.com/Vatsal1805/Js_Final_Project",
      liveUrl: "https://js-final-project-mocha.vercel.app/"
    },
    {
  title: "Layout 1",
  description: "A static website showcasing modern web design principles with interactive elements.",
  tech: ["HTML", "CSS", "JavaScript"],
  gradient: "from-blue-500/20 to-indigo-500/20",
  category: "Frontend",
  coverImage: layout1Image,
  githubUrl: "https://github.com/Vatsal1805/project1",
  liveUrl: "https://project1-efc9.vercel.app/"
}
,
    {
  title: "Layout 2",
  description: "A clean and responsive landing page designed using HTML and CSS, suitable for portfolios or small business showcases.",
  tech: ["HTML", "CSS"],
  gradient: "from-purple-500/20 to-pink-500/20",
  category: "Frontend",
  coverImage: layout2Image,
  githubUrl: "https://github.com/Vatsal1805/layout_2",
  liveUrl: "https://vatsal1805.github.io/layout_2/"
}

,
   {
  title: "Layout 3",
  description: "A simple and responsive landing page created with HTML and CSS, designed for portfolios or small business showcases.",
  tech: ["HTML", "CSS"],
  gradient: "from-teal-500/20 to-cyan-500/20",
  category: "Frontend",
  coverImage: layout3Image,
  githubUrl: "https://github.com/Vatsal1805/layout_3",
  liveUrl: "https://vatsal1805.github.io/layout_3/"
},
{
  title: "Layout 4",
  description: "A responsive and visually clean landing page built with HTML and CSS, ideal for portfolios or small business showcases.",
  tech: ["HTML", "CSS"],
  gradient: "from-orange-500/20 to-yellow-500/20",
  category: "Frontend",
  coverImage: layout4Image,
  githubUrl: "https://vatsal1805.github.io/layout_4/",
  liveUrl: "#"
},
{
  title: "Pinterest Card Layouts",
  description: "A collection of Pinterest-inspired card designs created using HTML and CSS, showcasing responsive layouts and modern design trends.",
  tech: ["HTML", "CSS"],
  gradient: "from-pink-500/20 to-yellow-500/20",
  category: "Frontend",
  coverImage: pinterestCardsImage,
  githubUrl: "https://github.com/Vatsal1805/Pinterest-Cards",
  liveUrl: "https://vatsal1805.github.io/Pinterest-Cards/"
},

  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 md:py-32 bg-card scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayedProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg border border-border overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.coverImage} 
                  alt={`${project.title} cover`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay`}></div>
                <span className="absolute top-4 right-4 text-xs px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/30 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg md:text-xl leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-2 bg-secondary text-sm md:text-base rounded-md text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => track('Project Code Clicked', { 
                        project: project.title,
                        category: project.category,
                        url: project.githubUrl
                      })}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => track('Project Demo Clicked', { 
                          project: project.title,
                          category: project.category,
                          url: project.liveUrl
                        })}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 opacity-50 cursor-not-allowed" 
                      disabled
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Projects Button */}
        {projects.length > 3 && (
          <div className="flex justify-center mt-16 animate-fade-in">
            <Button
              onClick={() => {
                setShowAllProjects(!showAllProjects);
                track('Projects Toggle Clicked', { 
                  action: showAllProjects ? 'Show Less' : 'Show More',
                  totalProjects: projects.length
                });
              }}
              variant="outline"
              size="lg"
              className="group px-8 py-4 text-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              <Grid className="w-5 h-5 mr-3 text-primary" />
              {showAllProjects ? 'Show Less Projects' : 'See All Projects'}
              {showAllProjects ? (
                <ChevronUp className="w-5 h-5 ml-3 text-primary group-hover:translate-y-[-2px] transition-transform" />
              ) : (
                <ChevronDown className="w-5 h-5 ml-3 text-primary group-hover:translate-y-[2px] transition-transform" />
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
