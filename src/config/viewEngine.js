import express from "express";

let configViewEngine = (app) => {
  //get file image
  app.use(express.static("./src/public"));

  //setup template engine ejs - set the view engine to ejs
  app.set("view engine", "ejs");

  //get html
  app.set("views", "./src/views");
};

module.exports = configViewEngine;
