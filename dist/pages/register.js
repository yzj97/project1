"use strict";require(["../scripts/config.js"],function(){require(["jquery","common","font","swiper"],function(o,t,r,a){o.auto_code=function(){for(var t="",o=0;o<60;o++){t=t+Math.round(9*Math.random())+String.fromCharCode(Math.round(-25*Math.random()+122))+String.fromCharCode(Math.round(-25*Math.random()+90))}for(var r="",a=0;a<4;a++)r+=t.charAt(Math.round(Math.random()*(t.length-1)));return r},o(".auth-code-txt").val(o.auto_code()),o(".auth-code-txt").click(function(){var t=o.auto_code();o(".auth-code-txt").val(t)})})});