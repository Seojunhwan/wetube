import morgan from "morgan";
import "core-js";
import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyparser from "body-parser";

const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhos:${PORT}`);

const handleHome = (req, res) => res.send("Hello from ass");

const handleProfile = (req, res) => res.send("Your are on my profile");

const middleware = (req, res, next) => {
  res.send("not happening");
};

app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", middleware, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
