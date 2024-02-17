play.addEventListener("click",playpause);
function playpause(){
    if(play.classList.contains("fa-pause")){
        song.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        disk.style.animation=("none")
    }
    else{
        song.play();
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
        disk.style.animation=("rotate 10s linear infinite")
    }
}
 song.onloadedmetadata=function(){
    slider.max=song.duration;
    slider.value=song.currentTime;
 }


if(song.play()){
setInterval(()=>{
slider.value=song.currentTime;
},400)
}
slider.onchange=function(){
    song.play();
    song.currentTime=slider.value
}
setInterval(()=>{
// minute=Math.floor(song.currentTime);
// second=song.currentTime-Math.floor(song.currentTime);
// time=minute+':'+seconds;
    // document.getElementById("dur_initial").innerHTML='00:'+Math.floor(song.currentTime);
if(song.currentTime>60){
    minutes=Math.floor(song.currentTime/60);
    seconds=Math.floor(song.currentTime)-(minutes*60);
    document.getElementById("dur_initial").innerHTML='0'+minutes+':'+seconds;
}
else{
    document.getElementById("dur_initial").innerHTML='00:'+Math.floor(song.currentTime)
}
},1000);
let alert=()=>{
   window.alert("Work in progress");
}