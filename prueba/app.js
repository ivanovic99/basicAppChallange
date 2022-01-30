const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const path = require("path")
const db = require("./config/db")
// const passport = require("./passport")
const session = require("express-session");
const router = require("./routes/index")
const logger = require('morgan');
const initializePassport = require("./passport-config")
const passport = require("passport")
const User = require("./models/User")
const flash = require("express-flash")
const methodOverride = require("method-override")
const Post = require("./models/Post")
const cors = require("cors")



db.authenticate().then(() => console.log("db working...")).catch(err => console.log("error", err))





const app = express()


app.use(cors())
app.use(logger('dev'));


app.use(session({ secret: "cualquierCosa", resave: true, saveUninitialized:true }));
// app.use(passport.initialize());
// app.use(passport.session());


initializePassport(passport,
     async email => {
    return await User.findOne({where: {email: email}}).then(user => user)
    },
    async id => await User.findOne({where: {id: id}}).then(user => user)
)

app.use(session({
    secret: "hola",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash())

app.set("view-engine", "ejs")

app.use("/", router)
app.get("/", checkAuthentication, async (req, res) => {
    let user = await req.user
    let posts = await showPosts(user)
    let contents = []
    Object.keys(posts).forEach(id => {
        contents.push(posts[id])
    })

    if (Object.keys(posts).length !== 0) {
        res.render("index.ejs", {email: user.email, post: contents })
    } else {
        res.render("index.ejs", {email: user.email, post: ""})
    }
})


async function showPosts(user) {

    let posts = await Post.findAll({where: {userId: user.id}})
    let postscontent = {} 
    await posts.forEach(element => {
        postscontent[element.id] = element.content
    });
    return postscontent
}

function checkAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("/login")
}

const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Server running on port${PORT}`))

app.get("/*", function(req, res, next) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})