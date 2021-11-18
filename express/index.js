const express = require("express")
const morgan = require('morgan')

const app = express()

app.use(morgan("dev"))
app.use(express.json())

//Define our router from express prebuilt router object
const indexRoute = express.Router();

//define our first middleware function ("CONTROLLER")
const controllerOne = function (request, response, nextFunction) {
    console.log("is this thing on?")
    nextFunction();
}

//define second controller
const controllerTwo = function (request, response, nextFunctioon) {
    return response.json({status: 200, data: null, message: "this thing is on..."})
}

indexRoute.route("/apis").get(controllerOne, controllerTwo);

app.use(indexRoute);


app.listen(4200, () => {console.log("Express has Started")})