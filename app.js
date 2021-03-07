const express = require("express");
const app = express();

app.set("view engine", 'ejs');
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render('gamer.ejs')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('running the server')
})