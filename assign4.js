var imagesArray = ["cards/02 of Clubs.jpg","cards/03 of Clubs.jpg", "cards/04 of Clubs.jpg","cards/05 of Clubs.jpg","cards/06 of Clubs.jpg","cards/07 of Clubs.jpg","cards/08 of Clubs.jpg","cards/09 of Clubs.jpg","cards/10 of Clubs.jpg","cards/Ace of Clubs.jpg", "cards/Jack of Clubs.jpg","cards/Queen of Clubs.jpg","cards/King of Clubs.jpg", "cards/02 of Diamonds.jpg","cards/03 of Diamonds.jpg", "cards/04 of Diamonds.jpg","cards/05 of Diamonds.jpg","cards/06 of Diamonds.jpg","cards/07 of Diamonds.jpg","cards/08 of Diamonds.jpg","cards/09 of Diamonds.jpg","cards/10 of Diamonds.jpg","cards/Ace of Diamonds.jpg","cards/Jack of Diamonds.jpg","cards/Queen of Diamonds.jpg","cards/King of Diamonds.jpg","cards/02 of Hearts.jpg","cards/03 of Hearts.jpg", "cards/04 of Hearts.jpg","cards/05 of Hearts.jpg","cards/06 of Hearts.jpg","cards/07 of Hearts.jpg","cards/08 of Hearts.jpg","cards/09 of Hearts.jpg","cards/10 of Hearts 1.jpg","cards/Ace of Hearts 1.jpg","cards/Jack of Hearts 1.jpg","cards/Queen of Hearts 1.jpg","cards/King of Hearts 1.jpg","cards/02 of Spades.jpg","cards/03 of Spades.jpg", "cards/04 of Spades.jpg","cards/05 of Spades.jpg","cards/06 of Spades.jpg","cards/07 of Spades.jpg","cards/08 of Spades.jpg","cards/09 of Spades.jpg","cards/10 of Spades.jpg","cards/Ace of Spades.jpg","cards/Jack of Spades.jpg","cards/Queen of Spades.jpg","cards/King of Spades.jpg"];

var c1;
var c2;
var tot;
var c3;
var c4;

function pickIt() {
    
    c1 =  Math.floor(Math.random() * 12) + 2;    
    c2 =  Math.floor(Math.random() * 12) + 2;
    c3 = c1;
    c4 = c2;
    if(c1 == 12) {
        c1 -= 2
    }
    else if(c1 == 13) {
        c1 -= 3;     
    }
    
    if(c2 == 12) {
        c2 -= 2
    }
    else if(c2 == 13) {
        c2 -= 3;     
    }
    
    if(c1 == 11 && c2 == 11) {
        c2 = 1;
    }
    tot = c1 + c2;
    
    with(document.forms[0]) {
        card1.value = c1;
        card2.value = c2;
        total.value = tot;
    }
    
    if(tot == 21) {
        openWindow();
    }
    
    add(tot);
}

function randomPic() {
    rand = c3;
    rand2 = c4;
    var divide = 13*(Math.floor(Math.random() * 3));
    var divide2 = 13*(Math.floor(Math.random() * 3));
    var pic = imagesArray[(rand+divide)-2];
    var pic2 = imagesArray[(rand2+divide2)-2];
    
    document.card1Pic.src = pic;
    document.card2Pic.src = pic2;
    
    with(document.forms[0]) {
        if(c3 == c4) {
            identical.value += 1;
        }
    }
} 

function openWindow() {
    theNewWindow = window.open("celebration.html", "myWin", "width = 330, height = 330, left = 300, top = 200");
}

function closeWindow() {
    theNewWindow.close();
    
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  var blackjacks = getCookie("blackjacks");
  if (user != "") {
    alert("Welcome again " + user + " you have gotten " + blackjacks + " blackjacks!");
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
      setCookie("blackjacks", 0, 365);
    }
  }
}

function add(total) {
    var blackjacks = parseInt(getCookie("blackjacks"));
    if(total == 21) {
        blackjacks += 1;
        setCookie("blackjacks", blackjacks, 365);
    }
}

