import "./App.css";
import LandingPage from "./Components/LandingPage";
import AboutMe from "./Components/AboutMe";
import WorkWrapper from "./Components/WorkWrapper";
import Navbar from "./Components/Sidebar";
import { useState } from "react";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";
function App() {
  const [sidebar, setSidebar] = useState(false);
  if (sidebar === true) {
    return (
      <div className="App">
        <div
          className="container bucket"
          style={{
            padding: "0",
            margin: "0",
            maxWidth: "100vw",
            marginLef: "-50vw",
            marginRight: "-50vw",
          }}
        >
          <div className="row">
            <div className="col-2">
              <Navbar />
            </div>
            <div className="col-10">
              <section className="landingP">
                <LandingPage setSidebar={setSidebar} sidebar={sidebar} />
              </section>
              <div className="aboutmeP">
                <AboutMe />
              </div>
              <div className="workP">
                <WorkWrapper />
              </div>
              <div className="connect">
                <Connect />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      {/* {sidebar && <Navbar setSidebar={setSidebar} />} */}

      <section className="landingP">
        <LandingPage setSidebar={setSidebar} sidebar={sidebar} />
      </section>
      <div className="aboutmeP">
        <AboutMe />
      </div>
      <div className="workP">
        <WorkWrapper />
      </div>
      <div className="connect">
        <Connect />
      </div>
      <Footer />
      {/* exp */}
      {/* <section className="landingP">
        <LandingPage />
      </section>
      <div className="aboutmeP">
        <AboutMe />
      </div>
      <div className="workP">
        <WorkWrapper />
      </div> */}
    </div>
  );
}

export default App;
