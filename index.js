const app = require("./app/app");
require("dotenv").config();

//  MONGODB
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI);

// const PORT = process.env.PORT || 7000;
// const MONGOURL = process.env.MONGO_URL;


// const mongoose = require("mongoose");
// mongoose
//   .connect(MONGOURL)
//   .then(() => {
//     console.log("DB connected successfully.");
//     app.listen(PORT, () => {
//       console.log(`Server is running on port :${PORT} `);
//     });
//   })
//   .catch((error) => console.log(error));

// RUN SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started 🧦 ${PORT}`);
});
