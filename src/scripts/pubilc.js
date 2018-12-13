

define(["jquery"],function($){	
	$(".top-bull").on("mouseenter",function(){
	    	$(this).children().show();
	    	$(this).children().css({"color":"#666"});
	    })
	     $(".top-bull").on("mouseleave",function(){
	    	$(this).children().hide();
	    	$(this).css({"backgorundColor":"#fcfcfc","color":"#8c8c8c"})
	    })
	 $(".top-car").on("mouseenter",function(){
		  	  $(".car-listtext").show();
		  	  $(".car-listtext").css({"color":"#666"});
		  })
		   $(".top-car").on("mouseleave",function(){
		  	  $(".car-listtext").hide();
		  })
	    
	      $(".address-t").on("mouseenter",function(){
	    	  $(".index-city").show();
	      })
	       $(".address-t").on("mouseleave",function(){
	    	   $(".index-city").hide();
	  })
	       
            $(".search-l").on("focus",function(){
	       	  $(this).parent().css({"borderColor":"#ff6700"});
	       	  $(this).css({"borderColor":"#ff6700"});
	       	  $(this).siblings().css({"borderColor":"#ff6700"});
	       	  $(".search-list").css({"display":"block"});
	       	  $.each($(".search-list li"),function(){
	       	  	$(this).mouseenter(function(){
	       	  		 $(this).css({"background":"#fafafa"});
	       	  	})
	       	    $(this).mouseleave(function(){
	       	  		 $(this).css({"background":"#fff"});
	       	  	})
	       	  })
	       })
	        $(".search-l").on("blur",function(){
	        	 $(this).parent().css({"borderColor":"#e0e0e0"});
	       	     $(this).css({"borderColor":"#e0e0e0"});
	       	     $(this).siblings().css({"borderColor":"#e0e0e0"});
	       	      $(".search-list").css({"display":"none"});
	       	     
	        })
//jsonp_first
            $.ajax({
        	type:"get",
        	url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=266',
        	dataType:"jsonp",
        	success:function(data){
        		var arr = data.block_266[0].node;
        		 $.each($(".jsonp_first li a img"), function(index) {
        	    	   $(".jsonp_first li a img").eq(index).attr("src",arr[index].img);
        	    });
        	    $.each($(".jsonp_first li a span"), function(index) {
        	    	   $(".jsonp_first li a span").eq(index).text(arr[index].name);
        	    });
        	}
        })
//jsonp_234
            $.ajax({
        	type:"get",
        	url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=266',
        	dataType:"jsonp",
        	success:function(data){
        		var arr = data.block_266[1].node;
        		var arr1 = data.block_266[2].node;
        		var arr2 = data.block_266[3].node;
        		$.each($(".jsonp_second li a img"), function(index) {
        	    	   $(".jsonp_second li a img").eq(index).attr("src",arr[index].img);
        	    });
        	    $.each($(".jsonp_second li a span"), function(index) {
        	    	   $(".jsonp_second li a span").eq(index).text(arr[index].name);
        	    });
        	    $.each($(".jsonp_thr li a img"), function(index) {
        	    	   $(".jsonp_thr li a img").eq(index).attr("src",arr1[index].img);
        	    });
        	    $.each($(".jsonp_thr li a span"), function(index) {
        	    	   $(".jsonp_thr li a span").eq(index).text(arr1[index].name);
        	    });
        	    $.each($(".jsonp_four li a img"), function(index) {
        	    	   $(".jsonp_four li a img").eq(index).attr("src",arr2[index].img);
        	    });
        	    $.each($(".jsonp_four li a span"), function(index) {
        	    	   $(".jsonp_four li a span").eq(index).text(arr2[index].name);
        	    });
        	    }
        	  })
 //jsonp_five          
          $.ajax({
        	type:"get",
    	    url:'https://shop.yinyuetai.com/goods/listForArt.json?',
    	    dataType:"jsonp",
    	    success:function(datas){
    	    	var arr = datas.data
    	    	console.log(arr);
    	    	$.each($(".jsonp_five li a img"), function(index) {
    	    		$(".jsonp_five li a img").eq(index).attr("src",arr[index].artistImg)
    	    	});
    	    	$.each($(".jsonp_five li a span"), function(index) {
    	    		$(".jsonp_five li a span").eq(index).text(arr[index].artistName)
    	    	});
    	    }
        })
	        
//jsonp_six
	             $.ajax({
            	type:"get",
            	url:"https://localhost:8848/ajax/jsonp_six.json",
            	success:function(data){
            		$.each($(".jsonp_six li a img"),function(index){
            			$(".jsonp_six li a img").eq(index).attr("src",data[index].src)
            		})
            		$.each($(".jsonp_six li a span"),function(index){
            			$(".jsonp_six li a span").eq(index).text(data[index].id)
            		})
            	}
            }) 
//jsonp_sev
           $.ajax({
            	type:"get",
            	url:"https://localhost:8848/ajax/jsonp_sev.json",
            	success:function(data){
            		$.each($(".jsonp_sev li a img"),function(index){
            			$(".jsonp_sev li a img").eq(index).attr("src",data[index].src)
            		})
            		$.each($(".jsonp_sev li a span"),function(index){
            			$(".jsonp_sev li a span").eq(index).text(data[index].id)
            		})
            	}
            }) 
//jsonp_egt
           $.ajax({
            	type:"get",
            	url:"https://localhost:8848/ajax/jsonp_egt.json",
            	success:function(data){
            		$.each($(".jsonp_egt li a img"),function(index){
            			$(".jsonp_egt li a img").eq(index).attr("src",data[index].src)
            		})
            		$.each($(".jsonp_egt li a span"),function(index){
            			$(".jsonp_egt li a span").eq(index).text(data[index].id)
            		})
            	}
            })
//返回顶部操作	       
        $(window).scroll(function(){
        	$(".getback").css("display","block");       	
        	if($(window).scrollTop() == 0){
        		$(".getback").css("display","none");
        	}
        })
        $(".getback").click(function(){
        		$("html").animate({scrollTop:0},500);
        })
         $(".getback").hover(function(){
	    	$(this).css("background","rgb(102,102,102)");
	    	$(this).html("返回顶部");
	    },function(){
	    	$(this).css({"background":"url(../static/icon/t-popup-icons-png8.png) no-repeat","background-position":"-43px 8px","background-color":"rgb(102,102,102)"});
	    	$(this).html("");
	    })
	
})