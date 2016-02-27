
console.log("ready!");
/**
document.getElementsByClassName('').backgroundImage = "url(http://thedirtonwater.com/wp-content/uploads/2015/05/7015829-spring-grass-wallpaper.jpg)";
 */


elements = document.getElementsByClassName('timeline-comment-avatar');
pictures = [
  "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg",
  "https://c2.staticflickr.com/8/7186/6791766296_b152a8d916_b.jpg",
  "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg",
  "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"
];

/**
 * http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 * @return {Array} a The shuffled array
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
  return a;
}
shuffle(pictures);


for (var i = 0; i < elements.length; i++){
  /** Changes everyone's pictures to cats */
  elements[i].src = pictures[i % pictures.length];
}

/** Changes all usernames to "Meow Meow" */
usernames = document.getElementsByClassName('author');
for (var i = 0; i < usernames.length; i++){
  usernames[i].innerHTML = "Meow Meow";
}

/** Changes all comment divs except for the OP and the comment preview when you go to post a comment */
comments = document.getElementsByClassName("comment-content");
for (var i = 0; i < comments.length - 2; i++){
  /** Hides all comment divs */
  comments[i + 1].style.display = 'none';
}

/** Gathers all comment headers so a button can be added */
headers = document.getElementsByClassName("timeline-comment-header-text");
var node = document.createElement("BUTTON");
var text = document.createElement("Show Comment");
node.appendChild(text);

document.body.appendChild(node);

for (var i = 1; i < headers.length; i++) {
  /** Adds button to view any comment */
  headers[i].appendChild(node);

}
