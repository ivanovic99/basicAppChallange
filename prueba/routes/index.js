const express = require("express")
const router = express.Router()
const db = require("../config/db")
const User = require("../models/User")
// const passport = require("../passport")
const bcrypt = require("bcrypt")
const passport = require("passport")


router.post("/post", checkAuthentication, async (req, res) => {
  let user = await req.user
  user = await User.findByPk(user.id)
  user.addPost(req.body)
  res.redirect("/")

  // .then((user) => {
  //   user.addPost(req.body)
  // })
  // .then(posts => res.redirect("/"))
  // .catch(error => console.log(error))
})


router.get("/login", isLoggedIn, (req, res) => {
  res.render("../views/login.ejs")
})

router.get("/register", isLoggedIn, (req, res) => {
  res.render("../views/register.ejs")
})

// get user
router.get("/users", (req, res) => 
    User.findAll()
    .then(users => {
        res.sendStatus(200)
    })
    .catch(err => console.log(err))
)

// register user

router.post("/register", async (req, res) => {

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    User.create({
      id: Date.now().toString(),
      email: req.body.email,
      password: hashedPassword

    })
    .then(user => res.redirect("/login"))
    .catch(err => console.log(err))
    } 
  catch {err => console.log(err)}

  
})

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login"
}))

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/")
  }
  next()
}

// delete user


router.delete("/delete", async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        if (user) {
          await user.destroy();
          res.status(200).send("User deleted");
        } else {
          res.status(404).send("User Not Found");
        }
      } catch (e) {
        console.log(e);
        res.status(500).send(e);
      }
})

router.delete("/logout", (req, res) => {
  req.logOut()
  res.redirect("/login")
})

router.delete("/post", (req, res) => {

})




/*
router.post('/user/login', passport.authenticate('local'), function(req, res, next) {
    res.send(req.user)
});

router.get('/user/logout', function(req, res){
    console.log("-----------------")
    req.logout()
    res.send({})
})
*/

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
      return next()
  }
  res.redirect("/login")
} // repetida en app!

module.exports = router