import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Levy Weather App</h1>
      </header>
      <Weather defaultCity = "Cincinnati"/>
      <footer>
        This project was coded by {" "}
        <a href = "https://github.com/megan-levy"> Megan Levy </a> {" "}
        and is hosted on <a href = "https://awesome-einstein-1a84f0.netlify.app"> on Netlify</a>
      </footer>
    </div>
  
  );
}

export default App;
