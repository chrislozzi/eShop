// Initialise la map des articl
class Article {
  constructor(id, pic, name, brand, category, price) {
    this.id = id;
    this.pic = pic;
    this.name = name;
    this.brand = brand;
    this.category = category;
    this.price = price;
  }
}
let articles = [];
const iphone1 = new Article(1, "files/iphone.png", "Iphone 1", "Apple", "Hitech", 800);
const Mec_keyboard = new Article(2, "files/keyboard.png", "Mechanical keyboard", "Blackmagic Design", "Hitech", 1200);
const macbook2 = new Article(3, "files/macbook.png", "Macbook 2", "Apple", "Hitech", 680);
const hdd_corsair1 = new Article(4, "files/hdd.png", "HDD Corsair1", "Corsair", "Hitech", 800);
articles.push(iphone1, Mec_keyboard, macbook2, hdd_corsair1);
/* const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800); */

function genDiv() {
  mySection = document.getElementById('articles');
  articles.forEach(art => {

    myDiv = document.createElement('div');
    myDiv.className = 'container-one-article';

    myImg = document.createElement('img');
    myImg.className = 'container-img';

    myText = document.createElement('p');
    myText.className = 'container-text';

    myButton = document.createElement('button');
    myButton.className = 'add-button';
    myButton.innerHTML = 'To the Cart!';


    myDiv.style.border = '1px solid black'; //Pour mettre un border à ta div, par exemple
    myImg.setAttribute('src', art.pic);
    myText.textContent = art.name;

    myDiv.onclick = function () {
      alert(art.id);
     
    }; //Évènement ayant lieu lors du click sur la div */

    myDiv.appendChild(myImg);
    myDiv.appendChild(myText);
    myDiv.appendChild(myButton);
    mySection.appendChild(myDiv);
  });
}

function addToCartList() {

}

function duplicate() {
  var clone = this.cloneNode(true); //"deep" clone
  clone.id = ""; //there can only be one element with an ID
  clone.onclick = duplicate; //event handlers are not cloned
  cartContainer = document.getElementById('cartcontenant')
  cartContainer.appendChild(clone);
}