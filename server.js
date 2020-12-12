// database cekme islemlerimi burda yapacagim
const express = require("express");
const router = require("./routes/router");

const app = express();

const rouetr = require("./routes/router");

app.use("/api", router)
//serverdan api routerinaa gonnderdim.

app.listen(5000, ()=>{
    console.log("I'm listening on prt 5000.")
})
// dinlemeye basladigi an yukardaki callback func calisiyor.
// gelen talepleri req tanimlamasi lazim. 