/**
 * Created by Administrator on 2016/6/27 0027.
 */
~function () {

    var winW = document.documentElement.clientWidth;
   var winH=document.documentElement.clientHeight
    console.log(winH/winW)
    if(document.documentElement.clientHeight/document.documentElement.clientWidth>1.7){
        document.documentElement.style.fontSize = winW / 1366 * 100 + "px";
    }else{
        document.documentElement.style.fontSize =winH/ 2200 * 100 + "px";
    }
}();
var tohave=document.getElementById("tohave");
var bottom=document.getElementById("bottom");
new Swiper(".swiper-container", {
    loop: true,
    direction: "vertical",
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd
});
function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;//->获取当前所有的活动块(获取的结果是一个数组)
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            //slide.id = (n == 1 || n == 3) ? "page1" : "page2";
            if(n===1||n===5){

                slide.id="page1"
                tohave.onclick=function(){
                    console.log(1)
                    bottom.style.display="block"
                }
                return
            }
            if(n===2){
                slide.id="page2";
                bottom.style.display="none"
                return
            }
            if(n===3){
                slide.id="page3";
                return
            }
            if(n===4||n===0){
                slide.id="page4";
                return
            }
        }
        slide.id = null;
    });
}


var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();//->让音频播放:浏览器开始下载资源文件,也就是让它播放到出声音还需要一段时间,只有发出声音后我们才会显示音乐的图标
    musicAudio.addEventListener("canplay", function () {
        //->canplay:音频文件已经可以播放了,但是不一定是所有资源都加载完成了,大部分是边播放边界
        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    //->当前是暂停状态我让其播放
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    //->当前是播放状态我让其暂停
    musicAudio.pause();
    music.className = "music";
}, false);
