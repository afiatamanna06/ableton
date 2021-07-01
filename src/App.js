import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar className='navbar-menu'/>
      <Header className='header'/>
      <h1 className='logo-footer'>Ableton</h1>
      <Footer />
    </div>
  );
}

export default App;
