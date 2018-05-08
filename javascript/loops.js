

var persons =[
  {id:1,fName:"Pal Kristian",lName:"Oien",address:"Something Street",number:91757342},
  {id:2,fName:"Ken",lName:"Madsen",address:"Something Street",number:74217834}
]



function myFunction(){
var listContainer = document.getElementById("showThings");
listContainer.innerHTML = "";
for (var i = 0; i < persons.length; i++){
  var items = persons[i];
  for (var x in items){
    var item = items[x];
    listContainer.innerHTML += "<li>" + item + "</li>";
  }
}
}


function myFunction2(){
  var listeContainer = document.getElementById("myList");
  listeContainer.innerHTML = "";
for (var i = 0; i < persons.length; i++){
  var listeItem = persons[i]

  var row = document.createElement("ul");
  var id = document.createElement("li");
  var fName = document.createElement("li");
  var lName = document.createElement("li");
  var address = document.createElement("li");
  var number = document.createElement("li");

  row.appendChild(id);
  row.appendChild(fName);
  row.appendChild(lName);
  row.appendChild(address);
  row.appendChild(number);

  id.innerText = "Kunde Nr: " + listeItem.id;
  fName.innerText = "First name: " + listeItem.fName;
  lName.innerText = "Last name: " + listeItem.lName ;
  address.innerText = "Address: " + listeItem.address;
  number.innerText = "Phone: " + listeItem.number;
  listeContainer.appendChild(row);

  }
};

var cardpile = ["Hearts 13","Hearts 12","Hearts 11","Hearts 10","Hearts 9","Hearts 8","Hearts 7","Hearts 6","Hearts 5","Hearts 4","Hearts 3","Hearts 2","Hearts 1",
"Clover 1","Clover 2","Clover 3","Clover 4","Clover 5","Clover 6","Clover 7","Clover 8","Clover 9","Clover 10","Clover 11","Clover 12","Clover 13",
"Spades 1","Spades 2","Spades 3","Spades 4","Spades 5","Spades 6","Spades 7","Spades 8","Spades 9","Spades 10","Spades 11","Spades 12","Spades 13",
"Diamond 1","Diamond 2","Diamond 3","Diamond 4","Diamond 5","Diamond 6","Diamond 7","Diamond 8","Diamond 9","Diamond 10","Diamond 11","Diamond 12","Diamond 13"
];

var hearts = [];
var clovers = [];
var spades = [];
var diamonds = [];

function sortCards(){
var myHeart = document.getElementById("heartCards");
myHeart.innerHTML = "";
var myClover = document.getElementById("cloverCards");
myClover.innerHTML = "";
var mySpade = document.getElementById("spadeCards");
mySpade.innerHTML = "";
var myDiamond = document.getElementById("diamondCards");
myDiamond.innerHTML = "";

for (var i = 0; i < cardpile.length; i++){
  if(cardpile[i][0] == "H"){
    hearts.push(cardpile[i]);
    myHeart.innerHTML = "<li>" + hearts + "</li>";
  }
  if(cardpile[i][0] == "C"){
    clovers.push(cardpile[i]);
      myClover.innerHTML = "<li>" + clovers + "</li>";
  }
  if(cardpile[i][0] == "S"){
    spades.push(cardpile[i]);
      mySpade.innerHTML = "<li>" + spades + "</li>";
  }
  if(cardpile[i][0] == "D"){
    diamonds.push(cardpile[i]);
    myDiamond.innerHTML = "<li>" + diamonds + "</li>";
  }
}
}

function sortHearts(){
  hearts.sort(function (a, b) {
  if (a.myHeart > b.myHeart) {
    return 1;
  }
  else if (a.myHeart < b.myHeart) {
     return -1;
  }
    return 0;
   });
}
