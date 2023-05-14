export default function (app) {
  app.use(async function (req, res, next) {
    if (!req.session) {
      req.session = {};
    }
    console.log(req.session.isAuthenticated);
    if (typeof req.session.isAuthenticated === "undefined") {
      console.log("42342134");
      req.session.isAuthenticated = false;
    }

    res.locals.lcIsAuthenticated = req.session.isAuthenticated;
    res.locals.lcAuthUser = req.session.authUser;
    res.locals.lcAuthHotelier = req.session.authHotelier;
    res.locals.lcAuthAdmin = req.session.authAdmin;
    next();
  });

  // app.use(async function (req, res, next) {
  //   res.locals.lcCategories = await categoryService.findAllWithDetails();
  //   next();
  // });
}
