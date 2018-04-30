var description  = ['Enhance your look with this amazing maasai blue yellow black bracelet that can go well with any of your African print Ankara dress.',
'Maasai traditional earrings to give you an authentic African look. Match the earrings with causual African wear',
'Enhance your look with this amazing maasai beaded bracelet that can go well with any of your African print Ankara dress.',
'A classic red wrist lace to go with any type of wear. Can also go well with any of your African print Ankara dress.',
'Elegant black earrings to go well with any form of wear. can go well with any of your African print Ankara dress.',
'A traditional Maasai necklace to go well with African wear. Great for rocking during weddings and events without being way over the top'
];



var product_price, procuct_name,product_image_url,item_id;


$(function() {
	
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);

	$('#load').click(function(){
      $('#data').removeAttr("hidden");
     $('#load').hide();
	});


	$('.si').click(function(){
      $('#main2').hide();
        $('#main3').removeAttr("hidden");
         $('#main3').show();

      product_image_url =  $(this).find('img').attr('src');
     procuct_name = $(this).find('h2').text();
      product_price = $(this).find('h4').text();
     item_id = $(this).find('span').text();
      

     $("#img_item").attr('src',product_image_url);

$('#item_title').text(procuct_name);
$('#itm_price').text(product_price);
$('#description').text(description[parseInt(item_id)-1]);

   
   
     
	});
});


function storeItemData(){
	//store price, name, image src,id,
	sessionStorage.setItem(item_id,procuct_name);
	sessionStorage.setItem('price'+item_id,itm_price);
	sessionStorage.setItem('url'+item_id,product_image_url);
	alert(procuct_name + 'added to cart');


}
