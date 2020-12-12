// register ve login controllerini AuthRouterdan cektim. 

// -- /api/auth ile baslayan routter
/* 
@route  POST / requesti post olunca calisacak
@desc  Register endpoint/ register olmak isteyen herkes buraya gelsin.
@access Public / kim ulasabilecek, herkes
 */
// router.post("/",(req, res)=> {
//     //TODO: Register func
//     res.send("Register Completed")
// })
///api/auth dememe gerek yok cunku roueter.jste onun pathi verildi. 

exports.auth_register = (req, res) => {
    //TODO: Register func.
    res.send("Register Completed.");
  };
  
  exports.auth_login = (req, res) => {
    // TODO: Auth.
    // TODO: Login func.
    res.send("Login Completed");
  };
  