const Container = require("./Container/container.js");

function createNewContainer(){
    var container = new Container()
    var div = document.createElement("div")
    div.className = container.class_name
    div.style = ("background-color: " + container.style['background-color:'] + "; ")
    return div
}

function checkString(){
    return "Check this out"
}

module.exports = {createNewContainer, checkString }