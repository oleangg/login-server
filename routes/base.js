/**
 * Base (/) route.
 */

module.exports = app => {

  app.get("/", (req, res) => {
    res.render("base", {
      showLoginButton: true,
    })
  })

}
