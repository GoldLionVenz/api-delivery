module.exports = function makeExpressRedirectCallabck(controller) {
  return (req, res) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      user: req.user,
      headers: {
        "Content-Type": req.get("Content-Type"),
        "Access-Control-Allow-Origin": req.headers.origin,
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
        Authorization: req.get("Authorization")
      }
    }
    controller(httpRequest)
      .then((httpResponse) => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers)
        }

        if (httpResponse.statusCode === 200) res.redirect(`${process.env.URL}/paypalaproved`)
        else res.redirect(`${process.env.URLF}/paypalfail?message=${httpResponse.body.error}`)
      })
      .catch((e) =>
        res.status(500).send({
          error: "An unkown error occurred."
        })
      )
  }
}
