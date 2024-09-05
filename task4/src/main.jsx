import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

let books = [];
try {
  const data = await fetch("http://localhost:5500/books")
  books = await data.json();
} catch (error) {
  console.log("BOOKS COULDN'T BE LOADED");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App books={books}/>
  </StrictMode>,
)
