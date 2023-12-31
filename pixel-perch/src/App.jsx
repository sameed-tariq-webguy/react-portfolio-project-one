import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import Navigation from './components/Navigation'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer';


function App() {
  

  return (
    <>
      <Navigation />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
