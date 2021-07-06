import './App.css';
import MyNavBar from "./Components/MyNavBar"
import MyFooter from "./Components/MyFooter"
import MyJumbotron from './Components/MyJumbotron'
import LatestRelease from "./Components/LatestRelease"

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyJumbotron />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
