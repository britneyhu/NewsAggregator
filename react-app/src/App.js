import './App.css';

import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/NewsAggregator" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App;
