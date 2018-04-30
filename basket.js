

$(function() {
	getItem();
});

function getItem(){
 
    for(var i = 1; i <= 6; i ++){
     if(sessionStorage.getItem(i) != NaN && sessionStorage.getItem(i) != null){
      //call postdata
      postData(i);
     }
    }

}
function postData(i){
//si col-md-4 as the class

var name = sessionStorage.getItem(i);
alert(name);
var price = sessionStorage.getItem(price+i);
var url = sessionStorage.getItem(url+i);

var container = document.getElementById('cart');

var col1 = document.createElement('div');
var h2 =  document.createElement('h2');
var text = document.createTextNode(name);
h2.appendChild(text);
col1.append(h2);
col1.setAttribute(' class','si col-md-4');

container.append(col1);

var col1 = document.createElement('div');
var h2 =  document.createElement('h2');
var text = document.createTextNode(name);
h2.appendChild(text);
col1.append(h2);
col1.setAttribute(' class','si col-md-4');

container.append(col1);


}
