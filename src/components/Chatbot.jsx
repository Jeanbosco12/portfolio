import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';
import './Chatbot.css';

// Nouvelle base FAQ : questions + réponses + tags
const faq = [
  {
    question: "Quelles sont les compétences frontend de Bosco ?",
    answer: "Bosco maîtrise React.js, HTML5, CSS3, TailwindCSS et le design responsive.",
    tags: ['frontend', 'react', 'html', 'css', 'ui', 'ux', 'tailwind']
  },
  {
    question: "Quel est le parcours professionnel de Bosco ?",
    answer: "Bosco a effectué plusieurs stages, a travaillé sur des projets freelance et a participé à des hackathons.",
    tags: ['expérience', 'parcours', 'carrière', 'stage', 'travail']
  },
  {
    question: "Quels sont les projets réalisés par Bosco ?",
    answer: "Bosco a créé des applications web, des sites e-commerce, et des systèmes de gestion.",
    tags: ['projets', 'portfolio', 'réalisations', 'applications']
  },
  {
    question: "Comment contacter Bosco ?",
    answer: "Vous pouvez contacter Bosco par email à bosco@example.com, sur LinkedIn ou sur GitHub.",
    tags: ['contact', 'email', 'téléphone', 'linkedin', 'github']
  },
  {
    question: "Quelles technologies utilise Bosco ?",
    answer: "Bosco utilise React.js, Node.js, MongoDB, Docker, Git et GitHub Actions.",
    tags: ['technologies', 'react', 'node', 'mongodb', 'docker', 'git', 'ci/cd']
  },
  {
    question: "Quelle est la formation de Bosco ?",
    answer: "Bosco possède une Licence en Informatique et des certifications en développement web moderne.",
    tags: ['formation', 'études', 'diplôme', 'université']
  }
];

// Fonction fuzzy pour trouver la meilleure réponse
function getBestAnswer(userMessage) {
  const msg = userMessage.toLowerCase();
  let bestScore = 0;
  let bestAnswer = null;

  faq.forEach(({answer, tags}) => {
    let score = tags.reduce((acc, tag) => msg.includes(tag) ? acc + 1 : acc, 0);
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = answer;
    }
  });

  // Si aucune correspondance significative n'est trouvée, proposer les questions disponibles
  if (bestScore === 0) {
    return (
      `Je n'ai pas compris votre question.\nEssayez par exemple :\n` +
      faq.map(f => `- ${f.question}`).join('\n')
    );
  }

  return bestAnswer;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatbotMessages');
    return saved ? JSON.parse(saved) : [
      {
        text: `Je suis l'assistant de Bosco. Je peux vous parler de ses compétences, expériences, projets et plus encore.\nComment puis-je vous aider ?`,
        isBot: true,
        timestamp: new Date()
      }
    ];
  });
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    localStorage.setItem('chatbotMessages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    setInputMessage('');

    setTimeout(() => {
      const botResponse = getBestAnswer(userMessage.text);
      setMessages(prev => [...prev, {
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="chatbot-container">
      {!isOpen ? (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <FaRobot className="chatbot-icon" />
        </button>
      ) : (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <FaRobot className="chatbot-icon" />
              <h3>Assistant de Bosco</h3>
            </div>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.isBot ? 'bot' : 'user'}`}>
                <div className="message-content">
                  {message.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <div className="message-timestamp">
                  {new Date(message.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="message-content typing-indicator">Bosco tape...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input" onSubmit={handleSendMessage}>
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Posez-moi une question sur Bosco..."
              className="message-input"
              disabled={isTyping}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e);
                }
              }}
            />
            <button type="submit" className="send-button" disabled={isTyping}>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;