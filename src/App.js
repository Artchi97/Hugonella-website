import "./App.css";
import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ScrollToTop = lazy(() => import("./components/ScrollToTop.jsx"));
const Header = lazy(() => import("./components/Header.jsx"));
const NavBar = lazy(() => import("./components/NavBar.jsx"));
const MainPage = lazy(() => import("./components/MainPage.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const OurDogs = lazy(() => import("./components/OurDogs.jsx"));
const DogDetails = lazy(() => import("./components/DogDetails.jsx"));
const DogShows = lazy(() => import("./components/DogShows.jsx"));
const AboutUs = lazy(() => import("./components/AboutUs.jsx"));
const Puppies = lazy(() => import("./components/Puppies.jsx"));
const DogDetailsGallery = lazy(() =>
  import("./components/DogDetailsGallery.jsx")
);

function App() {
  const [showsData, setShowsData] = useState([]);
  const [feedData, setFeedData] = useState([]);

  const [navTextActive, setNavTextActive] = useState("");

  function handleNavTextActive(navText) {
    setNavTextActive(navText);
  }

  const sheetId = "1-OZB_RgaKStaO9RoTLKlqetO9ZrBEGs-bl4NKDVeH-g";
  const apiKey = "AIzaSyBDAeTJ_lZu-gWtk7aTb-v8CvrEUZ7pw8g";
  const showsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Shows?key=${apiKey}`;
  const feedUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Feed?key=${apiKey}`;

  useEffect(() => {
    async function fetchShowsAndFeedData() {
      try {
        const [showsResponse, feedResponse] = await Promise.all([
          fetch("http://localhost:3001/api/shows"),
          fetch("http://localhost:3001/api/sheets"),
        ]);

        const fetchedShowsData = await showsResponse.json();
        const fetchedFeedData = await feedResponse.json();

        setShowsData(fetchedShowsData);
        setFeedData(fetchedFeedData);
      } catch (error) {
        console.error("Błąd pobierania danych: ", error);
      }
    }

    fetchShowsAndFeedData();
  }, [showsUrl, feedUrl]);

  return (
    <Router>
      <Suspense fallback={<div>Ładowanie...</div>}>
        <ScrollToTop />
        <Header
          handleNavTextActive={handleNavTextActive}
          navTextActive={navTextActive}
        />
        <div id="container">
          <NavBar
            handleNavTextActive={handleNavTextActive}
            navTextActive={navTextActive}
          />
          <main>
            <Routes>
              <Route path="/" element={<MainPage feedData={feedData} />} />
              <Route path="/our-dogs" element={<OurDogs />} />
              <Route
                path="/dog-details/:dogName"
                element={<DogDetails showsData={showsData} />}
              />
              <Route
                path="/shows/:dogName"
                element={<DogShows showsData={showsData} />}
              ></Route>
              <Route
                path="/dog-gallery/:dogName"
                element={<DogDetailsGallery />}
              ></Route>
              <Route path="/puppies" element={<Puppies />}></Route>
              <Route path="/about-us" element={<AboutUs />}></Route>
            </Routes>
          </main>
        </div>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
