// js
import Handlebars from "handlebars" ;


// styles
import "../src/styles/global.scss";


let template = document.getElementById('template')

let html = template.innerHTML

const compiledTemplate = Handlebars.compile(html)

document.body.innerHTML = compiledTemplate({headerText:'headerrrrr',footerText:'footerrrrr'});
