import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import TopBar from "./components/TopBar";
import Myfooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNav />
      <TopBar />
      <Myfooter />
    </div>
  );
}

export default App;
