import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send('Inicio')
});

app.get("/nosotros", (req, res) => {
  res.send('Nosotros')
});

app.get("/contacto", (req, res) => {
  res.send('Contacto')
});

app.listen(PORT, () => {
  console.log(`El servidore esta funcionando en el puerto ${PORT}`);
});
