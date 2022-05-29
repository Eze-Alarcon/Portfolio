import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import PortfolioIndex from './components/Portfolio-index';
import Contact from './components/Contact'
import Manage from './components/projects/Manage';
import Bookmark from './components/projects/Bookmark';
import Fylo from './components/projects/Fylo';
import Insure from './components/projects/Insure';

import './css/contact.css'
import './css/details.css'
import './css/index.css'
import './css/portfolio.css'


import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Header/>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/index" element={<PortfolioIndex/>} />
					<Route path="/contact" element={<Contact/>} />
						<Route path="/project/manage" element={<Manage/>} />
						<Route path="/project/bookmark" element={<Bookmark/>} />
						<Route path="/project/fylo" element={<Fylo/>} />
						<Route path="/project/insure" element={<Insure/>} />
				</Routes>
			<Footer/>
		</BrowserRouter>
    </div>
  );
}

export default App;
