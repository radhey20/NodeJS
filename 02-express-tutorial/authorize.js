const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "John") {
    req.user = { name: "john", id: 3 };
    next();
  } else {
    res.status(401).send("unauthorized");
  }
};

module.exports = authorize;
