import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar';
import Home from './Home';
import Mission from './Mission';
function App() {
  return (
    <h1 className="text-3xl font-bold underline">
    <Navbar/>
    <Home />
    <Mission/>
  </h1>
  );
}

export default App;
