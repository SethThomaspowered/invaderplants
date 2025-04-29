import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PlantMatch from './pages/PlantMatch';
import LearnPlants from './pages/LearnPlants';
import CitizenScientist from './pages/CitizenScientist';
import ReportPlant from './pages/ReportPlant';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<PlantMatch />} />
            <Route path="/learn" element={<LearnPlants />} />
            <Route path="/scientist" element={<CitizenScientist />} />
            <Route path="/report" element={<ReportPlant />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;