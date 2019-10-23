/**
 * Created by Fly on 2018/1/20.
 */
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
        var scrollTop=(document.documentElement.scrollTop + document.body.scrollTop) * 2;
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


















