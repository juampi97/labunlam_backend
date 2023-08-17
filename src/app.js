import express from "express";
import __dirname from "./utils.js";
import config from "./config/config.js";

import cors from "cors";

import proyectoresRouter from "./routers/proyectores.routers.js";
import notebooksRouter from "./routers/notebooks.routers.js";
import instrumentsRouter from "./routers/instruments.routers.js";
//import cartsRouter from "./routers/carts.router.js";
//import sessionRouter from "./routers/session.router.js";

import bodyParser from "body-parser";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";

import cookieParser from "cookie-parser";
import session from "express-session";

const port = config.port || 8080;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(cookieParser());
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: config.mongoURL,
      dbName: config.db_name,
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
    }),
    secret: config.db_password,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.static(__dirname + "/public"));

app.use("/api/proyectores/", proyectoresRouter);
app.use("/api/notebooks/", notebooksRouter);
app.use("/api/instruments/", instrumentsRouter);
//app.use("/api/carts/", cartsRouter);
//app.use("/session/", sessionRouter);

mongoose.set("strictQuery", false);

const httpServer = app.listen(port, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${port}`);
});

try {
  await mongoose.connect(config.mongoURL, {
    dbName: config.db_name,
  });
  console.log("DB connected!");
} catch (err) {
  console.log("No se puede conectar a la BD");
}
