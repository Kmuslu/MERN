const express = require("express");
const router = express. Router();
// express ile import ettik, icinden Router() u cagirdik. 

// router.get("/",(req, res)=> {
//     console.log("Home Page");
//     res.send("Home Page")
// })
//Homepagei ejsler ile react ile yazacagimiz icin server.js api sayfasina gidiyor. 


// router.get("/",(req, res)=> {
//     console.log("API Page");
//     res.send("API Page")
// })
///api dememe gerek yok cunku server.jste onun pathi verildi. 


router.use("/auth", AuthRouter);




module.exports = router;