var c;
document.addEventListener("mousedown", (e) => {
  //get the class name
  c = e.target.className;
  //check for right mouse click and if the class is there , remove the class
  if (e.target.classList.contains(c) && e.button === 2) {
    e.target.classList.remove(c);
  }
});

//copying image url on click
document.addEventListener("click", (e) => {
  var url = e.target.previousElementSibling.children[0].src;
  navigator.clipboard.writeText(url);
  const tooltip = document.createElement("SPAN");
    tooltip.textContent = "copied";
  tooltip.classList.add("tooltip");
  e.target.appendChild(tooltip);
  setTimeout(() => {
    e.target.firstChild.remove();
  }, 1500);
});

//enabling context menu
document.addEventListener("contextmenu", (e) => {
  if (e.target.tagName === "IMG") {
    let blockedElement = e.target.parentElement.nextElementSibling;
    blockedElement.classList.add(c);
  }
});
