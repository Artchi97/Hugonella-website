const express = require("express");

(async () => {
  const fetch = (await import("node-fetch")).default;

  const app = express();

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/sheets", async (req, res) => {
    try {
      const response = await fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/1-OZB_RgaKStaO9RoTLKlqetO9ZrBEGs-bl4NKDVeH-g/values/Feed?key=AIzaSyBDAeTJ_lZu-gWtk7aTb-v8CvrEUZ7pw8g"
      );
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Błąd pobierania danych z Google Sheets API:", error);
      res.status(500).json({ message: "Błąd serwera" });
    }
  });

  app.get("/api/shows", async (req, res) => {
    try {
      const response = await fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/1-OZB_RgaKStaO9RoTLKlqetO9ZrBEGs-bl4NKDVeH-g/values/Shows?key=AIzaSyBDAeTJ_lZu-gWtk7aTb-v8CvrEUZ7pw8g"
      );
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Błąd pobierania danych z API Shows:", error);
      res.status(500).json({ message: "Błąd serwera" });
    }
  });

  app.listen(3001, () => {
    console.log("Serwer proxy działa na porcie 3001");
  });
})();
