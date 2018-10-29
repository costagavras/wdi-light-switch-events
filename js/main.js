
var btn = document.querySelector('.switch, on');
var body = document.querySelector('body');
var txt = document.querySelector('h1, .status');
var light_on;


btn.addEventListener("click", function(){
  (btn.className) === "switch on" ? light_on = true : light_on = false;
  if (light_on) {
    btn.className = "switch off";
    body.className = "dark";
    // txt.className = "light";

    txt.innerText = "Hey, who turned off the lights?";
  } else {
    btn.className = "switch on";
    body.className = "light";
    // txt.className = "dark";
    txt.innerText = "It's so bright in here!";
  }
});
