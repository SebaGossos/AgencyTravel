import express from "express";
import router from "./routes/index.js";

const app = express();

// define port
const PORT = process.env.PORT || 4000;

// enable pug 
app.set('view engine', 'pug');

// add router
app.use('/', router)


app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
