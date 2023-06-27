import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import '~bootstrap/scss/bootstrap';
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import HomePage from "./component/HomePage";
import { Routes, Route } from "react-router-dom";
import Team from "./component/Team";
import Portfolio from "./component/Portfolio";
import Services from "./component/Services";
import TeamDetail from "./component/TeamDetail";
import PortpholioDetail from "./component/PortpholioDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:pholioId" element={<PortpholioDetail />} />
        <Route path="/service" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:userId" element={<TeamDetail />} />
      </Routes>
      <Footer />
      {/* <NavBar/>
    <HomePage/>
    <Footer/> */}
    </div>
  );
}

export default App;
