import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages'; // Sua página inicial
import SignInPage from './pages/signin'; // Sua página de cadastro
import SuccessPage from './components/SucessPage/SucessPage';
import Login from './components/LoginPage/Login'; // Importe a nova tela de login

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;




