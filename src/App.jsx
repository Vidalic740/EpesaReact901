import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; // Your login component
import Dashboard from './pages/Dashboard';
import Category from './pages/Category';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Login page */}
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />}>
          {/* Define the Category Route inside the Dashboard */}
          <Route path="category" element={<Category />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
