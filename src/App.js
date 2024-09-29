import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import ScrollToTop from "./components/ScrollToTop.jsx";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import MainPage from "./components/MainPage.jsx";
import Footer from "./components/Footer.jsx";
import OurDogs from "./components/OurDogs.jsx";
import DogDetails from "./components/DogDetails.jsx";
import DogShows from "./components/DogShows.jsx";

import "./App.css";

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
          fetch(showsUrl),
          fetch(feedUrl),
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
            <Route path="/" element={<MainPage />} />
            <Route path="/our-dogs" element={<OurDogs />} />
            <Route
              path="/dog-details/:dogName"
              element={<DogDetails showsData={showsData} />}
            />
            <Route
              path="/shows/:dogName"
              element={<DogShows showsData={showsData} />}
            ></Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
