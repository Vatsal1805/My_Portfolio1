import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleResumeDownload = () => {
    const resumeUrl = "/resume/Vatsal_Bhavsar_Resume.pdf";
    
    // Create a temporary link to test if file exists
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Check if we can access the file
    fetch(resumeUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // File exists, open it
          window.open(resumeUrl, '_blank');
        } else {
          throw new Error('Resume file not found');
        }
      })
      .catch(() => {
        // Fallback: Provide contact information
        const contactMessage = `Resume is currently being updated. 
        
Please reach out to me directly:
📧 Email: vatsalbhavsar2011@gmail.com
💼 LinkedIn: linkedin.com/in/vatsal-bhavsar-3b30092a7/
🔗 GitHub: github.com/Vatsal1805

I'll be happy to share my latest resume with you!`;
        
        if (confirm(contactMessage + "\n\nWould you like to send me an email now?")) {
          scrollToSection("contact");
        }
      });
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
              <Button variant="hero" size="lg" onClick={() => scrollToSection("projects")} className="text-lg px-6 py-4">
                View Projects
              </Button>
              <Button variant="outline" size="lg" onClick={handleResumeDownload} className="text-lg px-6 py-4 hover:bg-primary/10 border-primary/50 hover:border-primary group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                My Resume
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")} className="text-lg px-6 py-4 hover:bg-secondary/50">
                Contact Me
              </Button>
            </div>

            <div className="flex gap-6 pt-6">
              <a 
                href="https://github.com/Vatsal1805" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors p-2 hover:scale-110"
              >
                <Github className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vatsal-bhavsar-3b30092a7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors p-2 hover:scale-110"
              >
                <Linkedin className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a 
                href="#contact"
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
