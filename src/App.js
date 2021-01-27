import './App.css';
import Header from './components/Header'
import Aboutme from './components/Challenges/Aboutme'
import Footer from './components/Footer'
import Home from './components/Home'

function App() { //this is the root component
const name = 'Emily'// JS above return statement can be 
//injected into JSX using {}


  return (
    <div className="App">
      <h1>Welcome to React, {name}</h1>
      <h2>We just modified our root App component</h2>
      <Header />
      <Aboutme />
      <Home />
      <Footer /> {/*this is how you mount a component*/}
    </div>
    
  );
}

export default App;
