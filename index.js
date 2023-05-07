const element = document.querySelector("main#main");
element.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Justin is the champion";