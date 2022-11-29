let effect = document.querySelector("#test");
effect.addEventListener("click", function () {
  testFunction();
});
function testFunction() {
  let x = document.querySelector("h2");
  x.innerHTML = "bye";
}
