// js
import Handlebars from "handlebars";

// styles
import "../src/styles/global.scss";

document.addEventListener("DOMContentLoaded", function() {
    // Kodunuz burada çalıştırılır
  });

const source = document.getElementById("template").innerHTML;
const template = Handlebars.compile(source);

const data = {
  title: "Başlık",
  content: "Handlebars ile sayfa oluşturmak eğlencelidir!",
  headerText: "Merhaba Handlebars",
  footerText: "Footer içeriği burada.",
};

document.getElementById("template").innerHTML = template(data);


