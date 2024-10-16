import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { translations } from '../translations';

interface ChatBotProps {
  language: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ language }) => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');
  const t = translations[language];

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      // Simular respuesta del chatbot (en una implementación real, esto sería una llamada a la API)
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thank you for your message. A representative will respond soon.", isUser: false }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-md w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
        <MessageSquare className="mr-2" /> {t.chatbot}
      </h2>
      <div className="h-64 overflow-y-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded p-2">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.isUser ? 'bg-primary text-white' : 'bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
          placeholder={t.writeMessage}
        />
        <button
          onClick={handleSend}
          className="bg-primary text-white p-2 rounded-r-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;