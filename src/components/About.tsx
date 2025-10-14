import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Built multiple full-stack apps integrating AI-based features"
    },
    {
      icon: Rocket,
      title: "Real-Time Systems",
      description: "Experienced in real-time updates using WebSockets"
    },
    {
      icon: Users,
      title: "Clean Architecture",
      description: "Strong focus on scalability, clean code, and responsive design"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a passionate full-stack developer focused on building high-performance, 
            user-centric web applications. I enjoy turning ideas into production-ready 
            products through clean architecture, responsive UI, and optimized backend systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-lg border border-border hover-lift hover:border-primary/50 transition-all group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <item.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
