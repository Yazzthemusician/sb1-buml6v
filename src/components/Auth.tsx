import React, { useState } from 'react';
import { LogIn, UserPlus } from 'lucide-react';

interface AuthProps {
  onLogin: (user: { username: string; role: string }) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular autenticación (en una implementación real, esto sería una llamada a la API)
    if (username && password) {
      onLogin({ username, role: username.includes('admin') ? 'admin' : 'worker' });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
        {isLogin ? <LogIn className="mr-2" /> : <UserPlus className="mr-2" />}
        {isLogin ? 'Iniciar sesión' : 'Registrarse'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 dark:text-gray-300 mb-2">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-2">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          {isLogin ? 'Iniciar sesión' : 'Registrarse'}
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
        {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="ml-1 text-blue-500 hover:text-blue-600 focus:outline-none"
        >
          {isLogin ? 'Regístrate' : 'Inicia sesión'}
        </button>
      </p>
    </div>
  );
};

export default Auth;