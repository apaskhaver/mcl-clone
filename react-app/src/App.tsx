import "./App.css";
import { QuickLinks } from "./Navbar/QuickLinks";
import { Logo } from "./Navbar/Logo";

function App() {
  return (
    <div className="navbar">
      <QuickLinks />
      <Logo />
    </div>
  );
}

export default App;
