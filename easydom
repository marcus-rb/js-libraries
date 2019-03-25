/* EasyDOM.js
 * -------------------------------
 * Use this simple library to clean up your front-end JS
 * No more document.getElementById
 * No more 50 line long JavaScript style declarations
 */ 
 
/* --- DOM Element accessors --- */

const gbId = (id) => document.getElementById(id);
const gbClass = (classname) => document.getElementsByClassName(classname);
const gbTag = (tag) => document.getElementsByTagName(tag);

const gbQuery = (query) => document.querySelector(query);
const gbQueryAll = (query) => document.querySelectorAll(query);

// Shorthand for document.createElement
class element {
    constructor(elem) {
        return document.createElement(elem);
    }
}

/* --- Style modifiers --- */

class styleList {
    constructor(...styles) {
        let tempString;
        for (let style of styles) {
            tempString = style.replace(" ","").split(":");
            this[tempString[0]] = tempString[1];
        }
    }
}

const style = (targetElement, stylesList) => {
    for (const property in stylesList) {
        console.log(property);
        console.log(stylesList);
        targetElement.style[property] = stylesList[property];
    }
}

const setClass = (targetElement, cssClass) => targetElement.className = cssClass;

const removeClass = (targetElement, cssClass) => {
    const newClassName = targetElement.className.split(" ").filter(item => item != cssClass).join(" ");
    targetElement.className = newClassName;
}

const addClass = (targetElement, cssClass) => targetElement.className += cssClass;


// -- test area --
const test1 = new styleList("color: black", "font-size: 3em", "background-color: blue", "height: 200px", "width: 300px");
const testdiv = gbId("testdiv");

style(testdiv, test1);
