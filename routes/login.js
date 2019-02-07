/**
 * Login route.
 */

const config = require("../config")
const utils = require("../utils")

module.exports = app => {

  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/account")
    } else {
      res.render("login", {
        user: null,
        config,
        messages: utils.flashMessages(req),
      })
    }
  })

}
