const body = document.querySelector("body"),
sidbar = body.querySelector(".sidbar"),
toggle = body.querySelector(".toggle"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text"),
trash = document.querySelector(".trash"),
select = document.querySelector(".select-groupe"),
list = document.querySelector(".list"),
checkboxes = document.getElementsByName('slect-et');
// dark mode
toggle.addEventListener("click", () =>{
    sidbar.classList.toggle("close");
}
);
modeSwitch.addEventListener("click", () =>{
    var SetItem = document.body;
    body.classList.toggle("dark");
    var theme;
    if(body.classList.contains("dark")){
        modeText.innerText = "Light Mode";
        theme = "dark";
    }else{
        modeText.innerText = "Dark Mode";
        theme = "light";
    }
    localStorage.setItem("PageTheme", JSON.stringify(theme));
}
);
let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
if(GetTheme === "dark"){
    body.classList.toggle("dark");
}

/* ---- bell notification ---*/
function addNotification() {
    var unread = document.getElementById("unread");
    var newUnread = unread.cloneNode(true);
    var bell = document.getElementById("bell");
    var newBell = bell.cloneNode(true);
    newUnread.innerHTML = parseInt(unread.innerHTML) + 1;
    unread.parentNode.replaceChild(newUnread, unread);
    bell.parentNode.replaceChild(newBell, bell);
  }
  /* ----selectAll---*/
  function selectAll(source) {
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}

//refreshPage
function refreshPage(){
    window.location.reload();
} 

//groupe select
select.onclick = function(){
    list.classList.toggle("open");

}