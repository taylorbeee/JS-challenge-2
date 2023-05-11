var firstListItem = document.querySelector("ul li");
firstListItem.style.textTransform = "upperCase";

// console.log(firstListItem);

var moreReasons = document.querySelector(".more-reasons");
moreReasons.style.fontSize = "2.5em";

// console.log(moreReasons);

var whyJS = document.querySelector("h3");
whyJS.innerHTML = 'Why Learn <span class="highlight">Javascript</span>?';

// console.log(whyJS);
var highlight = document.querySelector(".highlight");
highlight.style.backgroundColor = "#ffff82";

var mainImage = document.querySelector("figure img");
mainImage.src = "img/js-code.png";
mainImage.alt = "Javascript code example";
