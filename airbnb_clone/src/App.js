
import './App.css';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Home from './components/Home';

import Footer from './components/HomeComponents/Footer';
import SearchPage from './components/SearchComponents/SearchPage'
import Header from './components/HomeComponents/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          
           
          <Route path="/searchPage" element={<SearchPage/>}/>

          <Route path="/" element={<Home/>}/>
            
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;


