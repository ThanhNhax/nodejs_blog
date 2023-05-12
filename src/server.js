const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/about", (req, res) => {
    res.send("I'm thanh nha!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
