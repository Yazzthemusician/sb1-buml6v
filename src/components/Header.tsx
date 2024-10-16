import React from 'react';
import { Home, Users, BookOpen, MessageSquare, User } from 'lucide-react';
import { translations } from '../translations';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  user: { username: string; role: string } | null;
  onLogout: () => void;
  language: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, user, onLogout, language }) => {
  const t = translations[language];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary dark:text-primary">Labor iConnect</h1>
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex items-center space-x-2 ${currentPage === 'home' ? 'text-primary dark:text-primary' : 'text-gray-600 dark:text-gray-300'}`}
          >
            <Home size={20} />
            <span>{t.home}</span>
          </button>
          <button
            onClick={() => setCurrentPage('membership')}
            className={`flex items-center space-x-2 ${currentPage === 'membership' ? 'text-primary dark:text-primary' : 'text-gray-600 dark:text-gray-300'}`}
          >
            <Users size={20} />
            <span>{t.membership}</span>
          </button>
          <button
            onClick={() => setCurrentPage('blog')}
            className={`flex items-center space-x-2 ${currentPage === 'blog' ? 'text-primary dark:text-primary' : 'text-gray-600 dark:text-gray-300'}`}
          >
            <BookOpen size={20} />
            <span>{t.blog}</span>
          </button>
          <button
            onClick={() => setCurrentPage('forum')}
            className={`flex items-center space-x-2 ${currentPage === 'forum' ? 'text-primary dark:text-primary' : 'text-gray-600 dark:text-gray-300'}`}
          >
            <MessageSquare size={20} />
            <span>{t.forum}</span>
          </button>
        </div>
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 dark:text-gray-300">Welcome, {user.username}</span>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="flex items-center space-x-2 bg-primary text-white px-3 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300"
            >
              <User size={20} />
              <span>Dashboard</span>
            </button>
            <button
              onClick={onLogout}
              className="text-accent hover:text-accent-dark transition-colors duration-300"
            >
              Log out
            </button>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;