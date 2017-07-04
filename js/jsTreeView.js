var file=(function(){
	//private variables
	var $file = "";
	//constructor 
	var file=function(_file){
		$file = $(_file);
	}
	$(document).on("click",".file",function(){
		clickFile();
	});
	var clickFile = function(){
		alert($(this).children("label").text());
	};
}());
