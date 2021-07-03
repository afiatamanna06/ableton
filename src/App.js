import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  const footer_links = [
    { content: "Archive", url: "#" },
    { content: "Contact Us", url: "#" },
    { content: "Press Resources", url: "#" },
    { content: "Legal Info", url: "#" },
    { content: "Privacy Policy", url: "#" },
    { content: "Cookie Settings", url: "#" },
    { content: "Imprint", url: "#" }
  ];


  return (
    <div className="App">
      <Navbar className='navbar-menu'/>
      <Header className='header'/>
      <h1 className='logo-footer'>Ableton</h1>
      <Footer />
      <div>
        <ul className="footer-links">
          {footer_links?.map(({ content, url }) => (
            <li key={url}>
              <a href={url} className="nav-link f-links">
              {content}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
