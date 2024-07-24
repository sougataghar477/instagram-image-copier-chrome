//Context menu
document.addEventListener("mousedown", (e) => {
  //get the class name
  var c = e.target.className;
  //check for right mouse click and if the class is there , remove the class
  if (e.target.classList.contains(c) && e.button === 2) {
    e.target.classList.remove(c);
  }
});


//Left Click
document.addEventListener("click", async(e) => {
  
  function makeTooltip() {
    const tooltip = document.createElement("SPAN");
    tooltip.textContent = "copied";
    tooltip.classList.add("tooltip");
    return tooltip;  
  }

  if (e.target.tagName === "DIV") {
    
    await navigator.clipboard.writeText(e.target.previousElementSibling.children[0].src)
      .then(() => {
        
        let tooltip= makeTooltip();
        
        e.target.appendChild(tooltip);
      
        setTimeout(() => {
          tooltip.remove();
        }, 1500);
      })
      .catch(err=>{console.error(err)})
  }

if(e.target.tagName==="IMG"){
  
  await navigator.clipboard.writeText(e.target.src)
  
  let tooltip= makeTooltip();
  
  e.target.parentElement.appendChild(tooltip);

  setTimeout(() => {
    tooltip.remove();
  }, 1500);
 }
});
