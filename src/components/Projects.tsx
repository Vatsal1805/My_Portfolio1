import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Home Utility Management System",
      description: "MERN app for booking plumbing, carpentry, and electrical services with real-time updates, admin dashboard, and AI recommendations.",
      tech: ["React", "Node.js", "MongoDB", "Express", "OpenAI API"],
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      title: "Food Delivery App",
      description: "Video-based food showcase system using Node.js, Express, and GridFS for media handling.",
      tech: ["Node.js", "Express", "MongoDB", "GridFS"],
      gradient: "from-orange-500/20 to-yellow-500/20"
    },
    {
      title: "Zomato Reel Clone",
      description: "A full-stack social food discovery app with video feed UI and backend integration.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      gradient: "from-yellow-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg border border-border overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <div className="text-6xl opacity-50">💻</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-xs rounded-md text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
