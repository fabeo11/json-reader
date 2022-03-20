import "./App.css";
import Reader from "./components/reader/index";
import Header from "./components/header/index";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Reader />
      <Footer />
    </div>
  );
}

export default App;
