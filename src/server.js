import express from "express";
import bodyParser from "body-parser"; //lấy tham số từ client gửi về
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import dotenv from "dotenv";
import connectDB from "./config/connectDB";

dotenv.config(); // or not import => require("dotenv").config()

let app = express();

//config app
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 8080; //port === undefined => port = 8080

app.listen(port, () => {
  console.log("Backend Nodejs is running on the port: " + port);
});
