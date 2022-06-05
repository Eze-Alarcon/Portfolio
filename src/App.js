import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Basic components
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './components/Home';
import PortfolioIndex from './components/PortfolioIndex';
import Contact from './components/Contact'
import Certificates from './components/Certificates';

// Content call
import Language from './components/LanguageContext'
import ProjectDetail from './components/projects/ProjectDetail';


function App() {
  return (
    <div className="App">
		<BrowserRouter>
		<Language>
			<Header/>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/index" element={<PortfolioIndex/>} />
					<Route path="/contact" element={<Contact/>} />
					<Route path="/certificates" element={<Certificates/>} />
					<Route path="/project/:idProject" element={<ProjectDetail/>} />
				</Routes>
			</ScrollToTop>
			<Footer/>
		</Language>
		</BrowserRouter>
    </div>
  );
}

export default App;
