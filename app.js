import express from "express";
import bootstrap from "./bootstrap/bootstrap.js";

const app = express();
const port = 3000;
bootstrap(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
