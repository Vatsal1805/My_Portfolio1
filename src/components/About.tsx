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
    <section id="about" className="py-24 md:py-32 bg-card scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
           I’m a Full-Stack Developer specializing in the MERN stack, passionate about creating scalable and high-performance web applications. I focus on writing clean, maintainable code, designing responsive and intuitive user interfaces, and implementing real-time features to deliver seamless user experiences. By combining robust backend architecture with thoughtful front-end design, I transform ideas into production-ready solutions that solve real-world problems. <br/>
           <br />
          Let’s collaborate to build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-lg border border-border hover-lift hover:border-primary/50 transition-all group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <item.icon className="w-16 h-16 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
