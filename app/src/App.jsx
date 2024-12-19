import { useState } from 'react'
import Index from './pages/Index';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import './output.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}

export default App
