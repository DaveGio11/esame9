import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import TopBar from "./components/TopBar";
import Myfooter from "./components/MyFooter";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <MyNav />
      <TopBar />
      <Gallery searchValue="Cristo" />
      <Gallery searchValue="Superman" />
      <Gallery searchValue="Iron man" />
      <Gallery searchValue="Rocco" />
      <Myfooter />
    </div>
  );
}

export default App;
