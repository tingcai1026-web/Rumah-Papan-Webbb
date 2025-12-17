import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { EntryPage } from './pages/EntryPage';
import { Home } from './pages/Home';
import { StoryLog } from './pages/About/StoryLog';
import { Environment, Products, Rental } from './pages/AboutPages';
import { ActivityExperience, Accommodation, SkillExchange, TourismMap } from './pages/VillagePages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about/story" element={<StoryLog />} />
          <Route path="/about/environment" element={<Environment />} />
          <Route path="/about/products" element={<Products />} />
          <Route path="/about/rental" element={<Rental />} />
          <Route path="/village/activities" element={<ActivityExperience />} />
          <Route path="/village/accommodation" element={<Accommodation />} />
          <Route path="/village/skill-exchange" element={<SkillExchange />} />
          <Route path="/village/map" element={<TourismMap />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
