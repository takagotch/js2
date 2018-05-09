function addStyle(styles){
  var styleElt, styleSheet;
  if(document.createStyleSheet){
    styleSheet = document.createStyleSheet();
  }
} 
else {
  var head = document.getElementByTagName("head")[0]
  styleElt = document.createElement("style");
  head.appendChild(styleElt);
}

if(typeof styles === "string"){
  if(styleElt) styleElet.innerHTML = styles;
  else styleSheet.cssText = styles;
}
else {
  var i = 0;
  for(selector in styles){
    if(styleSheet.insertRule){
      var rule = selector + " {" + styles[selector] + "}";
      styleSheet.insertRule(rule, i++);
    }
    else {
      styleSheet.addRule(selector, styles[selector], i++);
    }
  }
}



