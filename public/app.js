var data = [
{catName: 'Jabba', favouriteFood: "chicken", catImage: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"}, 
{catName: "Dimgy", favouriteFood: "yoghurt", catImage: "http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg"}, 
{catName: "Pushkin", favouriteFood: "frogs", catImage: "https://files.graphiq.com/stories/t2/tiny_cat_12573_8950.jpg"}];

var createCatElement= function (name, favouriteFood) {
  var catElement = document.createElement('ul');
  var catName = document.createElement('li');
  catName.innerText = name;
  var favFood = document.createElement('li');
  favFood.innerText = favouriteFood;
  catElement.appendChild(catName);
  catElement.appendChild(favFood);
  return catElement;
}

var createImage = function(url) {
  var catImage = document.createElement('img');
  catImage.src = url;
  return catImage;
}

var appendElements = function (catElement, catImage, cats) {
  cats.appendChild(catElement);
  cats.appendChild(catImage);
}

var addCat = function(name, favouriteFood, catUrl) {
  var catElement = createCatElement(name, favouriteFood);
  var catImage = createImage(catUrl);
  var cats = document.getElementById("cats");
  appendElements(catElement, catImage, cats);
}

var addSeveralCats = function() {
  data.forEach(function(singleCat) {
  addCat(singleCat.name, singleCat.favouriteFood, singleCat.catImage);
  })
}


///Entry point: 

var app = function () {
  addCat("meena", "mackerel", "http://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-4-57b30a939dff5__605.jpg");
  addSeveralCats();
}

//after html loads then: 
window.onload = app;