

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
     items : 4,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
    autoHeight : true
  }); 
  
  $("#owl-demo_2").owlCarousel({
    navigation : false, // показывать кнопки next и prev 
 
      slideSpeed : 300,
      paginationSpeed : 400,
 
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
     }); 

  $("#owl-demo_3").owlCarousel({
    navigation : false, // показывать кнопки next и prev 
 
      slideSpeed : 300,
      paginationSpeed : 400,
 
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
     }); 
   $("#owl-demo_4").owlCarousel({
    navigation : false, // показывать кнопки next и prev 
 
      slideSpeed : 300,
      paginationSpeed : 400,
 
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
     }); 
   var pop = document.getElementById("pop");
   var pop2 = document.getElementById("pop2");
   var popup = document.getElementById("popup");
  var popup_2 = document.getElementById("popup_2");
   pop.onclick = function() {
   	 pop.style.className = "b-popup";
   	 popup.style.display = "block";
   	  

   	};

   	popup.onclick = function() {
   		popup.style.display = "none";
   	};
  
});