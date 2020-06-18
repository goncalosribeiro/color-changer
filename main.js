function colorSelection() {
  var colorPicked = document.getElementById("color").value;
  document.querySelector(".cls-1").style.fill = colorPicked;
}


const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
  body.classList.toggle('open');
});

