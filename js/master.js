// // JavaScript Document
// (function(){
// 	$('.thumbInfo img').on('click', function(){ //onclick image call to action for text
// 		$.getJSON('includes/ajaxQuery.php', function(data){
// 		console.log(data);
// 		//console.log(this);
		
// 		$('.modelName').text(data.modelName); // fetching model'info
		
// 		$('.priceInfo').text(data.pricing);// fetching priceInfo
            
// 		$('.modelDetails').text(data.modelDetails); // fetching modelDetails
		
// 		});
// 	});
		

// })();


(function(){
	var pokeImages = document.querySelectorAll(".thumbInfo img"),
	carModel = document.querySelector(".modelName"),
	carPrice = document.querySelector(".priceInfo"),
	carDetail =document.querySelector(".modelDetails"),
	httpRequest;

	function makeRequest(){
		httpRequest = new XMLHttpRequest();

		if(!httpRequest){
			console.log('please update browser');
			return false;
		}
		httpRequest.onreadystatechange = showPokemonInfo;
		httpRequest.open('GET', 'includes/ajaxQuery.php' + '?model=' + this.id);
		//alert(this.id);
		httpRequest.send();
	}

	function showPokemonInfo(){
		if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200){
			var carData = JSON.parse(httpRequest.responseText);
			//alert(carData);

			//critterHeader.firstChild.nodeValue = pokeData.pokeName;

			// [].forEach.call(document.querySelectorAll('.hidden'), function(item){
			// 	item.classList.remove('hidden');
			// });

			//criterImage.src = 'images/' + pokeData.pokeImage + '.png';
			carModel.firstChild.nodeValue = carData.model;
			carPrice.firstChild.nodeValue = carData.pricing ;
			carDetail.firstChild.nodeValue = carData.modelDetails;

		}
	}
			
	[].forEach.call(pokeImages, function(img) {
		img.addEventListener("click", makeRequest, false);
	});

})();