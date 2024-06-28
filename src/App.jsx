import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import News from './components/News';
import Projects from './components/Projects';
import Events from './components/Events';
import Education from './components/Education';
import NewsDetailPage from './components/NewsDetail';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Reports from './components/Reports';
import Donate from './components/Donate';
import Volunteer from './components/Volunteer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/naturenest/" element={<Home />} />
          <Route path="naturenest/news" element={<News />} />
          <Route path="naturenest/projects" element={<Projects />} />
          <Route path="naturenest/projects/:id" element={<ProjectDetail />} />
          <Route path="naturenest/events" element={<Events />} />
          <Route path="naturenest/news/:id" element={<NewsDetailPage />} />
          <Route path="naturenest/contact" element={<Contact />} />
          <Route path="naturenest/donate" element={<Donate />} />
          <Route path="naturenest/volunteer" element={<Volunteer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <AboutUs />
    <News />
    <Education />
    <Projects />
    <Reports />
    <Events />   
  </>
);

export default App;
