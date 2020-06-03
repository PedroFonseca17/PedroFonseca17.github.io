var quotes = document.getElementsByClassName("first-section-quotes");
const quotesData = [].slice.call(quotes);
let i = 0
const element = document.getElementById("hp-img-text");
testFunction = () => {
   if(quotesData.length - 1 === i) {
     i = 0;
   }
   element.classList.add("move-text")
   setTimeout(function(){element.innerHTML = quotesData[i].textContent;}, 600)
   setTimeout(function(){element.classList.remove("move-text")}, 600)
   i += 1;
}
var t = setInterval(testFunction, 4000);

var images = document.getElementsByClassName("first-section-images");
var imagesData = [].slice.call(images);
// Remove the default first slide
document.getElementById("only-slide").remove();

// Add slides for each item in the collection
imagesData.forEach(image => {
  var imageElement = document.createElement("img");
  imageElement.src = image.src;
  var newDiv = document.createElement("div");
  newDiv.classList.add("slider__slide");
  newDiv.classList.add("w-slide");
  
  newDiv.appendChild(imageElement);
  document.getElementById('slider-mask').appendChild(newDiv);  
})

var elemToRemove = document.querySelector('#image-quote-info');
elemToRemove.parentNode.removeChild(elemToRemove);