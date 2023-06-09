import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Teams from './components/pages/teams/Teams';
import Home from './components/pages/home/Home';
import NavigationBar from './components/common/navigationBar/NavigationBar';
import { TeamsGeneratorProvider } from './context/teamsGeneratorContext';
import { AnimatePresence } from "framer-motion";
import Footer from './components/common/footer/Footer';
import ReactGA from 'react-ga';
import Table from './components/pages/table/Table';
const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID as string;
ReactGA.initialize(GA_TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="app">
      <TeamsGeneratorProvider>
        <BrowserRouter>
          <NavigationBar />
          <AnimatePresence >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/table" element={<Table />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </BrowserRouter>
      </TeamsGeneratorProvider>

    </div>
  );
}

export default App;
