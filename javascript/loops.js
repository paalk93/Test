

var persons =[
  {id:1,fName:"Pal Kristian",lName:"Oien",address:"Something Street",number:91757342},
  {id:2,fName:"Ken",lName:"Madsen",address:"Something Street",number:74217834}
]



function myFunction(){
  var listContainer = document.getElementById("showThings");
  listContainer.innerHTML ="";
  var text ="";
  function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}
var obj = findObjectByKey(persons, 'id', 1);
 for (var i = 0; i < persons.length; i++){
  for(var x in persons[i]){
    text += x + " ";
    }
  }
  listContainer.innerHTML = "<li>" + text + "</li>";
}


function myFunction2(){
  var listeContainer = document.getElementById("myList");
  listeContainer.innerHTML = "";

for (var i = 0; i < persons.length; i++){
  var listeItem = persons[i]

  var ul = document.createElement("ul");
  var id = document.createElement("li");
  var fName = document.createElement("li");
  var lName = document.createElement("li");
  var address = document.createElement("li");
  var number = document.createElement("li");

  ul.appendChild(id);
  ul.appendChild(fName);
  ul.appendChild(lName);
  ul.appendChild(address);
  ul.appendChild(number);

  id.innerText = "Kunde Nr: " + listeItem.id;
  fName.innerText = "First name: " + listeItem.fName;
  lName.innerText = "Last name: " + listeItem.lName ;
  address.innerText = "Address: " + listeItem.address;
  number.innerText = "Phone: " + listeItem.number;
  listeContainer.appendChild(ul);

  }
}
