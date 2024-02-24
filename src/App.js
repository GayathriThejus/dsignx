
import Admin from './pages/Admin';
import SignApproval from './pages/SignApproval';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
   
      <Route path="/" element={<Admin />} />
      <Route path="customer/.jpg" element={<SignApproval />} />
    </Routes>
    
  </Router>
  );
}

export default App;
