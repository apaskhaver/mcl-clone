import "./App.css";
import { NavigationBar } from "./NavigationBar/NavigationBar";
import { Carousel } from "./Carousel/Carousel";
import { carouselImages } from "./constants";
import { Announcement } from "./Announcement/Announcement";

function App() {
  return (
    <div>
      <NavigationBar />
      <Announcement />
      <Carousel carouselImages={carouselImages} />
    </div>
  );
}

export default App;
