// JavaScript Document
(function(){
	$('.thumbInfo img').on('click', function(){ //onclick image call to action for text
		$.getJSON('includes/ajaxQuery.php', function(data){
		console.log(data);
		//console.log(this);
		
		$('.modelName').text(data.modelName); // fetching model'info
		
		$('.priceInfo').text(data.pricing);// fetching priceInfo
            
		$('.modelDetails').text(data.modelDetails); // fetching modelDetails
		
		});
	});
		

})();