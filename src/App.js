import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//PAGES
import Departments from './components/pages/Departments';
import Home from './components/pages/Home';
import Employees from './components/pages/Employees';
import Products from './components/pages/Products';

//LAYOUT
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';



function App() {
  return (
    <Router>
      <Navbar />
      
      <Container customClass="min-height">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Departments" element={<Departments />} />
          <Route path="/Employees" element={<Employees />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
