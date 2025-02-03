//Context menu
fetch('./translation.json')
  .then(d => d.json())
  .then(a => console.log(a))
 

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
  
  function copyToClipboardAndshowMessage(url,appender){
    navigator.clipboard.writeText(url);
    let tooltip= makeTooltip();
    appender.appendChild(tooltip);
    setTimeout(() => {tooltip.remove();}, 2500);
  }

  if (e.target.tagName === "DIV" && e.target.previousElementSibling?.children[0]?.tagName==="IMG") {
    copyToClipboardAndshowMessage(e.target.previousElementSibling.children[0].src,e.target)
  }

  if(e.target.tagName==="IMG"){
    copyToClipboardAndshowMessage(e.target.src,e.target.parentElement) 
  }
  });

