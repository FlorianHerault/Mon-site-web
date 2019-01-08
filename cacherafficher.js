
$(document).ready(function(){
    $("button").click(function(){
	
		$('#cache').toggle('slow', function(){
        console.log('Mon tableau est caché/affiché');
    });
    });
});

