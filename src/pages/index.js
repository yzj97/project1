
require(["../scripts/config.js"],function(){
	require(["jquery","swiper","_cookie","_jcookie","_pubilc"],function($,swiper,cookie){
	        
	   


	  var myswiper = new swiper('.banner-navs', {
			autoplay: true,
			loop: true, 
			speed: 2000,
			pagination: {
		       el: '.swiper-pagination',
		       clickable: true,
		       bulletActiveClass: 'my-bullet-active',
		       bulletClass : 'my-bullet',
		 },
	        navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
        }
		})
	    
	    $(".banner-navs").hover(function(){
	    	myswiper.autoplay.stop();
	    },function(){
	    	myswiper.autoplay.start();
	    })
	    
	    var myswiper1 = new swiper(".goodsnav-list", {
			autoplay: true,
			loop:true, 
			speed:2000,
			navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
           }
         })
	    $(".goodsnav-list").hover(function(){
	    	myswiper1.autoplay.stop();
	    },function(){
	    	myswiper1.autoplay.start();
	    })
	    
	    
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
	       
//	        var search_list_li = document.querySelectorAll(".search-list li");
//	        var search_left = document.querySelector(".search-l")
//	        for(let i = 0;i<search_list_li.length;i++){
//	        	search_list_li[i].onclick = function(){   
//	        	       search_left.value = search_list_li[i].innerHTML;
//	        	}
//	        }
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
	        var goods_list = document.querySelectorAll(".list-item-goods");
	        var hide_list = document.querySelectorAll(".hide-list");
	        
	        for(let i = 0;i<goods_list.length;i++){
	        	goods_list[i].onmouseenter = function(){
	        		hide_list[i].style.display = "block"
	        		
	        	}
	        	goods_list[i].onmouseleave = function(){
	        		hide_list[i].style.display ="none"
	        	}
	        }
	       
	        //搜索框请求接口
//	        $(".search-l").on("input",function(){
//	        	console.log($('.search-l'));
//	        	$.ajax({
//	        		type:"get",
//	        		url:`http://suggestion.baidu.com/su?wd=${$(".search-l").val()}`,
//	        		dataType:"jsonp",
//	        		jsonp:"cb",
//	        		success:function(data){
//	        			var arr = data.s;
//	        			console.log(arr);
//	        			$.each($(".search-list-cont"),function(index){
//	        				if(index<=7){
//	        					$(".search-list-cont").eq(index).html = arr[index];
//	        				}
//	        			})
//	        		}
//	        	})
//	        })	

//健身机和jsonp_first
        $.ajax({
        	type:"get",
        	url:'https://localhost:8848/ajax/goodslist.json',
        	success:function(arr){
        	    $.each($(".equipment-goods-list-item a img"),function(index){
        	    		$(".equipment-goods-list-item a img").eq(index).attr("src",arr[index+8].src);
        	    })
        	    $.each($(".equipment-goods-list-item a span"), function(index){
        	    	   $(".equipment-goods-list-item a span").eq(index).html(arr[index+8].describe);
        	    });
        	    $.each($(".equipment-goods-list-item a b"), function(index){
        	    	   $(".equipment-goods-list-item a b").eq(index).html(arr[index+8].id);
        	    });
        	    $.each($(".equipment-goods-list-item a em"), function(index){
        	    	   $(".equipment-goods-list-item a em").eq(index).html(arr[index+8].price);
        	    });  
        	}
        })
       
//banner请求
        $.ajax({
        	type:"get",
        	url:"https://localhost:8848/ajax/banner.json",
        	success:function(data){
        		$.each($(".banner-json"), function(index){
        				$(".banner-json").eq(index).attr("src",data[index].src);
        		});
        	}
        })
//力量器械请求和jsonp_234
        $.ajax({
        	type:"get",
        	url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=266',
        	dataType:"jsonp",
        	success:function(data){
        		var arr = data.block_266[1].node;
        		var arr1 = data.block_266[2].node;
        		var arr2 = data.block_266[3].node
        			
        		$.each($(".power-goods-list-item a img"),function(index){
        	    		$(".power-goods-list-item a img").eq(index).attr("src",arr[index].img);
        	    })
        	    $.each($(".power-goods-list-item a span"), function(index){
        	    	   $(".power-goods-list-item a span").eq(index).html(arr[index].name);
        	    });
        	    $.each($(".power-goods-list-item a b"), function(index){
        	    	   $(".power-goods-list-item a b").eq(index).html(arr[index].skuid);
        	    });
        	    $.each($(".power-goods-list-item a em"), function(index){
        	    	   $(".power-goods-list-item a em").eq(index).html(arr[index].skuprice);
        	    });
        	   
//按摩养生接口                  
                $.each($(".massage-goods-list-item a img"),function(index){
                	   $(".massage-goods-list-item a img").eq(index).attr("src",arr1[index].img);
                })
                $.each($(".massage-goods-list-item a span"), function(index){
        	    	   $(".massage-goods-list-item a span").eq(index).html(arr1[index].name);
        	    });
        	    $.each($(".massage-goods-list-item a b"), function(index){
        	    	   $(".massage-goods-list-item a b").eq(index).html(arr1[index].skuid);
        	    });
        	    $.each($(".massage-goods-list-item a em"), function(index){
        	    	   $(".massage-goods-list-item a em").eq(index).html(arr1[index].skuprice);
        	    });
        	   }
        	  })

//小轮播请求
                $.ajax({
                	type:"get",
                	url:"https://localhost:8848/ajax/navbanner.json",
                	success:function(data){
	                    $.each($(".goodsnav-list-first-goods .goodsnav-item a img"),function(index){
	                	
	                		$(".goodsnav-list-first-goods .goodsnav-item a img").eq(index).attr("src",data[index].src);
		                	
		                })
		                $.each($(".goodsnav-list-first-goods .goodsnav-item a span"),function(index){
		                	
		                		$(".goodsnav-list-first-goods .goodsnav-item a span").eq(index).html(data[index].id);
		                		
		                })
		                $.each($(".goodsnav-list-first-goods .goodsnav-item a b"),function(index){
		                		$(".goodsnav-list-first-goods .goodsnav-item a b").eq(index).html(data[index].describe);
		                		 
		                })
		                $.each($(".goodsnav-list-first-goods .goodsnav-item a em"),function(index){ 	
		                		 $(".goodsnav-list-first-goods .goodsnav-item a em").eq(index).html(data[index].price);
		                })
                	}
                	
                })
                $.ajax({
                	type:"get",
                	url:"https://localhost:8848/ajax/navbanner1.json",
                	success:function(data){
	                    $.each($(".goodsnav-list-second-goods .goodsnav-item a img"),function(index){
	                	
	                		$(".goodsnav-list-second-goods .goodsnav-item a img").eq(index).attr("src",data[index].src);
		                	
		                })
		                $.each($(".goodsnav-list-second-goods .goodsnav-item a span"),function(index){
		                	
		                		$(".goodsnav-list-second-goods .goodsnav-item a span").eq(index).html(data[index].id);
		                		
		                })
		                $.each($(".goodsnav-list-second-goods .goodsnav-item a b"),function(index){
		                		$(".goodsnav-list-second-goods .goodsnav-item a b").eq(index).html(data[index].describe);
		                		 
		                })
		                $.each($(".goodsnav-list-second-goods .goodsnav-item a em"),function(index){ 	
		                		 $(".goodsnav-list-second-goods .goodsnav-item a em").eq(index).html(data[index].price);
		                })
                	}
                	
                })
// 存cookie 
            var ali = document.querySelectorAll(".equipment-goods-list-item");
            var ab = document.querySelectorAll(".equipment-goods-list-item a b")
            for(let i = 0;i<ali.length;i++){
            	ali[i].onclick = function(){
            		var id = ab[i].innerHTML;
            		cookie.setCookie(id,id,7);
            	}
            }
            
          $.ajax({
        	type:"get",
        	url:'https://localhost:8848/ajax/goodslist.json',
        	success:function(arr){
        	    $.each($(".treadmill-goods-list-item a img"),function(index){
        	    		$(".treadmill-goods-list-item a img").eq(index).attr("src",arr[index].src);
        	    })
        	    $.each($(".treadmill-goods-list-item a span"), function(index){
        	    	   $(".treadmill-goods-list-item a span").eq(index).html(arr[index].describe);
        	    });
        	    $.each($(".treadmill-goods-list-item a b"), function(index){
        	    	   $(".treadmill-goods-list-item a b").eq(index).html(arr[index].id);
        	    });
        	    $.each($(".treadmill-goods-list-item a em"), function(index){
        	    	   $(".treadmill-goods-list-item a em").eq(index).html(arr[index].price);
        	    });  
        	}
        })	 
        
        
//存Cookie
        var alis = document.querySelectorAll(".treadmill-goods-list-item");
        var eab = document.querySelectorAll(".treadmill-goods-list-item a b");
            for(let i = 0;i<alis.length;i++){
            	alis[i].onclick = function(){            		
            		var id = eab[i].innerHTML;            		
            		cookie.setCookie(id,id,7);
            	}
            }
                

	})    
})
//跑步机请求接口
 window.onload = function(){	
	        	
//	        var _script = document.createElement("script");
//	        	_script.src = "https://shop.yinyuetai.com/goods/listForArt.json?callback=back";
//	        	document.body.appendChild(_script);
//	       }	        
//	       function back(datas){
//	       	var _treadmill = document.querySelector(".treadmill-goods-list")
//	       	
//	       	var arr = datas.data;
//	       	var str = ''
//	       	
//	       	for(var i = 0; i<datas.data.length;i++){		
//	       		str = str + `
//	       		   <li class="treadmill-goods-list-item">
//	       		     <a href="details.html">
//						<img src="${arr[i].artistImg}">
//						<span>${arr[i].artistName}</span>
//	    				<b>${arr[i].artistName}</b>
//	    				<em>${arr[i].artistId}</em>
//	    				<s class="news"></s>
//				    </a>
//	       		   </li>
//	       		`
//	       	}
//	       	_treadmill.innerHTML = str

           
        
        
}

