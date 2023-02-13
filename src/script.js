//DUPLICATE
//querySelect the duplicateButton then addEventListener to it
document.querySelector('.duplicateButton').addEventListener('click', function(e) {
  //clone the .wrapper class div
  const clonedCard = document.querySelector('.wrapper').cloneNode(true);
  //append the clone to the rest of the document body
  document.body.appendChild(clonedCard);
});

//DELETE
//querySelect the deleteButton then addEventListener to it
document.querySelector('.deleteButton').addEventListener('click', function(e) {
  //remove the last cloned instance of the wrapper class
  //this way only clones delete and original card stays
  document.querySelector('.wrapper:last-child').remove();
});

//CHANGE NAME
//querySelect the ChangeNameButton ]then addEventListener to it
document.querySelector('.changeNameButton').addEventListener('click', function(e) {
  //get newName from user input 
  let newName = prompt("Name this pokemon...");
  //querySelect the .header class then change inner H1 text to newName
  document.querySelector('.header h1').innerText = newName;
});