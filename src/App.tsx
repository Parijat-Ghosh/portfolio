import { useState, useEffect, useRef } from "react";
import {
  Terminal,
  Code2,
  GraduationCap,
  BrainCircuit,
  Database,
  Globe,
  Cpu,
  Zap,
  ArrowUpRight,
  Mail,
  Box,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  const fullText =
    'const developer = { name: "Parijat Ghosh", passion: "code", craft: "seamless softwares" };';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "AI assistant using OPENAI API",
      description:
        "AI-powered personal assistant with OpenAI & MERN stack. Chat, analyze images, secure subs—50% faster responses.",
      tech: [
        "OPENAI API",
        "React",
        "Node.js",
        "MongoDB",
        "cloudinary",
        "Razorpay",
        "REST APIs",
        "JWT",
        "Tailwind CSS",
      ],
      metrics: "50% latency reduction, maintaining 99% uptime",
      image: "/projects/chat-interface.png",
      github: "https://github.com/Parijat-Ghosh/AI",
    },
    {
      title: "Stock Management System",
      description:
        "A full-stack web application for inventory tracking and secure user access. Features real-time stock updates, JWT authentication, and a responsive React dashboard.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "REST APIs",
        "JWT",
        "Tailwind CSS",
        "Chart.js",
      ],
      metrics: "<1s real-time updates",
      image: "projects/stocks.png",
      github: "https://github.com/Parijat-Ghosh/stock-management-system",
    },
    {
      title: "Wanderlust- book unique stays",
      description:
        "A travel-inspired platform designed to help users discover beautiful and unique stays around the world.",
      tech: [
        "EJS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Bootstrap",
        "Cloudinary",
        "MapTiler API",
      ],
      metrics: "Can manage 1000+ listings",
      image: "projects/wanderlust.png",
      github: "https://github.com/Parijat-Ghosh/wanderlust",
    },
  ];

  const skills = {
    Languages: ["TypeScript", "JavaScript", "Python", "Java", "C"],
    Frontend: ["React", "Next.js", "Tailwind", "Bootstrap"],
    Backend: ["Node.js", "Express.js", , "REST APIs", "WebSocket"],
    Infrastructure: ["Kubernetes", "Docker", "AWS", "Terraform", "CI/CD"],
    Databases: ["PostgreSQL", "Redis", "MongoDB"],
    Tools: [
      "Git",
      "Linux",
      "Docker",
      "Vercel",
      "Razorpay",
      "Cloudinary",
      "MapTiler API",
      "JWT",
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div className="noise" />
      <div className="scan-line" />

      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.04), transparent 70%)`,
        }}
      />

      <div className="fixed inset-0 dot-pattern opacity-30" />

      <nav className="fixed top-0 w-full z-50 glass-morphism">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5" />
            <span className="font-mono font-bold tracking-tight">
              ~/.portfolio
            </span>
          </div>
          <div className="flex gap-8 font-mono text-sm">
            <a
              href="#about"
              className="link-underline hover:text-gray-300 transition-colors">
              about
            </a>
            <a
              href="#work"
              className="link-underline hover:text-gray-300 transition-colors">
              work
            </a>
            <a
              href="#skills"
              className="link-underline hover:text-gray-300 transition-colors">
              skills
            </a>
            <a
              href="#contact"
              className="link-underline hover:text-gray-300 transition-colors">
              contact
            </a>
          </div>
        </div>
      </nav>

      {/* *************************************************************** */}

      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-6 pt-20 liquid-bg relative">
        <div className="max-w-7xl w-full relative z-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <div
                className="mb-8 opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                }}>
                <div className="inline-flex items-center gap-2 glass-morphism px-4 py-2 rounded-full text-sm font-mono">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-300">
                    Available for opportunities
                  </span>
                </div>
              </div>

              <h1
                className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}>
                Parijat
                <br />
                <span className="text-gradient-animated">Ghosh</span>
              </h1>

              <div
                className="terminal-window max-w-3xl mb-12 opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: "0.6s",
                  animationFillMode: "forwards",
                }}>
                <div className="pt-6">
                  <div className="text-gray-500 mb-2">
                    <span className="text-green-400">→</span> cat
                    introduction.js
                  </div>
                  <div className="text-white">
                    {typedText}
                    {cursorVisible && (
                      <span className="ml-1 inline-block w-2 h-5 bg-white align-middle" />
                    )}
                  </div>
                </div>
              </div>

              <p
                className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: "0.8s",
                  animationFillMode: "forwards",
                }}>
                Building scalable systems and elegant interfaces. Specializing
                in distributed systems, real-time architectures, and performance
                optimization.
              </p>

              <div
                className="flex gap-4 opacity-0 animate-fadeInUp"
                style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
                <a
                  href="/resume/Parijat_Ghosh_Resume01.pdf"
                  download="Parijat_Ghosh_Resume01.pdf">
                  <button className="magnetic-btn">Download Resume</button>
                </a>
              </div>

              <div
                className="mt-20 mb-5 flex gap-7 opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: "1.2s",
                  animationFillMode: "forwards",
                }}>
                <a
                  href="https://github.com/Parijat-Ghosh"
                  className="glass-morphism glass-hover w-12 h-12 rounded-lg flex items-center justify-center">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/parijat-ghosh-53058730b/"
                  className="glass-morphism glass-hover w-12 h-12 rounded-lg flex items-center justify-center">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:gparijat4@gmail.com"
                  className="glass-morphism glass-hover w-12 h-12 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div
              className="hidden lg:block opacity-0 animate-fadeInRight"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <div className="mb-4 font-mono text-gray-500 text-sm">
                <span className="text-green-400">→</span> display myself.jpg
              </div>
              <div className="profile-image-card">
                <div className="w-72 h-72 rounded-2xl overflow-hidden relative">
                  <img
                    src="/Me3.jpg"
                    alt="Parijat Ghosh"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center px-6 py-32 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-4 font-mono text-gray-500 text-sm">
            <span className="text-green-400">→</span> whoami
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-20 tracking-tighter">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 glass-morphism rounded-2xl p-10 glow-effect">
              <h3 className="text-3xl font-bold mb-6">Full-Stack Engineer</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                <p>
                  I architect and build high-performance systems that scale.
                  With expertise spanning from low-level systems programming to
                  modern web applications, I bridge the gap between complex
                  infrastructure and intuitive user experiences.
                </p>
                <p>
                  My projects often integrate APIs, payment systems like
                  Razorpay, geolocation features, and AI-based solutions to
                  deliver real-world impact. I enjoy solving complex problems
                  and optimizing workflows with clean, efficient code.
                </p>
                <p>
                  Beyond coding, I contribute to open-source projects, explore
                  AI and cloud technologies, and experiment with innovative
                  solutions for human welfare, such as health and
                  disaster-relief platforms.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-morphism rounded-2xl p-8 glow-effect">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6" />
                  <h4 className="text-xl font-bold">Education</h4>
                </div>
                <p className="text-3xl font-bold text-gradient">B.Tech CSE</p>
                <p className="text-gray-400 text-sm mt-2">IEM • 2024 - 2028</p>
              </div>

              <div className="glass-morphism rounded-2xl p-8 glow-effect">
                <div className="flex items-center gap-3 mb-4">
                  <Box className="w-6 h-6" />
                  <h4 className="text-xl font-bold">Projects</h4>
                </div>
                <p className="text-3xl font-bold text-gradient">10+</p>
                <p className="text-gray-400 text-sm mt-2">
                  Delivered Solutions
                </p>
              </div>

              <div className="glass-morphism rounded-2xl p-8 glow-effect">
                <div className="flex items-center gap-3 mb-4">
                  <BrainCircuit className="w-6 h-6" />
                  <h4 className="text-xl font-bold">AI </h4>
                </div>
                <p className="text-3xl font-bold text-gradient">5+</p>
                <p className="text-gray-400 text-sm mt-2">AI Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="min-h-screen px-6 py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 font-mono text-gray-500 text-sm">
            <span className="text-green-400">→</span> ls projects/
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-20 tracking-tighter">
            Featured <span className="text-gradient">Work</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="project-card-enhanced group"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
                  e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
                }}>
                <div className="relative z-10">
                  <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden bg-black/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="glass-morphism p-2 rounded-lg hover:bg-white/10 transition-all">
                        <FaGithub className="w-5 h-5" />
                      </a>
                      {/* <div className="glass-morphism p-2 rounded-lg group-hover:bg-white/10 transition-all">
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div> */}
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism text-sm font-mono">
                      <Zap className="w-4 h-4" />
                      {project.metrics}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-lg glass-morphism text-sm font-mono hover:bg-white/10 transition-all">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen px-6 py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 font-mono text-gray-500 text-sm">
            <span className="text-green-400">→</span> cat skills.json
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-20 tracking-tighter">
            Tech <span className="text-gradient">Stack</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <div
                key={category}
                className="skill-category-card group"
                style={{ animationDelay: `${catIndex * 0.15}s` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg glass-morphism group-hover:bg-white/10 transition-all">
                    {category === "Languages" && <Code2 className="w-6 h-6" />}
                    {category === "Frontend" && <Globe className="w-6 h-6" />}
                    {category === "Backend" && <Terminal className="w-6 h-6" />}
                    {category === "Infrastructure" && (
                      <Cpu className="w-6 h-6" />
                    )}
                    {category === "Databases" && (
                      <Database className="w-6 h-6" />
                    )}
                    {category === "Tools" && <Zap className="w-6 h-6" />}
                  </div>
                  <h3 className="text-2xl font-bold font-mono">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, idx) => (
                    <span
                      key={skill}
                      className="skill-pill-enhanced"
                      style={{
                        animationDelay: `${catIndex * 0.15 + idx * 0.05}s`,
                      }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="mb-4 font-mono text-gray-500 text-sm">
            <span className="text-green-400">→</span> ./connect.sh
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter">
            Let's <span className="text-gradient">Build</span>
          </h2>

          <p className="text-2xl text-gray-400 mb-16 max-w-2xl leading-relaxed">
            Always open to discussing innovative projects, technical challenges,
            or collaboration opportunities. Let's create something
            extraordinary.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:gparijat4@gmail.com"
              className="glass-morphism rounded-2xl p-8 glow-effect group cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg glass-morphism flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-mono">Email</div>
                  <div className="text-lg font-bold">gparijat4@gmail.com</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            <a
              href="https://github.com/Parijat-Ghosh"
              className="glass-morphism rounded-2xl p-8 glow-effect group cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg glass-morphism flex items-center justify-center">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-mono">GitHub</div>
                  <div className="text-lg font-bold">Parijat-Ghosh</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/parijat-ghosh-53058730b/"
              className="glass-morphism rounded-2xl p-8 glow-effect group cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg glass-morphism flex items-center justify-center">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-mono">
                    LinkedIn
                  </div>
                  <div className="text-lg font-bold">Parijat Ghosh</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            <a
              href="https://x.com/Sprizen01"
              className="glass-morphism rounded-2xl p-8 glow-effect group cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg glass-morphism flex items-center justify-center">
                  <FaXTwitter className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-mono">
                    X (Formerly Twitter)
                  </div>
                  <div className="text-lg font-bold">@Sprizen01</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-mono text-sm">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>© 2025 Parijat Ghosh.</span>
            </div>
            <div className="flex gap-6">
              <span>Made by -- Parijat Ghosh with care.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
