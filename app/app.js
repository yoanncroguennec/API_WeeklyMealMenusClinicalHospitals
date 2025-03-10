const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.set("trust proxy", true);
// app.use(express.json());
app.use(cors()); //* le module cors permet d'autoriser ou non les demandes provenant de l'extérieur.

// Route principal pour tester le server
app.get("/", (req, res) => {
  // res.json("Bienvenue sur mon serveur");
    const userIp = req.ip;
    // console.log(userIp);
    res.send(userIp);
});
app.get("/api", (req, res) => {
  // res.json("Bienvenue api");
  const userIp = req.ip;
  // console.log(userIp);
  res.send(userIp);
});
app.use("/api/auth", require("../server/routes/User.Routes"));
app.use("/api/movies", require("../server/routes/Movies.Routes"));
app.use("/api/weeklyMenus", require("../server/routes/WeeklyMenus.Routes"));
app.use("/api/patients", require("../server/routes/Patient.Routes"));

app.all("*", (req, res) => {
  res.status(404).json({ message: "This routes doesn't exist" });
});

module.exports = app;
