import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [messages, setMessages] = useState([
    {
      text: `Je suis l'assistant de Bosco. Je peux vous parler de ses compétences, projets, expériences et plus encore. Comment puis-je vous aider ?`,
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const knowledgeBase = {

    skills: {
      frontend: {
        keywords: ['frontend', 'front-end', 'react', 'javascript', 'html', 'css', 'interface', 'ui', 'ux'],
        response: "Bosco maîtrise plusieurs technologies frontend :\n- React.js avec hooks et context API\n- JavaScript (ES6+)\n- HTML5 et CSS3\n- TailwindCSS pour le styling\n- Responsive design\n- Optimisation des performances"
      },
      backend: {
        keywords: ['backend', 'back-end', 'node', 'express', 'api', 'server'],
        response: "En backend, Bosco est compétent en :\n- Node.js et Express.js\n- Création d'APIs RESTful\n- Gestion des bases de données\n- Sécurité et authentification\n- Optimisation des requêtes"
      },
      database: {
        keywords: ['base de données', 'database', 'mongodb', 'sql', 'nosql'],
        response: "Bosco a de l'expérience avec :\n- MongoDB (NoSQL)\n- MySQL/PostgreSQL\n- Modélisation de données\n- Optimisation des requêtes\n- Gestion des migrations"
      },
      devops: {
        keywords: ['devops', 'deployment', 'docker', 'git', 'ci/cd'],
        response: "En DevOps, Bosco utilise :\n- Docker pour la containerisation\n- Git pour le versioning\n- CI/CD avec GitHub Actions\n- Déploiement sur différents environnements"
      }
    },
    // Expérience professionnelle
    experience: {
      keywords: ['expérience', 'expérience', 'parcours', 'carrière', 'travail', 'stage'],
      response: "Bosco a une expérience variée :\n- Stage L3 à la CCI Haute Matiatra\n- Stage L2 en développement\n- Projets personnels et freelance\n- Participation à des hackathons"
    },
    // Projets
    projects: {
      keywords: ['projets', 'portfolio', 'travaux', 'réalisations', 'applications'],
      response: "Parmi ses projets notables :\n- Applications web full-stack\n- Sites e-commerce\n- Systèmes de gestion\n- Projets open source\n- Solutions d'entreprise"
    },
    // Formation
    education: {
      keywords: ['formation', 'études', 'diplôme', 'école', 'université'],
      response: "Formation académique :\n- Licence en Informatique\n- Formation continue en développement web\n- Certifications en technologies modernes"
    },
    // Contact
    contact: {
      keywords: ['contact', 'contacter', 'email', 'téléphone', 'coordonnées', 'linkedin', 'github'],
      response: "Vous pouvez contacter Bosco via :\n- Email : bosco@example.com\n- LinkedIn : linkedin.com/in/bosco\n- GitHub : github.com/bosco"
    },
    // Technologies spécifiques
    technologies: {
      react: {
        keywords: ['react', 'react.js', 'hooks', 'context'],
        response: "Bosco maîtrise React.js avec :\n- Hooks (useState, useEffect, useContext)\n- Context API\n- React Router\n- Gestion d'état\n- Composants réutilisables"
      },
      node: {
        keywords: ['node', 'node.js', 'express', 'api'],
        response: "Avec Node.js, Bosco peut :\n- Créer des APIs RESTful\n- Gérer l'authentification\n- Optimiser les performances\n- Intégrer des bases de données"
      },
      mongodb: {
        keywords: ['mongodb', 'mongo', 'nosql'],
        response: "Expérience MongoDB :\n- Modélisation de données\n- Requêtes complexes\n- Indexation\n- Aggregation pipeline"
      }
    },
    // Par défaut
    default: {
      response: "Je ne suis pas sûr de comprendre votre question. Voici quelques sujets sur lesquels je peux vous renseigner :\n- Compétences techniques (frontend, backend, etc.)\n- Expérience professionnelle\n- Projets réalisés\n- Formation\n- Technologies spécifiques\n- Coordonnées"
    }
  };

  const findResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    let bestMatch = { score: 0, response: knowledgeBase.default.response };

    // Fonction helper pour calculer le score
    const calculateScore = (keywords) => {
      if (!keywords || !Array.isArray(keywords)) return 0;
      return keywords.filter(keyword => lowerMessage.includes(keyword)).length;
    };

    // Recherche dans toutes les catégories
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (category === 'default') continue;

      // Vérifier si c'est une sous-catégorie
      if (typeof data === 'object' && !Array.isArray(data)) {
        for (const [subData] of Object.entries(data)) {
          if (subData && subData.keywords) {
            const score = calculateScore(subData.keywords);
            if (score > bestMatch.score) {
              bestMatch = { score, response: subData.response };
            }
          }
        }
      } else if (data && data.keywords) {
        // Catégorie simple
        const score = calculateScore(data.keywords);
        if (score > bestMatch.score) {
          bestMatch = { score, response: data.response };
        }
      }
    }

    return bestMatch.response;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Ajouter le message de l'utilisateur
    setMessages(prev => [...prev, {
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    }]);

    setIsTyping(true);
    setInputMessage('');

    // Simuler le temps de réponse
    setTimeout(() => {
      const botResponse = findResponse(inputMessage);
      setMessages(prev => [...prev, {
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      {!isOpen ? (
        <button 
          className="chatbot-toggle"
          onClick={() => setIsOpen(true)}
        >
          <FaRobot className="chatbot-icon" />
        </button>
      ) : (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <FaRobot className="chatbot-icon" />
              <h3>Assistant de Bosco</h3>
            </div>
            <button 
              className="close-button"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.isBot ? 'bot' : 'user'}`}
              >
                <div className="message-content">
                  {message.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <div className="message-timestamp">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="message-content">
                  <span className="typing-indicator">Bosco tape...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Posez-moi une question sur Bosco..."
              className="message-input"
              disabled={isTyping}
            />
            <button 
              type="submit" 
              className="send-button"
              disabled={isTyping}
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 