// //**** getElementById */

// var Doc = document.getElementById("head1");

// Doc.innerHTML = "I have changed the heading by ID";

// Doc.style.color = "red";

// //*** getElementbyClassName */  

// var Doc1 = document.getElementsByClassName("head2")

// Doc1.style.color = "red";

// Doc1[0].innerHTML = "By using innerHTML with index manipulation";

// //*** document.getElementsByTagName */

// var Doc2 = document.getElementsByTagName("p1");

// Doc2[1].innerHTML = "changed by TagName";

// Doc2.style.color = "red";

//****  document.getElementsByName */

var Doc3 = document.getElementsByTagName("text")[0];
var Doc4 = document.getElementsById("Call");

function message(){
    Doc4.innerHTML = "Hello" + Doc3.value;

}