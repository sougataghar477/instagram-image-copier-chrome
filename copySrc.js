//Context menu
document.addEventListener("mousedown", (e) => {
  if(e.target.tagName=== "DIV" && (e.target.children.length === 0 || e.target.textContent==="")  && e.button === 2 && e.target.className!==""){
    e.target.className="";
  }
});

//Left Click
document.addEventListener("click",(e) => {
  
  function makeTooltip() {
    const tooltip = document.createElement("SPAN");
    tooltip.textContent = "copied";
    tooltip.classList.add("tooltip");
    return tooltip;  
  }

  if (e.target.tagName === "DIV" && e.target.previousElementSibling?.children[0]?.tagName==="IMG") {
    
     navigator.clipboard.writeText(e.target.previousElementSibling.children[0].src);
        
        let tooltip= makeTooltip();
        
        e.target.appendChild(tooltip);
      
        setTimeout(() => {
          tooltip.remove();
          }, 1500);
  
  }

if(e.target.tagName==="IMG"){
  
   navigator.clipboard.writeText(e.target.src);
  
  let tooltip= makeTooltip();
  
  e.target.parentElement.appendChild(tooltip);

  setTimeout(() => {
    tooltip.remove();
  }, 1500);
 }
});

