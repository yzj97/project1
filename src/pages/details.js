require(["../scripts/config.js"], function() {
	require(["jquery", "swiper", "_cookie", "_jcookie", "_pubilc"], function($, swiper, cookie) {

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

			//       if(_index == 2){
			//       	_intocar.onclick = function(){
			//       		console.log(123);
			//       		_main.style.display = "none";
			//       		_prepare.style.display = "block";
			//       		_breadcrumbs.innerHTML = "";
			//       		_succ_img.src = goods_img.src;
			//       	}
			//       }

			//		放大镜	
			$(".goods-img").hover(function() {
				$(".goods-img .mover").show();
				$(".bigbox").show();
			}, function() {
				$(".goods-img .mover").hide();
				$(".bigbox").hide();
			})

			//大图小图的比例
			var scale = $(".goods-img").height() / $(".goods-img .mover").height();

			$(".goods-img").on("mousemove", function(e) {
				var _left = e.pageX - $(this).offset().left - $(".goods-img .mover").width() / 2;
				var _top = e.pageY - $(this).offset().top - $(".goods-img .mover").height() / 2;
				$(".goods-img .mover").css({
					left: Math.min(Math.max(0, _left), $(".goods-img").width() - $(".goods-img .mover").width()),
					top: Math.min(Math.max(0, _top), $(".goods-img").height() - $(".goods-img .mover").height())
				})
				$(".bigbox img").css({
					left: -$(".goods-img .mover").position().left * scale,
					top: -$(".goods-img .mover").position().top * scale
				})
			})
			//相关推荐
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

			//相关轮播推荐

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

			//拿cookie 
			var id = 0
			$.ajax({
					type: "get",
					url: 'https://localhost:8848/ajax/goodslist.json',
					success: function(arr) {
						var _text_name = document.querySelector(".txt-name");
						var _txt_price = document.querySelector(".txt-price");
						var _detail_top = document.querySelector(".detail-top");
						var _txt_price = document.querySelector(".detail-price .price-big em");
						var detail_goods = document.querySelector(".goods-list");
						var detail_sel = document.querySelector(".detail-sel");
						var detail_list = document.querySelectorAll(".goods-list li img");
						var goods_img = document.querySelector(".goods-img");
						var _bck = document.querySelector(".bigbox");

						var str = document.cookie;
						var arr1 = str.split("; ");
						var arr2 = []
						for(var i = 0; i < arr1.length; i++) {
							arr2.push(arr1[i].split("=")[0]);
						}
						for(var j = 0; j < arr.length; j++) {
							for(var k = 0; k < arr2.length; k++) {
								if(arr[j].id == arr2[k]) {
									_detail_top.innerHTML = arr[j].describe;
									_text_name.innerHTML = arr[j].describe;
									_txt_price.innerHTML = arr[j].price;
									_txt_price.innerHTML = arr[j].price;
									id = arr[j].id
									goods_img.style.backgroundImage = `url(${arr[j].src})`;
									detail_goods.innerHTML = `
        	    			    <li><img src="${arr[j].src}"></li>
								<li><img src="${arr[j].src}"></li>
								<li><img src="${arr[j].src}"></li>
								<li><img src="${arr[j].src}"></li>
        	    			
        	    			`
									_bck.innerHTML = `
        	    			 <img src="${arr[j].src}">
        	    			`;
									detail_sel.innerHTML = `
        	    			    <span>已选择商品:<i></i></span>
								<img src="${arr[j].src}">
								<img src="${arr[j].src}">
								<img src="${arr[j].src}">
        	    			`
								}
							}
						}
						cookie.setCookie(id,id,-1)
						//获取点击src路径传递下去

						for(let i = 0; i < detail_list.length; i++) {

							detail_list[i].onclick = function() {
								for(var j = 0; j < detail_list.length; j++) {
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
						var _style_slc = Array.from(document.querySelectorAll(".detail-sel img"));
						var img_bck = document.querySelector(".bigbox img");
						var _i = document.querySelector(".detail-sel span i");
						var _main = document.querySelector("#goods-detail");
						var _prepare = document.querySelector("#prepare");
						var _breadcrumbs = document.querySelector("#breadcrumbs");
						var _succ_img = document.querySelector(".succ-img");
						var _index = 1
						_intocar.onmouseenter = function() {
							if(_index == 1) {
								_hidecar.style.display = "block"
							}
							_intocar.onmouseleave = function() {
								_hidecar.style.display = "none"
							}
						}
						for(let j = 0; j < _style_slc.length; j++) {

							_style_slc[j].onclick = function() {
								_index = 2;
								_i.innerHTML = `跑步机款式${j+1}号`;
								goods_img.style.backgroundImage = `url(${this.src})`;
								img_bck.src = this.src;

								for(var m = 0; m < _style_slc.length; m++) {
									_style_slc[m].style.border = "1px solid #9D9D9D";
								}
								this.style.border = "1px solid #ff9700";
								_style_slc.forEach(function(item, index) {
									item.onmouseenter = function() {
										item.style.border = "1px solid #333333";
									}
									item.onmouseleave = function() {
										if(index == j) {
											item.style.border = "1px solid #ff9700";
										} else {
											item.style.border = "1px solid #9d9d9d";
										}
									}

								})

								
										
									$(".into-car").on("click", function(){
										    console.log(123);
											$("#goods-detail").css("display", "none");
											$("#prepare").css("display", "block");
											$("#breadcrumbs").html("")
											$(".succ-img").attr("src", $(".bigbox img").attr("src"));                                            
											setCookie(id);
									})
									
									function setCookie(id) {
										var goods = JSON.parse($.cookie("goods")) || [];

										if(goods.length < 1) {
											goods.push({
												id: id,
												num: 1
											})
										} else {

											
											var onOff = true;

											$.each(goods, function(index, value) {
												if(value.id == id) {

													goods[index].num++;
													onOff = false;

												}
											})
											if(onOff) {

												goods.push({
													id:id,
													num: 1
												})

											}
										}
										$.cookie("goods", JSON.stringify(goods))

									}

								}
							

						}
					
				   }
			})

	})
})