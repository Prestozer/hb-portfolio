import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="hb-banner">
      <Home />
      <Button>Call Us Now</Button>
    </div>
  );
}

export default App;
