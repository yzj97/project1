"use strict";require(["../scripts/config.js"],function(){require(["jquery","swiper","_cookie","_jcookie","_pubilc"],function(s,o,t){var e=new o(".banner-navs",{autoplay:!0,loop:!0,speed:2e3,pagination:{el:".swiper-pagination",clickable:!0,bulletActiveClass:"my-bullet-active",bulletClass:"my-bullet"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});s(".banner-navs").hover(function(){e.autoplay.stop()},function(){e.autoplay.start()});var i=new o(".goodsnav-list",{autoplay:!0,loop:!0,speed:2e3,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});s(".goodsnav-list").hover(function(){i.autoplay.stop()},function(){i.autoplay.start()}),s(".top-bull").on("mouseenter",function(){s(this).children().show(),s(this).children().css({color:"#666"})}),s(".top-bull").on("mouseleave",function(){s(this).children().hide(),s(this).css({backgorundColor:"#fcfcfc",color:"#8c8c8c"})}),s(".top-car").on("mouseenter",function(){s(".car-listtext").show(),s(".car-listtext").css({color:"#666"})}),s(".top-car").on("mouseleave",function(){s(".car-listtext").hide()}),s(".address-t").on("mouseenter",function(){s(".index-city").show()}),s(".address-t").on("mouseleave",function(){s(".index-city").hide()}),s(".search-l").on("focus",function(){s(this).parent().css({borderColor:"#ff6700"}),s(this).css({borderColor:"#ff6700"}),s(this).siblings().css({borderColor:"#ff6700"}),s(".search-list").css({display:"block"}),s.each(s(".search-list li"),function(){s(this).mouseenter(function(){s(this).css({background:"#fafafa"})}),s(this).mouseleave(function(){s(this).css({background:"#fff"})})})}),s(".search-l").on("blur",function(){s(this).parent().css({borderColor:"#e0e0e0"}),s(this).css({borderColor:"#e0e0e0"}),s(this).siblings().css({borderColor:"#e0e0e0"}),s(".search-list").css({display:"none"})});for(var n=document.querySelectorAll(".list-item-goods"),a=document.querySelectorAll(".hide-list"),l=function(o){n[o].onmouseenter=function(){a[o].style.display="block"},n[o].onmouseleave=function(){a[o].style.display="none"}},c=0;c<n.length;c++)l(c);s.ajax({type:"get",url:"https://localhost:8848/ajax/goodslist.json",success:function(e){s.each(s(".equipment-goods-list-item a img"),function(o){s(".equipment-goods-list-item a img").eq(o).attr("src",e[o+8].src)}),s.each(s(".equipment-goods-list-item a span"),function(o){s(".equipment-goods-list-item a span").eq(o).html(e[o+8].describe)}),s.each(s(".equipment-goods-list-item a b"),function(o){s(".equipment-goods-list-item a b").eq(o).html(e[o+8].id)}),s.each(s(".equipment-goods-list-item a em"),function(o){s(".equipment-goods-list-item a em").eq(o).html(e[o+8].price)})}}),s.ajax({type:"get",url:"https://localhost:8848/ajax/banner.json",success:function(e){s.each(s(".banner-json"),function(o){s(".banner-json").eq(o).attr("src",e[o].src)})}}),s.ajax({type:"get",url:"https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=266",dataType:"jsonp",success:function(o){var e=o.block_266[1].node,t=o.block_266[2].node;o.block_266[3].node;s.each(s(".power-goods-list-item a img"),function(o){s(".power-goods-list-item a img").eq(o).attr("src",e[o].img)}),s.each(s(".power-goods-list-item a span"),function(o){s(".power-goods-list-item a span").eq(o).html(e[o].name)}),s.each(s(".power-goods-list-item a b"),function(o){s(".power-goods-list-item a b").eq(o).html(e[o].skuid)}),s.each(s(".power-goods-list-item a em"),function(o){s(".power-goods-list-item a em").eq(o).html(e[o].skuprice)}),s.each(s(".massage-goods-list-item a img"),function(o){s(".massage-goods-list-item a img").eq(o).attr("src",t[o].img)}),s.each(s(".massage-goods-list-item a span"),function(o){s(".massage-goods-list-item a span").eq(o).html(t[o].name)}),s.each(s(".massage-goods-list-item a b"),function(o){s(".massage-goods-list-item a b").eq(o).html(t[o].skuid)}),s.each(s(".massage-goods-list-item a em"),function(o){s(".massage-goods-list-item a em").eq(o).html(t[o].skuprice)})}}),s.ajax({type:"get",url:"https://localhost:8848/ajax/navbanner.json",success:function(e){s.each(s(".goodsnav-list-first-goods .goodsnav-item a img"),function(o){s(".goodsnav-list-first-goods .goodsnav-item a img").eq(o).attr("src",e[o].src)}),s.each(s(".goodsnav-list-first-goods .goodsnav-item a span"),function(o){s(".goodsnav-list-first-goods .goodsnav-item a span").eq(o).html(e[o].id)}),s.each(s(".goodsnav-list-first-goods .goodsnav-item a b"),function(o){s(".goodsnav-list-first-goods .goodsnav-item a b").eq(o).html(e[o].describe)}),s.each(s(".goodsnav-list-first-goods .goodsnav-item a em"),function(o){s(".goodsnav-list-first-goods .goodsnav-item a em").eq(o).html(e[o].price)})}}),s.ajax({type:"get",url:"https://localhost:8848/ajax/navbanner1.json",success:function(e){s.each(s(".goodsnav-list-second-goods .goodsnav-item a img"),function(o){s(".goodsnav-list-second-goods .goodsnav-item a img").eq(o).attr("src",e[o].src)}),s.each(s(".goodsnav-list-second-goods .goodsnav-item a span"),function(o){s(".goodsnav-list-second-goods .goodsnav-item a span").eq(o).html(e[o].id)}),s.each(s(".goodsnav-list-second-goods .goodsnav-item a b"),function(o){s(".goodsnav-list-second-goods .goodsnav-item a b").eq(o).html(e[o].describe)}),s.each(s(".goodsnav-list-second-goods .goodsnav-item a em"),function(o){s(".goodsnav-list-second-goods .goodsnav-item a em").eq(o).html(e[o].price)})}});var d=document.querySelectorAll(".equipment-goods-list-item"),r=document.querySelectorAll(".equipment-goods-list-item a b"),m=function(e){d[e].onclick=function(){var o=r[e].innerHTML;t.setCookie(o,o,7)}};for(c=0;c<d.length;c++)m(c);s.ajax({type:"get",url:"https://localhost:8848/ajax/goodslist.json",success:function(e){s.each(s(".treadmill-goods-list-item a img"),function(o){s(".treadmill-goods-list-item a img").eq(o).attr("src",e[o].src)}),s.each(s(".treadmill-goods-list-item a span"),function(o){s(".treadmill-goods-list-item a span").eq(o).html(e[o].describe)}),s.each(s(".treadmill-goods-list-item a b"),function(o){s(".treadmill-goods-list-item a b").eq(o).html(e[o].id)}),s.each(s(".treadmill-goods-list-item a em"),function(o){s(".treadmill-goods-list-item a em").eq(o).html(e[o].price)})}});var u=document.querySelectorAll(".treadmill-goods-list-item"),g=document.querySelectorAll(".treadmill-goods-list-item a b"),h=function(e){u[e].onclick=function(){var o=g[e].innerHTML;t.setCookie(o,o,7)}};for(c=0;c<u.length;c++)h(c)})}),window.onload=function(){};