import express from "express";
import router from "./routes/index.js";

const app = express();

// define port
const PORT = process.env.PORT || 4000;

// enable pug
app.set("view engine", "pug");

// Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.currentYear = year.getFullYear();
  return next();
});

// define public folder
console.log(express.static("public"));
app.use(express.static("public"));

// add router
app.use("/", router);

app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
