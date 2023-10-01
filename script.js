// select elements
let body = document.body;
let typed_text = document.querySelector(".title");
// set add event listner for pressed key from user
body.addEventListener("keyup", (e) => {
  // check if the pressed key was backspace , remove last character
  if (e.key === "Backspace") {
    typed_text.innerHTML = typed_text.innerHTML.slice(0, -1);
    // like a break !
    return;
  }
  
  typed_text.innerHTML += e.key;
  animation(e);
});
// set animations for virtual keyboards on document
function animation(e) {
  let pressedkey = e.key.toUpperCase();
  let selectDom = document.getElementById(pressedkey);
  // animation class
  selectDom.classList.add("hit");
  // remove animation class when animation ended !
  selectDom.addEventListener("animationend", () => {
    selectDom.classList.remove("hit");
  });
}
