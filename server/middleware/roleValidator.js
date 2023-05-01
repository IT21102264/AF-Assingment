async function roleValidator(req, res, next) {
  let { role } = req.query;

  if (req.method == "PATCH" || req.method == "DELETE") {
    console.log("Wproing");
    if (role == "admin") {
      next();
    } else {
      res.send({
        message: "Permission not granted",
      });
    }
  } else {
    next();
  }
}

module.exports = { roleValidator };
