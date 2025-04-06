import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home';
import LoanApplicationPage from './loanApplicationPage';
import NotFoundPage from './notFoundPage';
import SuccessPage  from './success';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      <Route path="/loan" element={<LoanApplicationPage />} />
      <Route path="/success" element={<SuccessPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
      
      </Routes>
    </Router>
  );
}

export default App;
