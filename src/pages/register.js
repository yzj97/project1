require(["../scripts/config.js"],function(){
	require(["jquery","common","font","swiper"],function($,com,font,swiper){
		
		$.auto_code = function(){
			var str = ""
			for(var i=0;i<60;i++){
				var nub = Math.round(Math.random()*9);
			    var az = String.fromCharCode(Math.round(Math.random()*(97-122)+122));
			    var AZ = String.fromCharCode(Math.round(Math.random()*(65-90)+90));
				str = str + nub + az +AZ;
			}
			var str1 = ""
			for(var j=0;j<4;j++){
				str1 = str1 + str.charAt(Math.round(Math.random()*(str.length-1)));
			}
			return str1;
		}
		$(".auth-code-txt").val($.auto_code());
		
		$(".auth-code-txt").click(function(){
			var str = $.auto_code();
			$(".auth-code-txt").val(str);
		})       
	})    
})