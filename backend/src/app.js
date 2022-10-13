//create a setup for an api using express
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//create a route for the api
app.get("/", (req, res) => res.send("Hello World!"));

//listen to the port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
