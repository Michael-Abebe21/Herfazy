const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const ejs = require("ejs")

const app = express()

app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/", function(req, res) {
res.render("home")
})

app.get("/about", function(req, res) {
    res.render("about")
  })

  app.get("/fantu", function(req, res) {
    res.render("fantu")
  })


  app.get("/contact", function(req, res) {
    res.render("contact")
  })

  app.get("/home", function(req, res) {
    res.render("home")
  })


app.listen(3000, function() {
 console.log("Server is live on port 3000")
})