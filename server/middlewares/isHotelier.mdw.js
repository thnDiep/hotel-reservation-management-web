export default function (req, res, next) {
  if (!req.session.isHolier) {
    res.json({ link: "/login" });
  }
  next();
}
