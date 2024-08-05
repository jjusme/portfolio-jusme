import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <WorkExperience />
      <Hobbies />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default App;
