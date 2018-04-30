
var id;
var name;
var image_url;
var price;


$(function() {
   $('#signOut').hide();
	
$('#signin-button').click(function(){
 refreshServerTime();
signIn();
});

$('#save').click(function(){
  var input = $('#item_info').val().split(',');

  id = input[0];
  name = input[1];
  image_url = input[2];
  price = input[3];
   
saveData(id,name,image_url,price);
  
});



});

function getItems(id,name,image_url ,price){
  
  var tbody = document.getElementById('table-body');

  var row = document.createElement('tr');

  var td1 = document.createElement('td');//for the id
  var text1 = document.createTextNode(id);
  td1.appendChild(text1);
  row.append(td1);

  var td2 = document.createElement('td');//for the name
  var text2 = document.createTextNode(name);
  td2.appendChild(text2);
  row.append(td2);


  var td3 = document.createElement('td');//image
  var img = document.createElement('img');
  img.setAttribute('src',image_url);
  img.style.width = '50px';
  img.style.height = '50px'
  td3.append(img);
  row.append(td3);

  var td4 = document.createElement('td');//price
  var text3 = document.createTextNode(price);
  td4.appendChild(text3);
  row.append(td4);


  tbody.append(row);

  

}

function signIn(){

email = $('#email').val();
password = $('#password').val();


   refreshServerTime();
   firebase.auth().signInWithEmailAndPassword(email, password).then(function(result){
    $('#signin').hide();

        $('#main6').attr('hidden',false);
        $('#signOut').show();
        alert('signed in');
         loadData();
        
        }).catch(function(error) {
            
         
         $('#status').text(error);
             alert(error);
          
        });



}



 function refreshServerTime() {        
        firebase.database().ref("/.info/serverTimeOffset").on('value', function(offset) {
            var offsetVal = offset.val() || 0;
            serverTime = Date.now() + offsetVal;
        });
}

function signOut(){
    
        firebase.auth().signOut().then(function() {
             $('#main6').attr('hidden',true);
              $('#signin').show();
              $('#signOut').hide();
            }).catch(function(error) {
           
            alert('something went wrong');
        });    
       

}


function saveData(id,name,image_url,price){
   var newPostKey = firebase.database().ref().child('items').push().key;
      
      refreshServerTime();
      
      firebase.database().ref('items/' + serverTime).set({

        postKey: newPostKey,
        priority: Date.now(),
        id_number:id,
        i_name: name,
        i_img: image_url,
        i_price:price

      });

}


function loadData(){

   refreshServerTime();
   var getMessageKey = firebase.database().ref('items/').orderByChild("priority");
      getMessageKey.on('value', function(snapshot){
         $('#table-body').empty();
            var i =0;
            snapshot.forEach(function(child) {
               var id = child.val().id_number;
               var name = child.val().i_name;
                var image_url = child.val().i_img;
                var price = child.val(). i_price;
                i+=1;
                         console.log('i = '+ i);
               getItems(id,name,image_url,price);

                   document.getElementById('table-contents').scrollTop = document.getElementById('table-contents').scrollHeight;
      parent.scrollTop = parent.scrollHeight;
           });
  });
}
