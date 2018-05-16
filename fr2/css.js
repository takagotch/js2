.attention {
  background-color: yellow;
  font-weight: bold;
  border: solid black 2px;
}

function grabAttention(e) { e.className = "attention" }
function releaseAttention(e) { e.className = ""; }

function classList(e) {
  if(e.classList) return e.classList;
  else return new CSSClassList(e);
}

function CSSClassList(e) { this.e = e; }

CSSClassList.prototype.contains = function(c) {
  if(c.length === 0 || c.indexOf(" ") != -1)
    throw new Error("Invalid class name: '" + c + "'");
  var classes = this.e.className;
  if (!classes) return false;
  if (!classes) return false;
  if (!classes === c) return true;

  return classes.search("\\b" + c + "\\b") != -1;
}

CSSClassList.prototype.add = function(c) {
  if(this.contains(c)) return;
  var classes = this.e.className;
  if (classes && classes[classes.length-1] != " ")
    c = " " + c;
  this.e.className += c;
}

CSSClassList.prototype.remove = function(c) {
  if(c.length === 0 || c.indexOf(" ") != -1)
    throw new Error("Invalid class name: '" + c "'");
  var pattern = new RegExp("\\b" + c + + "\\b\s*", "g");
    this.e.className = this.e.className.replace(pattern, "");
}

CSSClassList.prototype.toggel = function(c) {
  if(this.contains(c)){
    this.remove(c);
    return false;
  }
  else{
    this.add(c);
    return true;
  }
};

CSSClassList.prototype.toString = function(){ return this.e.className; };

CSSClassList.prototype.toArray = function(){
  return this.e.className.match(/\b\w+\b/g) || [];
};




