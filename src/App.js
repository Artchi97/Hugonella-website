import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import MainPage from "./components/MainPage.jsx";
import Footer from "./components/Footer.jsx";
import OurDogs from "./components/OurDogs.jsx";

import "./App.css";

function App() {
  return (
    <>
      <div id="container">
        <Header />
        <NavBar />
        <main>
          <MainPage />
          {/* <OurDogs /> */}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
