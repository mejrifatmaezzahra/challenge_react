import './App.css';
import Navbar from './component/navbar'
import Title from './component/title'
import Projects from './component/projects'
import Contact from './component/contact'
import Footer from './component/footer'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Title/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
