import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('main.tsx se está ejecutando')

const rootElement = document.getElementById('root')
console.log('Elemento root:', rootElement)

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  console.log('App ha sido renderizada')
} else {
  console.error('No se encontró el elemento root')
}