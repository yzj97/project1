一，舒华商城
  1.首页，购物车，详情页，商品列表，登录页，注册页
  2.首页包含商品展示，详情页跳转，商品列表跳转。可从详情页和商品类表页实现添加购物车等功能
  3.数据来源：本地json文件；jsonp接口：https://shop.yinyuetai.com/goods/listForArt.json?callback=back；
			               https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=266；
  4.登录注册验证用的cookie存储

二，服务器
  1，gulp 服务器启动命令 gulp buildWeb
  2,   首页网址示例https://localhost:8848/pages/index.html；
