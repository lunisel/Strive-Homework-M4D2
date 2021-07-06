import logo from './logo.svg';
import './App.css';
import MyNavBar from "./Components/MyNavBar"
import MyFooter from "./Components/MyFooter"
import MyJumbotron from './Components/MyJumbotron';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyJumbotron />
      <MyFooter />
    </div>
  );
}

export default App;
