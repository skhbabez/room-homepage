import About from "./layouts/About/About";
import Carousel from "./layouts/Carousel/Carousel";
import Navigation from "./layouts/Navigation/Navigation";

function App() {
  return (
    <>
      <div className="max-w-360 mx-auto">
        <Navigation />
        <main>
          <Carousel />
          <About />
        </main>
      </div>
    </>
  );
}

export default App;
