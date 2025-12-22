import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { track } from '@vercel/analytics';
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleResumeView = () => {
    // TODO: Replace this with your actual Google Drive link
    const googleDriveResumeUrl = "https://drive.google.com/file/d/1QIjkxeQ3YJ1u0OR_jJ_bxVPYRqh3uhoM/view?usp=drive_link";
    
    // For now, using a placeholder - you'll need to replace with your actual Google Drive link
    const resumeUrl = googleDriveResumeUrl;
    
    // Track resume view with analytics
    track('Resume Viewed', { 
      source: 'Hero Button',
      format: 'Google Drive',
      destination: 'Google Docs'
    });
    
    // Open Google Drive resume in new tab
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-28 lg:pt-32 scroll-mt-0"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="container mx-auto px-6 md:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
              Hello, I'm <span className="gradient-text">Vatsal Bhavsar</span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-medium">
              Full-Stack Developer | MERN Stack
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Specializing in MERN Stack development, I build robust web applications with clean, maintainable code and responsive user interfaces. I focus on turning ideas into scalable, production-ready products that drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => {
                  track('Hero CTA Clicked', { 
                    button: 'View Projects',
                    destination: 'projects'
                  });
                  scrollToSection("projects");
                }} 
                className="text-lg px-6 py-4"
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => {
                  track('Hero CTA Clicked', { 
                    button: 'My Resume',
                    destination: 'google_drive_resume'
                  });
                  handleResumeView();
                }} 
                className="text-lg px-6 py-4 hover:bg-primary/10 border-primary/50 hover:border-primary group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                View Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => {
                  track('Hero CTA Clicked', { 
                    button: 'Contact Me',
                    destination: 'contact'
                  });
                  scrollToSection("contact");
                }} 
                className="text-lg px-6 py-4 hover:bg-secondary/50"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-6 pt-6">
              <a 
                href="https://github.com/Vatsal1805" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => track('Social Link Clicked', { 
                  platform: 'GitHub',
                  url: 'https://github.com/Vatsal1805',
                  section: 'Hero'
                })}
                className="text-foreground hover:text-primary transition-colors p-2 hover:scale-110"
              >
                <Github className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vatsal-bhavsar-3b30092a7/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => track('Social Link Clicked', { 
                  platform: 'LinkedIn',
                  url: 'https://www.linkedin.com/in/vatsal-bhavsar-3b30092a7/',
                  section: 'Hero'
                })}
                className="text-foreground hover:text-primary transition-colors p-2 hover:scale-110"
              >
                <Linkedin className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a 
                href="#contact"
                onClick={() => {
                  track('Social Link Clicked', { 
                    platform: 'Email',
                    url: '#contact',
                    section: 'Hero'
                  });
                  scrollToSection("contact");
                }}
                className="text-foreground hover:text-primary transition-colors p-2 hover:scale-110"
              >
                <Mail className="w-8 h-8 md:w-10 md:h-10" />
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-full blur-3xl opacity-30 animate-glow-pulse" />
              <img 
                src={profileImg} 
                alt="Vatsal Bhavsar" 
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
