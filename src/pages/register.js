require(["../scripts/config.js"],function(){
	require(["jquery","swiper","_jcookie"],function($,swiper){
		
		$.auto_code = function(){
			var str = ""
			for(var i=0;i<60;i++){
				var nub = Math.round(Math.random()*9);
			    var az = String.fromCharCode(Math.round(Math.random()*(97-122)+122));
			    var AZ = String.fromCharCode(Math.round(Math.random()*(65-90)+90));
				str = str + nub + az +AZ;
			}
			var str1 = ""
			for(var j=0;j<4;j++){
				str1 = str1 + str.charAt(Math.round(Math.random()*(str.length-1)));
			}
			return str1;
		}
		$(".auth-code-txt").val($.auto_code());
		
		$(".auth-code-txt").click(function(){
			var str = $.auto_code();
			$(".auth-code-txt").val(str);
		})  
		
		var otxt = document.querySelector('.txt');
		var opwd = document.querySelector(".pwd");
		var reg_input_top = document.querySelector(".reg-input-top")
		var reg_input_btm = document.querySelector(".reg-input-bottom")
		var _txtcuo = document.querySelector(".txtcuo");
		var _pwdcuo = document.querySelector(".pwdcuo");		
		var reg = /^1\d{10}$/;
		otxt.onblur = function(){									
			if(!reg.test(otxt.value)){
				reg_input_top.style.borderColor = "#FF6700";
				_txtcuo.style.display = "block";
				
			}
		}
		var reg1 = /^(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{8,16}$/;
		opwd.onblur = function(){			
			if(!reg1.test(opwd.value)){
				reg_input_btm.style.borderColor = "#FF6700";
				_pwdcuo.style.display = "block";
			}
		}
		otxt.onfocus = function(){
			_txtcuo.style.display = "none"
			reg_input_top.style.borderColor = "#E0E0E0";
		}
		opwd.onfocus = function(){
			_pwdcuo.style.display = "none"
			reg_input_btm.style.borderColor = "#E0E0E0";
		}
		
		
		var auth_code_txt = document.querySelector(".auth-code-txt");
		var code = document.querySelector(".auth-code-ipt .code");
		var _yzcuo = document.querySelector(".yzcuo");

		code.onblur = function(){			
			if(auth_code_txt.value != code.value){
				code.style.borderColor = "#FF6700";
				_yzcuo.style.display = "block";
			}
			
		}
		code.onfocus = function(){			
			code.style.borderColor = "#E0E0E0";
			_yzcuo.style.display = "none";			
		}
		
		var regnow = document.querySelector(".now");
		var succ = document.querySelector(".succ");
		var regsel = document.querySelector(".reg");
		
		var ano = document.querySelector(".no");		
		regnow.onclick = function(){
			var list = JSON.parse(localStorage.getItem("username"));
			var kaiguan = true;
			if(otxt.value == ""){
				alert("请输入手机号！");
			}		
			for(var i = 0; i< list.length;i++){			  
             if(otxt.value == list[i].user){
					 kaiguan = false;
			 }
				if(kaiguan && reg1.test(opwd.value) && reg.test(otxt.value) && auth_code_txt.value == code.value){
					regsel.style.display = "none";
					succ.style.display = "block";	
				}
                   
			}
			
		}
		ano.onclick = function(){

			regsel.style.display = "block";
			succ.style.display = "none";	

		}
		
//存cookie
class Regsiter{
			constructor(){
				this.btn = $(".now");
				this.user = $(".txt");
				this.pass = $(".pwd");
				this.auth = $(".auth-code-txt")	;
				this.code = $(".auth-code-ipt .code");
				this.reg = 	/^1\d{10}$/;
				this.reg1 = /^(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{8,16}$/;		
				this.addEvent()
			}
			addEvent(){
				var that = this;
				this.btn.on("click",function(){
					if(that.user.val() == ""){

					}else{
                      that.userV = that.user.val();
					  that.passV = that.pass.val();
					  that.setitem();
					}
					
				})
			}
			setitem(){
//				读取初始cookie,用来查看是否是第一次注册
				if(localStorage.getItem("username")){
					this.username = JSON.parse(localStorage.getItem("username"));
				}else{
					this.username = []
				}
				
//				如果第一次注册,之前没有,那么length小于1
				if(this.username.length < 1){
					this.username.push({
						user:this.userV,
						pass:this.passV,
						onoff:1
					})
				}else{
//					之前已经注册过
					var that = this;
					var onOff = true;
					$.each(this.username,function(index,value){
						if(value.user == that.userV){		//发现重复
							alert("用户名重复");
							onOff = false;				//改变状态
						}
					})
					if(onOff){
						if(this.reg1.test(this.pass.val()) && this.reg.test(this.user.val()) && this.auth.val() == this.code.val()){
							this.username.push({
								user:this.userV,
								pass:this.passV
							})  
						}
					}
				}
				localStorage.username = JSON.stringify(this.username);
			}
		}
		new Regsiter()
			
		var _a = document.querySelector(".reg-link a");
		
		_a.onclick = function(){			
			var odiv = document.createElement("div")
			
			odiv.className =  "tanchukuang";
			odiv.innerHTML = `未保存您的信息，是否跳转！
			 <a class="tiaozhuan" href="login.html" target="_blank">是</a>
			 <a class="butiaozhuan" href="#" target="_blank">否</a>
			`
			document.body.appendChild(odiv);			
			var oa = document.querySelector(".tanchukuang .tiaozhuan")
			oa.onclick = function(){				
				oa.parentElement.remove();				
			}
		}
		
	})    
})