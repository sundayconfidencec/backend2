const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const server =express();



//routeshandlers
const handleLogin = (req,res) =>{
    console.log(req.body)
    res.send("your form has successfully been submitted. thanks for your response from login teams")
    
};
const handleHome = (req,res) =>{
    console.log(req.body)
    res.send("your form has successfully been submitted. thanks for your response from home teams")
    
};
const handleAbout = (req,res) =>{
    console.log(req.body)
    res.send("your form has successfully been submitted. thanks for your response from about teams")
};
const handleContact = (req,res) =>{
    console.log(req.body)
    res.send("your form has successfully been submitted. thanks for your response from contact teams")
};
const handleService = (req,res) =>{
    console.log(req.body)
    res.send("your form has successfully been submitted. thanks for your response from service teams")
};
const handleError = (req,res) =>{
    res.send("404 page not found")
};
//middleware
const aboutController = (req,res, next) =>{
    console.log("about")
    next();
};
const contactController = (req,res,next)=>{
    console.log("contact")
    next();
};
const serviceController = (req,res,next)=>{
    console.log("service")
    next();
};
const loginController = (req,res,next)=>{
    console.log("login")
    next();
};
const homeController = (req,res,next)=>{
    console.log("home")
    next();
};
//middlewares
server.use(express.static(path.join(__dirname,"public")));
server.use(bodyParser.urlencoded({extended: false}));
//routes
server.post("/about",aboutController, handleAbout);
server.post("/contact", contactController,handleContact)
server.post("/service", serviceController,handleService)
server.post("/login",loginController, handleLogin)
server.post("/", homeController,handleHome)
server.get("*", handleError)
server.listen(3003, "localhost",()=>{console.log("ready")});