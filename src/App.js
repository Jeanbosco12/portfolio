import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, 
  FaDatabase, FaGitAlt, FaDocker, FaFigma, FaGithub
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiNextdotjs,
  SiPostgresql, SiRedux, SiFirebase, SiJest, SiWebpack
} from 'react-icons/si';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import PageLoader from './components/PageLoader';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  // Effet pour le chargement initial
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Effet pour le thème sombre
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Configuration des projets
  const projects = [
    {
      id: 1,
      title: "Projet 1",
      description: "Description du projet 1",
      image: "project1.jpg",
      category: "frontend",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    // Ajoutez d'autres projets ici
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading && <PageLoader />}
      </AnimatePresence>

      <Navbar />
      <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      {/* Section Hero */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>Bonjour, je suis <span className="highlight">Bosco</span></h1>
            <h2>Développeur Web Full Stack</h2>
            <p>Je crée des expériences web modernes et performantes</p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir mes projets
            </motion.button>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src="/bosco.png" alt="Bosco - Développeur Web Full Stack" />
          </motion.div>
        </div>
      </motion.section>

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
              pour délivrer des solutions innovantes.
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
              <h3>15+</h3>
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
                <FaHtml5 className="skill-icon" />
                <span>HTML5</span>
              </div>
              <div className="skill-item">
                <FaCss3Alt className="skill-icon" />
                <span>CSS3</span>
              </div>
              <div className="skill-item">
                <SiTailwindcss className="skill-icon" />
                <span>Tailwind CSS</span>
              </div>
              <div className="skill-item">
                <SiRedux className="skill-icon" />
                <span>Redux</span>
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
                <SiExpress className="skill-icon" />
                <span>Express.js</span>
              </div>
              <div className="skill-item">
                <FaPython className="skill-icon" />
                <span>Python</span>
              </div>
              <div className="skill-item">
                <FaDatabase className="skill-icon" />
                <span>SQL</span>
              </div>
              <div className="skill-item">
                <SiMongodb className="skill-icon" />
                <span>MongoDB</span>
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
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Voir le projet</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
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
              <h3>Email</h3>
              <p>votre.email@example.com</p>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a href="#" target="_blank" rel="noopener noreferrer">linkedin.com/in/votre-profil</a>
            </div>
            <div className="contact-item">
              <h3>GitHub</h3>
              <a href="#" target="_blank" rel="noopener noreferrer">github.com</a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

export default App;
