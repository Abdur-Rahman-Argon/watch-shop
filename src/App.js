import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Bonus from "./components/Bonus/Bonus";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
