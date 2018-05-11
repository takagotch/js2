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


document.styleSheets[0].insertRule("str { text-weight: bold; }", 0);

var ss = document.styleSheets[0];
var rules = ss.cssRules?ss.cssRules:ss.rules;

for(var i = 0; i < rules.length; i++){
  var rule = rules[i];
  if(!rule.selectorText) continue;

  var selector = rule.selectorText;
  var ruleText = rule.style.cssText;

  if(selector == "h1"){
    if (ss.insertRule) ss.insertRule();
    else if (ss.addRule) ss.addRule("h2", ruleText, rules.length);
  }

  if(rule.style.textDecoration){
    if(ss.deleteRule) ss.deleteRule(i);
    else if(ss.removeRule) ss.removeRule(i);
    i--;
  }
}

