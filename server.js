import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.render('index.ejs');
  });

app.listen(port, () => {
    console.log(`Server is Live on port ${port}`);
  });