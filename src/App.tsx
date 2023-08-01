// App.tsx
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
