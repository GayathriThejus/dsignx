
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import SignApproval from './pages/SignApproval';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
   
      <Route path="/" element={<Admin />} />
      <Route path="customer/.jpg" element={<SignApproval />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    
  </Router>
  );
}

export default App;
