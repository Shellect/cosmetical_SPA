const express = require("express");
const path = require("path");

const app = express();
app.use('/public', express.static('public'));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'main.html'));
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000/")
})