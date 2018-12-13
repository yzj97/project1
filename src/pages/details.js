require(["../scripts/config.js"],function(){
	require(["jquery","common","font","swiper","_pubilc"],function($,com,font,swiper){
		
		var nav_item1 = document.querySelector(".nav-item1");
		var _list = document.querySelector(".list");
		
		nav_item1.onmouseenter = function(){
			
			_list.style.display = "block";
			
		}
		nav_item1.onmouseleave = function(){
			
			_list.style.display = "none";
			
		}
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
//获取点击src路径传递下去        
        var detail_list = document.querySelectorAll(".goods-list li img");
        var goods_img = document.querySelector(".goods-img")   
        var img_bck = document.querySelector(".bigbox img");
        for(let i = 0;i<detail_list.length;i++){
        	
        	detail_list[i].onclick = function(){
        		   for(var j = 0;j<detail_list.length;j++){
        		   	 detail_list[j].parentElement.style.borderColor = "#9D9D9D";
        		   }
        		    detail_list[i].parentElement.style.borderColor = "red";
        		    var _src = detail_list[i].src;
        		    goods_img.style.backgroundImage = `url(${_src})`; 
        		    img_bck.src = _src;      		    
        	}	
        }
//划过购物车的按钮的样子利用开关原理
         var _intocar = document.querySelector(".detail-car .into-car");
         var _hidecar = document.querySelector(".hide-car");
         var _style_slc =  Array.from(document.querySelectorAll(".detail-sel img")); 
         var _i = document.querySelector(".detail-sel span i")
         var _index = 1
         _intocar.onmouseenter = function(){
         	if(_index == 1){
         		_hidecar.style.display = "block"
         	}
         	_intocar.onmouseleave = function(){
         		_hidecar.style.display = "none"
         	}
         }
         for(let j = 0;j<_style_slc.length;j++){
         	
         	_style_slc[j].onclick = function(){
         		_index = 2;
         		_i.innerHTML = `跑步机款式${j+1}号`;
         		goods_img.style.backgroundImage = `url(${this.src})`;
         		img_bck.src = this.src;
         		
         		for(var m = 0;m<_style_slc.length;m++){
         			_style_slc[m].style.border = "1px solid #9D9D9D";
         		}
         		this.style.border = "1px solid #ff9700";
         		_style_slc.forEach(function(item,index){
         			item.onmouseenter = function(){
         				item.style.border = "1px solid #333333";
         			}
         			item.onmouseleave = function(){
         				if(index == j){
         					item.style.border = "1px solid #ff9700";
         				}else{
         					item.style.border = "1px solid #9d9d9d";
         				}
         			}
         			
         		})
         		
         	}
         }
    
        
//		放大镜	
			$(".goods-img").hover(function(){
				$(".goods-img .mover").show();
                $(".bigbox").show();
			}, function(){
				$(".goods-img .mover").hide();
                $(".bigbox").hide();
			})
			
			//大图小图的比例
			var scale = $(".goods-img").height()/$(".goods-img .mover").height();

			$(".goods-img").on("mousemove", function(e){
				var _left = e.pageX - $(this).offset().left - $(".goods-img .mover").width()/2;
				var _top = e.pageY - $(this).offset().top - $(".goods-img .mover").height()/2;
				$(".goods-img .mover").css({
					left: Math.min(Math.max(0, _left), $(".goods-img").width()-$(".goods-img .mover").width()), 
					top:  Math.min(Math.max(0, _top), $(".goods-img").height()-$(".goods-img .mover").height())
				})
				$(".bigbox img").css({
					left : -$(".goods-img .mover").position().left*scale,
					top : -$(".goods-img .mover").position().top*scale
				})
			})
//相关推荐
			var myswiper = new swiper('.swiper-container', {
				   autoplay: true,//可选选项，自动滑动
				   loop:true,
				   speed:2000,
				   pagination: {
			       el: '.swiper-pagination',
			       clickable: true,
			       bulletActiveClass: 'my-bullet-active',
			       bulletClass : 'my-bullet',
			       }
			})

//相关轮播推荐

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
			
          
	})    
})