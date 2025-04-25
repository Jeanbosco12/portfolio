import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact, FaJs, FaNodeJs, FaPython,
  FaGitAlt, FaDocker, FaFigma, FaGithub,
  FaMailBulk,
  FaLinkedinIn,
  FaJava,
  FaAngular,
} from 'react-icons/fa';
import {
  SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs, SiNestjs,
  SiPostgresql, SiFirebase, SiJest, SiWebpack,
  SiMysql,
  SiBootstrap,
  SiLaravel,
  SiGithub
} from 'react-icons/si';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import PageLoader from './components/PageLoader';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const projects = [
    {
      id: 1,
      title: "Stage L3",
      description: "Projet de fin de cycle de licence",
      classe: "imgL3",
      category: "frontend",
      technologies: ["React.js", "Node.js", "MariaDB"],
      github: "https://github.com/Jeanbosco12/ccihm",
    },
    {
      id: 2,
      title: "Stage L2",
      description: "Projet de passage en 3e année de licence",
      classe: "imgL2",
      category: "backend",
      technologies: ["Java Swing", "Java", "MySQL"],
      github: "https://github.com/Jeanbosco12/StageL2",
    },
    {
      id: 3,
      title: "Portfolio",
      description: "Portfolio pour présenter mes aptitudes",
      classe: "portfolio",
      category: "frontend",
      technologies: ["React.js", "OpenAI", "LocalStorage"],
      github: "https://github.com/Jeanbosco12/portfolio",
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);


  const Hero = () => {
    return (
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero"
      >
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>Je suis Bosco</h1>
            <h2>Développeur Full Stack</h2>
            <p>Passionné par le développement web et les nouvelles technologies.</p>
            <button className="cta-button"> <a href='#projects' style={{ textDecoration: "none", color: "HighlightText" }}>Voir mes projects</a>  </button>
          </motion.div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          </motion.div>
        </div>
      </motion.section>
    );
  };

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading && <PageLoader />}
      </AnimatePresence>
      <Navbar />
      <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <Hero />

      {/* Section À propos */}
      <motion.section
        className="about"
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Passionné par le développement web, je crée des applications web modernes
              et performantes. Mon approche combine créativité et expertise technique
              pour délivrer des solutions innovantes. J'ai aussi développer mes expériences dans
              la programmation pour approfondir ma capacité sur les algorithmes complexes et avancée
            </p>
          </div>
          <div className="about-stats">
            <motion.div
              className="stat"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>3+</h3>
              <p>Années d'expérience</p>
            </motion.div>
            <motion.div
              className="stat"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>20+</h3>
              <p>Projets réalisés</p>
            </motion.div>
            <motion.div
              className="stat"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>5+</h3>
              <p>Technologies maîtrisées</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section Compétences */}
      <motion.section
        className="skills"
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Mes Compétences</h2>
        <div className="skills-grid">
          <motion.div
            className="skill-category"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Frontend</h3>
            <div className="skills-list">
              <div className="skill-item">
                <FaReact className="skill-icon" />
                <span>React.js</span>
              </div>
              <div className="skill-item">
                <SiNextdotjs className="skill-icon" />
                <span>Next.js</span>
              </div>
              <div className="skill-item">
                <FaJs className="skill-icon" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <SiTypescript className="skill-icon" />
                <span>TypeScript</span>
              </div>
              <div className="skill-item">
                <FaAngular className="skill-icon" />
                <span>Angular.js</span>
              </div>
              <div className="skill-item">
                <SiLaravel className="skill-icon" />
                <span>Laravel</span>
              </div>
              <div className="skill-item">
                <SiTailwindcss className="skill-icon" />
                <span>Tailwind CSS</span>
              </div>
              <div className="skill-item">
                <SiBootstrap className="skill-icon" />
                <span>Bootstrap</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="skill-category"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Backend</h3>
            <div className="skills-list">
              <div className="skill-item">
                <FaNodeJs className="skill-icon" />
                <span>Node.js</span>
              </div>
              <div className="skill-item">
                <SiNestjs className="skill-icon" />
                <span>Nest.js</span>
              </div>
              <div className="skill-item">
                <FaJava className="skill-icon" />
                <span>Java</span>
              </div>
              <div className="skill-item">
                <FaPython className="skill-icon" />
                <span>Python</span>
              </div>
              <div className="skill-item">
                <SiMongodb className="skill-icon" />
                <span>MongoDB</span>
              </div>
              <div className="skill-item">
                <SiMysql className="skill-icon" />
                <span>MySQL</span>
              </div>
              <div className="skill-item">
                <SiPostgresql className="skill-icon" />
                <span>PostgreSQL</span>
              </div>
              <div className="skill-item">
                <SiFirebase className="skill-icon" />
                <span>Firebase</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="skill-category"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Outils & Autres</h3>
            <div className="skills-list">
              <div className="skill-item">
                <FaGitAlt className="skill-icon" />
                <span>Git</span>
              </div>
              <div className="skill-item">
                <FaGithub className="skill-icon" />
                <span>GitHub</span>
              </div>
              <div className="skill-item">
                <FaDocker className="skill-icon" />
                <span>Docker</span>
              </div>
              <div className="skill-item">
                <FaFigma className="skill-icon" />
                <span>Figma</span>
              </div>
              <div className="skill-item">
                <SiJest className="skill-icon" />
                <span>Jest</span>
              </div>
              <div className="skill-item">
                <SiWebpack className="skill-icon" />
                <span>Webpack</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Projets */}
      <motion.section
        className="projects"
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Mes Projets</h2>
        <div className="project-filters">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Tous
          </button>
          <button
            className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('frontend')}
          >
            Frontend
          </button>
          <button
            className={`filter-btn ${activeFilter === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('backend')}
          >
            Backend
          </button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img className={project.classe}/>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer"><SiGithub /> Code source</a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section Contact */}
      <motion.section
        className="contact"
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contactez-moi</h2>
        <div className="contact-content">
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <input type="text" placeholder="Votre nom" required />
            <input type="email" placeholder="Votre email" required />
            <textarea placeholder="Votre message" required></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Envoyer
            </motion.button>
          </motion.form>
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-item">
              <FaMailBulk />
              <p>remifahatsebosco@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
            <div className="contact-item">
              <h3>GitHub</h3>
              <a href="https://github.com/Jeanbosco12" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
