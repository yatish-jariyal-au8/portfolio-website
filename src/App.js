import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header'
import Home from "./components/Home"
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Home/>
      <About />
      <Skills />
      <Projects/>
      <Contact />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
