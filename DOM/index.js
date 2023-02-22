var headingEl = document.getElementById("heading");

headingEl.innerHTML = "Tudo sobre gatos";

var nameEls = document.getElementsByTagName("span");


for (var i = 0; i < nameEls.length; i++) {
    nameEls[i].innerHTML = "gato";
}


console.log(nameEls[0]);
