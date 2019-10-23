//等待加载
var wait=document.getElementById("wait"),
    bodyscroll=document.getElementById("top");
function preventDefault(e){
    e=e || window.event;
    e.preventDefault && e.preventDefault();
    return false;
}
addWheelEvent(wait , preventDefault);
window.onload=setTimeout(function(){
    wait.classList.add("display");
    bodyscroll.classList.remove("bodyscroll");
    setTimeout(function(){
    	wait.style.display="none";
	},1000);
},1000);
//等待加载-end

//页面平滑
	$(document).ready(function() {  
	 var $root = $('html, body');  //?????????????????????ε????????????????????
	 $('a').click(function() {
		 var href = $.attr(this, 'href');
		 $root.animate({
		 scrollTop: $(href).offset().top
		 }, 500, function () {
			 window.location.hash = href;
		 });
		 return false;
	 });
	});  
	function delayURL(url,time){
	 setTimeout("top.location.href = '" + url + "'",time);
	 }
//页面平滑-end

//飞机
	var Oflyr=document.getElementsByClassName("i-c-s-s-r"),
		Oflyl=document.getElementsByClassName("i-c-s-s-l"),
		Ofnnt=document.getElementsByClassName("font-r"),
		Ofnntl=document.getElementsByClassName('font-l'),
		lengthr=Oflyr.length,
		lengthl=Oflyl.length,
        a=["index.html","index.html"],
		b=["waifu2x.html","githubcreate.html"];/*a左，b右*/
		//右边飞机
	for(var i=0;i<lengthr;i++){
			Ofnnt[i].fly=i; 
			Ofnnt[i].onclick=function(){
				Oflyr[this.fly].style.right="1300px";
				fn(b[this.fly]);
			};
		}
		//左边飞机
	for(var i=0;i<lengthl;i++){
			Ofnntl[i].fly=i; 
			Ofnntl[i].onclick=function(){
				Oflyl[this.fly].style.left="1300px";
				fn(a[this.fly]);
			};
		}
		//地址调用
    function fn (x){
        setTimeout(function(){window.location.href =x;},300)
        }
//飞机-end

//blank顶部的高度一致
    var blank=document.getElementById("blank");
	blankheightchange();
	window.onresize=blankheightchange;
	function blankheightchange(){
		var BOMHeight=document.documentElement.clientHeight;
		blank.style.height=BOMHeight +"px";
	}
//blank顶部的高度一致-end

//返回顶部按钮
	var windowHeight=document.documentElement.clientHeight,
		totopbtn=document.getElementById("totop");
	window.onresize=function(){
        windowHeight=document.documentElement.clientHeight;
	};
	totopbtnTime();
	function totopbtnTime(){
		clearTimeout=wheelset;
		var wheelset=setTimeout(function(){
			var scrollTop=document.documentElement.scrollTop + document.body.scrollTop;
			if (scrollTop > windowHeight )
			{
				totopbtn.classList.add("block");
			}else{
				totopbtn.classList.remove("block");
			}
		} , 13);
	}
	addWheelEvent( document , totopbtnTime);
	function addWheelEvent( obj , eFn ){
		document.addEventListener?obj.addEventListener(document.createElement("div").onmousewheel===null?"mousewheel":"DOMMouseScroll",fn,false):obj.attachEvent("onmousewheel",fn);
		function fn(e){eFn.call(obj , e = e || window.event , e.wheelDelta/120 || -e.detail/3);}
	}
	totopbtn.onclick=function(){
		this.classList.remove("block");
	};
//返回顶部按钮-end





