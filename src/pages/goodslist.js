require(["../scripts/config.js"], function() {
	require(["jquery", "swiper", "_cookie","_jcookie", "_pubilc"], function($, swiper, cookie) {

		var nav_item1 = document.querySelector(".nav-item1");
		var _list = document.querySelector(".list");

		nav_item1.onmouseenter = function() {

			_list.style.display = "block";

		}
		nav_item1.onmouseleave = function() {

			_list.style.display = "none";

		}
		var goods_list = document.querySelectorAll(".list-item-goods");
		var hide_list = document.querySelectorAll(".hide-list");

		for(let i = 0; i < goods_list.length; i++) {
			goods_list[i].onmouseenter = function() {
				hide_list[i].style.display = "block"

			}
			goods_list[i].onmouseleave = function() {
				hide_list[i].style.display = "none"
			}
		}
		//相关轮播推荐
		var myswiper = new swiper('.swiper-container', {
			//				   autoplay: true,//可选选项，自动滑动
			//				   loop:true,
			speed: 2000,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				bulletActiveClass: 'my-bullet-active',
				bulletClass: 'my-bullet',
			}
		})

		$.ajax({
			type: "get",
			url: "https://localhost:8848/ajax/navbanner.json",
			success: function(data) {
				$.each($(".goodsnav-list-first-goods .goodsnav-item a img"), function(index) {

					$(".goodsnav-list-first-goods .goodsnav-item a img").eq(index).attr("src", data[index].src);

				})
				$.each($(".goodsnav-list-first-goods .goodsnav-item a span"), function(index) {

					$(".goodsnav-list-first-goods .goodsnav-item a span").eq(index).html(data[index].id);

				})
				$.each($(".goodsnav-list-first-goods .goodsnav-item a b"), function(index) {
					$(".goodsnav-list-first-goods .goodsnav-item a b").eq(index).html(data[index].describe);

				})
				$.each($(".goodsnav-list-first-goods .goodsnav-item a em"), function(index) {
					$(".goodsnav-list-first-goods .goodsnav-item a em").eq(index).html(data[index].price);
				})
			}

		})
		$.ajax({
			type: "get",
			url: "https://localhost:8848/ajax/navbanner1.json",
			success: function(data) {
				$.each($(".goodsnav-list-second-goods .goodsnav-item a img"), function(index) {

					$(".goodsnav-list-second-goods .goodsnav-item a img").eq(index).attr("src", data[index].src);

				})
				$.each($(".goodsnav-list-second-goods .goodsnav-item a span"), function(index) {

					$(".goodsnav-list-second-goods .goodsnav-item a span").eq(index).html(data[index].id);

				})
				$.each($(".goodsnav-list-second-goods .goodsnav-item a b"), function(index) {
					$(".goodsnav-list-second-goods .goodsnav-item a b").eq(index).html(data[index].describe);

				})
				$.each($(".goodsnav-list-second-goods .goodsnav-item a em"), function(index) {
					$(".goodsnav-list-second-goods .goodsnav-item a em").eq(index).html(data[index].price);
				})
			}

		})

		//更多按钮
		var $index = 1
		$(".more").on("click", function() {
			if($index == 1) {
				$(".filter-second-sel").animate({
					"height": "90px"
				})
				$index = 2;
			} else {
				$(".filter-second-sel").animate({
					"height": "45px"
				})
				$index = 1;
			}

		})				
				class Page {
					constructor(options) {
						this.url = options.url;
						this.list = options.list;
						this.left = options.left;
						this.right = options.right;
						this.pagelist = options.pagelist;
						this.num = options.num;

						this.index = 0;

						this.load()
					}
					load() {
						var that = this;
						$.ajax({
							url: this.url,
							success: function(res) {
								that.res = res;
								that.createPage()
								that.display()	
								that.sortprice();
								that.sortsales();
							}
						})
					}
					createPage() {
						this.maxNum = Math.ceil(this.res.length / this.num);
						this.pagelist.html("");
						for(var i = 0; i < this.maxNum; i++) {
							this.pagelist.append($("<li>" + (i + 1) + "</li>"))
						}

						this.pagelist.find("li").eq(this.index).addClass("active").siblings().removeClass("active")

						this.addEvent()
					}
					addEvent() {
						var that = this;
						this.left.on("click", function() {
							that.changeIndex("l")
						})
						this.right.on("click", function() {
							that.changeIndex("r")
						})	
					}
					changeIndex(type) {
						if(type == "l") {
							if(this.index == 0) {
								this.index = this.maxNum - 1
							} else {
								this.index--
							}
						} else {
							if(this.index == this.maxNum - 1) {
								this.index = 0
							} else {
								this.index++
							}
						}
						this.pagelist.find("li").eq(this.index).addClass("active").siblings().removeClass("active")
						//			console.log(this.index)
						this.display()						
					}
					display() {
						var str = "";

						for(var i = this.index * this.num; i < this.index * this.num + this.num; i++) {
							if(i < this.res.length) {
								str += `<div class="main-container-item">
						           	  	    <img class="bigimg" src="${this.res[i].src}">
								    		<a class="xinghao">${this.res[i].id}</a>
								    		<span class="xinxi">${this.res[i].describe}</span>
								    		<p>${this.res[i].price}<b>${this.res[i].oldprice}</b></p>
								    		<div class="img-slc">
								    			<img src="${this.res[i].src}">
								    			<img src="${this.res[i].src}">
								    			<img src="${this.res[i].src}">
								    		</div>	
								    		<a class="love">
								    			<i class="iconfont icon-xihuan" style="color: #333333;font-size: 26px;"></i><span>喜欢</span>
								    		</a>
								    		<a class="chakan">
								    			<span>添加购物车</span><i class="iconfont icon-jiarugouwuche" style="color: #333333;font-size: 26px;"></i>
								    		</a> 
								   </div>`
							}
						}
						this.list.html(str)
						this.lovechakan();
						this.jionCookie();						
						
					}
//喜欢出现     					
					lovechakan(){
							$(".main-container-item").each(function(index, item) {
							$(item).hover(function() {
								$(".love").eq(index).css({
									"display": "block"
								});
								$(".love").eq(index).hover(function() {
									$(".love span").eq(index).css({
										"display": "inline-block"
									})
								}, function() {
									$(".love span").eq(index).css({
										"display": "none"
									})
								})
								$(".chakan").eq(index).css({
									"display": "block"
								});
								$(".chakan").eq(index).hover(function() {
									$(".chakan span").eq(index).css({
										"display": "inline-block"
									})
								}, function() {
									$(".chakan span").eq(index).css({
										"display": "none"
									})
								})
							}, function() {
								$(".love").eq(index).css({
									"display": "none"
								});
								$(".chakan").eq(index).css({
									"display": "none"
								});
							})
						})	
					}
					jionCookie(){
						var that = this;
						$.each($(".chakan i"),function(_index,item){
            			  $(item).on("click",function(){
            				  that.id = $(".xinghao").eq(_index).html();
            				  alert("添加购物车成功！");
            				  that.setCookie();
            			  })
            		   })
					}
					setCookie(){
						this.goods = JSON.parse(localStorage.getItem("goods")) || [];
						
	            		
	            		if(this.goods.length < 1){
	            			this.goods.push({
	            				id:this.id,
	            				num:1
	            			})
	            		}else{
	            			
	            			var that = this;
	            			var onOff = true;
	            			
	            			$.each(this.goods,function(index,value){
	            				if(value.id == that.id){
	            					
	            					that.goods[index].num++;
	            					onOff = false;
	            					
	            				}
	            			})
	            			    if(onOff){
	            			    	
	            			    	this.goods.push(
	            			    		{
	            			    			id:this.id,
	            			    			num:1
	            			    		}
	            			    	)
	            			    	
	            			    	
	            			    }
	            		}	            		
	            		localStorage.goods = JSON.stringify(this.goods);
            		
            	}
			    sortprice(){
			    	var that = this;
			    	$(".jiage").on("click",function(){
			    		for(var i = 0;i<that.res.length;i++){
			    			for(var j = i+1;j<that.res.length;j++){
			    				
			    				if(parseInt(that.res[i].price)<parseInt(that.res[j].price)){
			    					[that.res[i],that.res[j]] = [that.res[j],that.res[i]];
			    				}			    				
			    			}			    			
			    		}
			    		console.log(that.res)
			    		that.display();
			    	})
			    	
			    }
			    sortsales(){			    	
			    	var that = this;
			    	$(".sales").on("click",function(){
			    		for(var i = 0;i<that.res.length;i++){
			    			for(var j = i+1;j<that.res.length;j++){
			    				
			    				if(parseInt(that.res[i].sales)<parseInt(that.res[j].sales)){
			    					[that.res[i],that.res[j]] = [that.res[j],that.res[i]];
			    				}			    				
			    			}			    			
			    		}
			    		console.log(that.res)
			    		
			    		that.display();
			    	})
			    }
                
				
					
			}

				new Page({
					url: "https://localhost:8848/ajax/goodslist.json",
					list: $(".main-container"),
					left: $(".btnL"),
					right: $(".btnR"),
					pagelist: $(".page"),
					num: 8
				})
				
           
				
	})
})