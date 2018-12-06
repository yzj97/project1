
require(["../scripts/config.js"],function(){
	require(["jquery","common","font","swiper"],function($,com,font,swiper){

	    new swiper('.swiper-container', {
			autoplay: true,
			loop:true, 
			pagination: {
		       el: '.swiper-pagination',
		    }
		})
	   var index = 2;
	   $("html").on("click",function(){
	   	
	    $.ajax({
	    	url:"https://localhost:8848/listmore?pageNo="+index+"&pageSize=15",
	    	success:function(data){
	    		console.log(data);
	    		index++
	    	}
	    })
	   })

//	    $.ajax({
//	    	type:"get",
//	    	url:"http://suggestion.baidu.com/su?wd=詹姆斯",
//	    	dataType:"jsonp",
//	    	jsonp:"cb",
//	    	success:function(data){	 
//	    		var $div = $(".swiper-slide");
//	    		var $list = data.s;
//	    		$.each($list,(index,item)=>{
//	    			$div.eq(index).html(item);
//	    		})
//         }
//	    })
//	    

    })
})

