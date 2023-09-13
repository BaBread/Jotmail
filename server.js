// const path = require("path");
// const express = require("express");
// const exphbs = require("express-handlebars");

// const Sequelize = require('sequelize');
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);


// const routes = require("./controllers");
// const sequelize = require("./config/connection");
// // const helpers = require("./utils/helpers");

// const app = express();
// const PORT = process.env.PORT || 3001;

// // const hbs = exphbs.create({ helpers });

// const sess = {
//   secret: "Super secret secret",
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     // database
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log("Now listening"));
// });

const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = require("./config/connection");
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize, // Use your Sequelize instance here
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ /* helpers configuration if needed */ });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "views", "main")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});
