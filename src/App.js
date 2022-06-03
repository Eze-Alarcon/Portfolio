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

// Projects
// import Manage from './components/projects/Manage';
// import Bookmark from './components/projects/Bookmark';
// import Fylo from './components/projects/Fylo';
// import Insure from './components/projects/Insure';

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

						<Route path="/project/:idProject" element={<ProjectDetail/>} />
						{/* <Route path="/project/manage" element={<Manage/>} />
						<Route path="/project/bookmark" element={<Bookmark/>} />
						<Route path="/project/fylo" element={<Fylo/>} />
						<Route path="/project/insure" element={<Insure/>} /> */}
				</Routes>
			</ScrollToTop>
			<Footer/>
		</Language>
		</BrowserRouter>
    </div>
  );
}

export default App;
