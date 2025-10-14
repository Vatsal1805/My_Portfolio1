const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "EJS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "WebSockets"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose"]
    },
    {
      title: "Tools & Integrations",
      skills: ["Git", "GitHub", "Postman", "VS Code", "OpenAI API", "Twilio", "Nodemailer"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-3 py-2 bg-secondary rounded-md text-sm text-secondary-foreground hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
