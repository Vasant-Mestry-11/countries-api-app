import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <h1>Content Here</h1>
      </Main>
    </div>
  );
}

export default App;
