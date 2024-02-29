// routing v6
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from './Home'
import About from './About'
import Services from './Service'
import Contact from './Contact'
import Todo from "./Todo";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/todo" element={<Todo/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
