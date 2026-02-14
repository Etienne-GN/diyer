import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarListPage from './pages/CarListPage';
import CarDetailPage from './pages/CarDetailPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cars">My Garage</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarListPage />} />
        <Route path="/cars/:carId" element={<CarDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;