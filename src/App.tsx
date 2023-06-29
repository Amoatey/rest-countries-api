import "./App.css";
import { Header } from "./components/Header";
import { DataContext } from "./context/DataContext";

function App() {
  return (
    <>
      <div>
        <Header />
        <DataContext/>
      </div>
    </>
  );
}

export default App;
