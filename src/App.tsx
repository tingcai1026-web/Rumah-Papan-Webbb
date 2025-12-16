import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { StoryLog } from './pages/About/StoryLog';
import { Environment, Products, Rental } from './pages/AboutPages';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg font-sans selection:bg-primary selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/story" element={<StoryLog />} />
            <Route path="/about/environment" element={<Environment />} />
            <Route path="/about/products" element={<Products />} />
            <Route path="/about/rental" element={<Rental />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
