import Header from "../components/Header";
import Nav2 from "../components/Nav2";
import Face from "../components/Face";
import About from "../components/About";
import Benefits from "../components/Benefits";
import Complex from "../components/Complex";
import Menu from "../components/Menu";
import Break from "../components/Break";
import Trust from "../components/Trust";
import Delivery from "../components/Delivery";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Nav3 from "../components/Nav3";

function Home() {
  return (
    <>
      <Header />
      {/*<Nav2 />*/}
      <Nav3 />
      <Face />
      <About />
      <Benefits />
      <Complex />
      <Menu />
      {/* <Break /> */}
      {/* <Trust /> */}
      {/* <Delivery /> */}
      <Clients />
      <Footer />
    </>
  );
}

export default Home;
