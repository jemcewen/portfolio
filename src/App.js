import Navigation from './layout/Navigation/Navigation';
import Home from './layout/Home/Home';
import About from './layout/About/About';
import Projects from './layout/Projects/Projects';
import Contact from './layout/Contact/Contact';
import Footer from './layout/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontSize: '1.2rem',
            borderRadius: '12px',
            padding: '2rem',
          },
        }}
      />
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
