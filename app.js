const e = document.getElementById("country-drop");
let value = e.options[e.selectedIndex].value;
let text = e.options[e.selectedIndex].text;

let showCountry = document.querySelectorAll(`.${value}`);

for (var i = 0; i< showCountry.length; i++) {
    showCountry[i].style.display = "initial";
}