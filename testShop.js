// Initialise la map des articl
function init() {

}
class Article {
  constructor(pic, name, brand, category, price) {
    this.pic = pic;
    this.name = name;
    this.brand = brand;
    this.category = category;
    this.price = price;
  }
}
let articles = [];
const iphone1 = new Article("/files/iphone.png", "Iphone 1", "Apple", "Hitech", 800);
const Mec_keyboard = new Article("files/keyboard/.png", "Mechanical keyboard", "Blackmagic Design", "Hitech", 1200);
const macbook2 = new Article("/files/macbook.png", "Macbook 2", "Apple", "Hitech", 680);
const hdd_corsair1 = new Article("/files/hdd.png", "HDD Corsair1", "Corsair", "Hitech", 100);
articles.push(iphone1, Mec_keyboard, macbook2, hdd_corsair1);
/* const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800); */

function genDiv() {


  articles.forEach(art => {
    myDiv = document.createElement('div');
    myDiv.id = 'article-container';
    myImg = document.createElement('img');
    myImg.id = 'img-article'
    myImg.setAttribute("src", art.pic);
    myDiv.onclick = function () {
      alert('Ajouté au panier');
    }; //Évènement ayant lieu lors du click sur la div
    myDiv.appendChild(myImg);
    document.getElementById("articles").appendChild(myDiv);

  });
}
/*************tentative d'appel de la fonction au chargement de la page************/
document.addEventListener('DOMContentLoaded', function genDiv() {

});