require(["../scripts/config.js"],function(){
	require(["jquery","swiper","_jcookie"],function($,swiper){
		
		class Login{			
			constructor(){
				this.btn = $(".login-button");
				this.user = $(".txt");
				this.pass = $(".pwd");
				this.getcookie();
				this.addEvent();

				
			}
			getcookie(){				
				this.username = JSON.parse($.cookie("username"));
				console.log(this.username);
			}
			addEvent(){
				var that = this
				this.btn.on("click",function(){
					
				    for(var i = 0;i<that.username.length;i++){	
				    	console.log(456)
						if(that.username[i].user == that.user.val()){													
						    $(".txtcuo").css("display","none");
						    $(".lgn-input-top").css("borderColor","#e0e0e0")
						    if(that.username[i].pass == that.pass.val()){
						        $(".pwdcuo").css("display","none")
						        $("lgn-input-bottom").css("borderColor","#e0e0e0");
						        $(location).attr("href","index.html");
						    
						    }else{
							   $(".pwdcuo").css("display","block");
							   $("lgn-input-bottom").css("borderColor","#ff7600");
						    }
						    break;
						}else{
							$(".lgn-input-top").css("borderColor","#ff7600")
							$(".txtcuo").css("display","block");
						}
					}
					
				})
				
				
				
			}
			
			
			
		}
		
		new Login();
		
		  
	})    
})