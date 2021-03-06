const express = require("express");
const router = express.Router();


//renderiza la plantilla home.hbs
router.get("/", (req, res, next) => {
  res.render("home");
});

// verificamos si el usuario tiene una session activa, de ser así, lo redirigimos a la siguiente ruta, en este caso
// /secret
// en caso contrario, redirigimos al usuario a /login

router.use((req, res, next) => {
  if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route 
  } else {                          
    res.redirect("/login");        
  }                                
});

// renderizamos la plantilla main.hbs con el username
// deconstruimos en la variable username el username de req.session.currentUser
   
router.get("/main", (req, res, next) => {
  res.render("user/main");
});

router.get("/private", (req, res, next) => {
    res.render("user/private");
  });
  
module.exports = router;