import "./App.css";
import { NavigationBar } from "./NavigationBar/NavigationBar";
import { Carousel } from "./Carousel/Carousel";
import { carouselImages } from "./constants";
import { Announcement } from "./Announcement/Announcement";
import SearchSection from "./SearchSection/SearchSection";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <Announcement />
      <Carousel carouselImages={carouselImages} />
      <SearchSection />
      <Footer />
    </div>
  );
}

export default App;
