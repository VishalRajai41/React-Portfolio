import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from 'react-particles-js';

const App = () => {
  return(
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles:{
            number:{
              value:30,
              density:{
                enable:true,
                value_area:900
              }
            },
            shape:{
              type:"square",
              stroke:{
                width:6,
                color:"#f9ab00"
              }
            }
          }
        }}
       />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Team />  
      <Contact />
      <Footer />
    </>
  );
};
export default App;
