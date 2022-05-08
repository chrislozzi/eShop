
// Initialise un tableau d'objet article
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
const iphone1 = new Article(
  1,
  "files/iPhone-1.jpg",
  "Iphone 1",
  "Apple",
  "high-tech",
  800
);
const Mec_keyboard = new Article(
  2,
  "files/keyboard.png",
  "Mechanical keyboard",
  "Blackmagic Design",
  "high-tech",
  1200
);
const macbook2 = new Article(
  3,
  "files/macbook.png",
  "Macbook 2",
  "Apple",
  "high-tech",
  680
);
const hdd_corsair1 = new Article(
  4,
  "files/hdd.png",
  "HDD Corsair1",
  "Corsair",
  "high-tech",
  800
);

const caviard_1kg = new Article(
  5,
  "files/caviar.png",
  "caviard 1 kg",
  "caviar & friends",
  "food",
  3500
);

const truffe_blanche = new Article(
  6,
  "files/truffe-blanche-d-alba-1kg.jpg",
  "truffe blache d'alba - 1kg",
  "TrufflesUSA",
  "food",
  2500
);

const Kia_rio = new Article(
  7,
  "files/kia-rio.jpg",
  "kia rio",
  "kia",
  "car",
  7200
);

const Fiant_Punto = new Article(
  8,
  "files/fiat-punto.jpg",
  "Fiat Punto",
  "Fiat",
  "car",
  8500
);

articles.push(iphone1, Mec_keyboard, macbook2, hdd_corsair1, caviard_1kg, truffe_blanche, Kia_rio, Fiant_Punto);

/************************méthode d'accès au local storage************************* */
Storage.prototype.setObjet = function (cle, objet) {
  this.setItem(cle, JSON.stringify(objet));
};

Storage.prototype.getObject = function (cle) {
  var valeur = this.getItem(cle);
  return valeur && JSON.parse(valeur);
};

/************************construction des div le conteneur article************************* */
articles.forEach((art) => {
  genDivIntoListArticle("articles", art);

});
/************************génère une div dans la div articles**************************/

function genDivIntoListArticle(idDomObject, article) {
  mySection = document.getElementById(idDomObject);

  myDiv = document.createElement("div");
  myDiv.className = "container-one-article";
  myDiv.id = article.id;
  myDiv.classList.add(`category-${article.category}`);
  myImg = document.createElement("img");
  myImg.className = "container-img";

  myText = document.createElement("p");
  myText.className = "container-text";

  myButton = document.createElement("button");
  myButton.className = "add-button";
  myButton.id = article.id;
  myButton.innerHTML = "To the Cart!";

  myDiv.style.border = "1px solid black";
  myImg.setAttribute("src", article.pic);
  myText.innerHTML =
    article.name +
    "<br>" +
    "<br>" +
    article.brand +
    "<br>" +
    "<br>" +
    article.price +
    "€";

  myButton.onclick = function () {
    addToCart(article);
  };

  myDiv.appendChild(myImg);
  myDiv.appendChild(myText);
  myDiv.appendChild(myButton);
  mySection.appendChild(myDiv);

}

/*******************************ajout d'un article dans le panier*****************************  */
function addToCart(article) {

  if (localStorage.getItem(article.id) == null) {
    localStorage.setObjet(article.id, article);
    genDivIntoCart("cartcontenant", article);

  } else {

    article.quantity = article.quantity + 1;
    const myDiv = document.querySelector(`.article-${article.id}`)
    myDiv.remove();
    localStorage.setObjet(article.id, article);
    genDivIntoCart("cartcontenant", article);

  }
}
/********************************supprime un article du panier******************************  */
function removeFromCart(article) {
  if (article.quantity == 1) {
    localStorage.removeItem(article.id);
    const divToRemove = document.querySelector(`.article-${article.id}`);
    divToRemove.remove();
  } else {
    article.quantity = article.quantity - 1;
    const myDiv = document.querySelector(`.article-${article.id}`);
    myDiv.remove();
    localStorage.setObjet(article.id, article);
    genDivIntoCart("cartcontenant", article);
  }

}
/************************génère une div dans la div cartcontenant***********************  */
function addToCartListDiv(article) {

  genDivIntoCart("cartcontenant", article);

}

function genDivIntoCart(idDomObject, article) {
  mySection = document.getElementById(idDomObject);

  myDiv = document.createElement("div");
  myDiv.classList.add(`article-${article.id}`);

  myDiv.classList.add(`category-${article.category}`);
  myDiv.classList.add("container-one-article");

  myImg = document.createElement("img");
  myImg.className = "container-img";

  myText = document.createElement("p");
  myText.className = "container-text";

  myButton = document.createElement("button");
  myButton.className = "add-button";
  myButton.id = article.id;
  myButton.innerHTML = "Remove";

  myDiv.style.border = "1px solid black";
  myImg.setAttribute("src", article.pic);

  myText.innerHTML =
    article.name +
    "<br>" +
    "<br>" +
    article.brand +
    "<br>" +
    "<br>" +
    article.price +
    "€" +
    "<br>" +
    "<br>" +
    "Quantité: " + article.quantity;

  myButton.onclick = function () {
    removeFromCart(article);
  };

  myDiv.appendChild(myImg);
  myDiv.appendChild(myText);
  myDiv.appendChild(myButton);
  mySection.appendChild(myDiv);
}

window.onunload = function () {
	 localStorage.clear();
   
}

/********************************listner du select catérorie******************************  */
var elt = document.querySelector('select');
elt.addEventListener('change', (envent) => {
  const result = `${elt.value}`;
  displayOneCategory(result);
})


/********************************affiche les articles d'une catégorie**************************  */
function displayOneCategory(category) {
  
   allArticleDiv = document.querySelectorAll("section #articles .container-one-article");
   
   allArticleDiv.forEach((catDiv) => {

    catDiv.style.display ='none';
     console.log(catDiv.classList.contains("category-"+category));
     
    if((catDiv.classList.contains("category-"+category))) {
      catDiv.style.display="flex";
    }else if(category=='all'){
      catDiv.style.display ='flex';
    }
     
  
  });
    

/*   for(let i = 0; i < allArticleDiv.length ; i++){
    console.log(allArticleDiv[i].classList.contains("category-"+category));
    if(!allArticleDiv[i].classList.contains("category-"+category))
      allArticleDiv[i].style.display='none';
  } */
   
}


/********************************listner du bouton order*********************************/

const catBtn = document.querySelector('button');
catBtn.addEventListener('click', (envent) => {
  displayOrder();
})

/***********************************affichage de la commande******************************/

function displayOrder() {
  const myOrder = document.querySelector("section #order");
  var total = 0;
  var text = "";
  for (let i = 1; i <= localStorage.length; i++) {
    total += localStorage.getObject(i).quantity * localStorage.getObject(i).price;
  }

  document.querySelector("section #articles").style.display = "none";
  document.querySelector("section #cartcontenant").style.display = "none";
  text = "Total order : " + total +"€";
  myOrder.innerHTML = "Total order : " + total +"€";
  myOrder.style.display = "block";
  validateOrder(text)
}
/***********************************validation de la commande******************************/
function validateOrder(textTotal) {
  let text = textTotal+"\n Press ok to order!\n or Cancel.";
  if (confirm(text) == true) {
    text = "Thank you for your purchase";
  } else {
    text = "You canceled your order, get back to the Amazing Shop!";
  }
  document.getElementById("order").innerHTML = text;
}