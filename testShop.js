// Initialise la map des articl
class Article {
  constructor(pic, name, brand, category, price) {
    this.pic = pic;
    this.name = name;
    this.brand = brand;
    this.category = category;
    this.price = price;
  }
}
 let articles=[];
const iphone1 = new Article("/files/iphone.png", "Iphone 1", "Apple", "Hitech", 800);
const Mec_keyboard = new Article("/files/keyboard.png", "Mechanical keyboard", "Blackmagic Design", "Hitech", 1200);
const macbook2 = new Article("/files/macbook.png", "Macbook 2", "Apple", "Hitech", 680);
const hdd_corsair1 = new Article("/files/hdd.png", "HDD Corsair1", "Corsair", "Hitech", 800);
articles.push(iphone1, Mec_keyboard, macbook2, hdd_corsair1);
/* const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800);
const Iphone1 = new Article(".png","Iphone 1","Hitech",800); */

function genDiv(){
mySection = document.getElementById('articles');
articles.forEach(art => {

myDiv = document.createElement('div');
myDiv.className = 'container-one-article';
myImg = document.createElement('img');
myImg.className = 'container-img';
myText = document.createElement('p');
myText.className = 'container-text';



myButton = document.createElement('button');
myButton.className ='container-button';
myButton.innerHTML = 'woua';


myDiv.style.border = '1px solid black'; //Pour mettre un border à ta div, par exemple
myImg.setAttribute('src',art.pic);
myText.textContent = art.name;
/* myDiv.onclick = function(){alert('click !');}; //Évènement ayant lieu lors du click sur la div */

myDiv.appendChild(myImg);
myDiv.appendChild(myText);
myDiv.appendChild(myButton);
mySection.appendChild(myDiv);
});}
