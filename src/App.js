import Textspace from './Components/TextArea';
import './App.css';
import NavBar from './Components/NavBar';

function App() {
  
  return (
    
    <div className="App">
      <NavBar/>
    <Textspace/>
    <div className="footer-copyright text-center py-3" style={{fontFamily:"Montserrat"}}>© 2020 Copyright:
    <a href="https://www.instagram.com/jainam_jain0401/"> Jainam Jain</a>
  </div>
    </div>
    
  );
}

export default App;
