// Initialise la map des articl
class Article {
  constructor(id, pic, name, brand, category, price) {
    this.id = id;
    this.pic = pic;
    this.name = name;
    this.brand = brand;
    this.category = category;
    this.price = price;
    this.quantity = 1;
  }
}

let articles = [];
const iphone1 = new Article(1, "files/iphone.png", "Iphone 1", "Apple", "Hitech", 800);
const Mec_keyboard = new Article(2, "files/keyboard.png", "Mechanical keyboard", "Blackmagic Design", "Hitech", 1200);
const macbook2 = new Article(3, "files/macbook.png", "Macbook 2", "Apple", "Hitech", 680);
const hdd_corsair1 = new Article(4, "files/hdd.png", "HDD Corsair1", "Corsair", "Hitech", 800);
articles.push(iphone1, Mec_keyboard, macbook2, hdd_corsair1);
/************************méthode d'accès au local storage************************* */
Storage.prototype.setObjet = function(cle, objet)
{
 this.setItem(cle, JSON.stringify(objet));
}

Storage.prototype.getObject = function(cle)
{
 var valeur = this.getItem(cle);
 return valeur && JSON.parse(valeur);
}
/************************méthode d'accès au local storage************************* */
articles.forEach(art => {
  genDiv('articles',art);
  
});
function genDiv(idDomObject,article) {
  mySection = document.getElementById(idDomObject);

    myDiv = document.createElement('div');
    myDiv.className = 'container-one-article';
    myDiv.id = article.id;
    myImg = document.createElement('img');
    myImg.className = 'container-img';

    myText = document.createElement('p');
    myText.className = 'container-text';

    myButton = document.createElement('button');
    myButton.className = 'add-button';
    myButton.id = article.id;
    myButton.innerHTML = 'To the Cart!';
   
    myDiv.style.border = '1px solid black'; //Pour mettre un border à ta div, par exemple
    myImg.setAttribute('src', article.pic);
    myText.textContent = article.name;
  
    myButton.onclick = function () {
      genDiv('cartcontenant',article );

      /*******à modifier, un seul article est svg dans le local storage ajouter un test 
       * pour incrémenter la quantité * *********/

      localStorage.setObjet(article.id,article);
      /* addToCartList(article);   */   
    }; 

    myDiv.appendChild(myImg);
    myDiv.appendChild(myText);
    myDiv.appendChild(myButton);
    mySection.appendChild(myDiv);
  
}

function addToCartList(article) {
genDiv('cartcontenant',article );

}; 

const allArticleDiv = document.querySelectorAll("section #articles .dropdown-content");
for(let i = 0; i < allArticleDiv.length;i++){
alert(allArticleDiv[i].id);
}

