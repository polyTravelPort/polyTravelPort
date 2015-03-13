document.addEventListener('polymer-ready', function() {
  var navicon = document.getElementById('navicon');
  var drawerPanel = document.getElementById('drawerPanel');
  navicon.addEventListener('click', function() {
    drawerPanel.togglePanel();
  });
});



 function handleFavorite ()
 {
    $(function(){
      $("#changePanel").load("tcard.html"); 
    });
 };
 
 	document.querySelector('#cards').addEventListener('swipeable-card-swipe-away', function(e)
	{
//		console.log( document.querySelector('#cards') );
//		console.log( e.target.parentNode );
//		console.log( document.querySelector('#selectedCards') );
//		var selectedCards = document.querySelector('#selectedCards');
//		var cards = document.querySelector('#cards');

//		cards.removeChild(e.target);
		e.target.parentNode.removeChild(e.target);
//		selectedCards.appendChild( e.target );
	});

	function decreaseShadow()
	{
		var card = document.querySelector('#shadow_demo');
		var z = parseInt(card.getAttribute('z'));
		z = z > 0 ? z - 1 : 0;
		card.setAttribute('z', z);
	}

	function increaseShadow()
	{
		var card = document.querySelector('#shadow_demo');
		var z = parseInt(card.getAttribute('z'));
		z = z < 5 ? z + 1 : 5;
		card.setAttribute('z', z);
	}
 

