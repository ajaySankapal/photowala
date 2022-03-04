import "./App.css";
import LandingPage from "./Components/LandingPage";
import AboutMe from "./Components/AboutMe";
import WorkWrapper from "./Components/WorkWrapper";
function App() {
  return (
    <div className="App">
      <section className="landingP">
        <LandingPage />
      </section>
      <div className="aboutmeP">
        <AboutMe />
      </div>
      <div className="workP">
        <WorkWrapper />
      </div>
    </div>
  );
}

export default App;
