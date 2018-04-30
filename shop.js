
var dummy_mail = 'universalmail@mail.com'
var dummy_password = 'password123'
 var row;


$(function(){
 getData();
    var container = document.getElementById('data');
    row = document.createElement('div');
	row.classList.add('row');
	row.setAttribute('id','row');
	container.append(row);

});

function getData(){



   refreshServerTime();
   firebase.auth().signInWithEmailAndPassword(dummy_mail, dummy_password).then(function(result){
 
        loadData();
     
        }).catch(function(error) {
            
         
         $('#status').text(error);
             alert(error);
          
        });

}

function load(id,name,image_url,price){
	

	var item = document.createElement('div');
	item.classList.add('si','col-md-4');


 
	var h2 = document.createElement('h2');
	var text1 = document.createTextNode(name);
	h2.setAttribute('class','title');
	h2.appendChild(text1);
	item.append(h2);

	var img = document.createElement('img');
	 img.classList.add('product');
	img.setAttribute('src',image_url);
	item.append(img);

    var h4 = document.createElement('h4');
    var text2 = document.createTextNode(price);
    h4.setAttribute('class','price');
    h4.appendChild(text2);
    item.append(h4);

     return item;
  
}

function addToRow(item){
	
	row.append(item);

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
               
               addToRow(load(id,name,image_url,price));


                   document.getElementById('main3').scrollTop = document.getElementById('main3').scrollHeight;
      parent.scrollTop = parent.scrollHeight;
           });
  });
}

 function refreshServerTime() {        
        firebase.database().ref("/.info/serverTimeOffset").on('value', function(offset) {
            var offsetVal = offset.val() || 0;
            serverTime = Date.now() + offsetVal;
        });
}
