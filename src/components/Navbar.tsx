import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">VB</div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("skills")} className="text-foreground hover:text-primary transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection("projects")} className="text-foreground hover:text-primary transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
            Contact
          </button>
        </div>

        <Button 
          variant="hero" 
          onClick={() => scrollToSection("contact")}
          className="hidden md:inline-flex"
        >
          Hire Me
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
