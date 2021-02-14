//server
import express from "express";
//log
import morgan from "morgan";
import "core-js";
//security
import helmet from "helmet";
//maybe,,parse? tell browser
import cookieParser from "cookie-parser";
import bodyparser from "body-parser";
//router
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("Hello from ass");

const handleProfile = (req, res) => res.send("Your are on my profile");

//apply module
app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

//export default || import variable from "./app"
//export const variable || import { variable} from "/.app"
export default app;
