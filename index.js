let song_one = document.getElementById("song_one");
let song_two = document.getElementById("song_two");
let song_three = document.getElementById("song_three");
let disk = document.getElementById("disk");
let slider1 = document.getElementById("slider1");
let slider2 = document.getElementById("slider2");
let slider3 = document.getElementById("slider3");
let ctrl_one = document.getElementById("ctrl_one");
let ctrl_two = document.getElementById("ctrl_two");
let sidebar = document.querySelector(".side_bar");
let bar = document.querySelector(".bar");
ctrl_two.style.display = "none";
ctrl_three.style.display = "none";
slide2.style.display="none";
slide3.style.display="none";
duration2.style.display="none";
duration3.style.display="none";
play1.addEventListener("click", playpause1);
song_one.play();
function playpause1() {
    if (play1.classList.contains("fa-pause")) {
        song_one.pause();
        play1.classList.remove("fa-pause");
        play1.classList.add("fa-play");
        disk.style.animation = "none";
    } else {
        song_one.play();
        play1.classList.add("fa-pause");
        play1.classList.remove("fa-play");
        disk.style.animation = "rotate 10s linear infinite";
    }
}

song_one.onloadedmetadata = function () {
    slider1.max = song_one.duration;
    slider1.value = song_one.currentTime;
}

song_one.onplay = function () {
    setInterval(() => {
        slider1.value = song_one.currentTime;
    }, 400);
}
slider1.onchange = function () {
    song_one.play();
    song_one.currentTime = slider1.value;
    play1.classList.add("fa-pause");
    play1.classList.remove("fa-play");
    disk.style.animation = "rotate 10s linear infinite";
}

setInterval(() => {
    if (song_one.currentTime > 60) {
        let minutes = Math.floor(song_one.currentTime / 60);
        let seconds = Math.floor(song_one.currentTime) - (minutes * 60);
        document.getElementById("dur_initial1").innerHTML = '0' + minutes + ':' + seconds;
    } else {
        document.getElementById("dur_initial1").innerHTML = '00:' + Math.floor(song_one.currentTime);
    }
}, 1000);

function side_bar() {
    sidebar.style.display = "flex";
    bar.style.visibility = "hidden";
}

function close_bar() {
    sidebar.style.display = "none";
    bar.style.visibility = "visible";
}
//Song 2
function song2_play() {
    sidebar.style.display = "none";
    bar.style.visibility = "visible";
    document.getElementById("song_name").innerHTML = "Banda";
    document.getElementsByClassName("artist")[0].innerHTML = "Pritam, Diljit Dosanjh, Kumaar";
    song_one.pause();
    song_three.pause();
    disk.style.backgroundImage = "url('media/song2img.jpg')";
    play2.addEventListener("click", playpause2);
    function playpause2() {
        if (play2.classList.contains("fa-pause")) {
            song_two.pause();
            play2.classList.remove("fa-pause");
            play2.classList.add("fa-play");
        disk.style.animation = "none";
    } else {
        song_two.play();
        play2.classList.add("fa-pause");
        play2.classList.remove("fa-play");
        disk.style.animation = "rotate 10s linear infinite";
    }
}
ctrl_one.style.display = "none";
ctrl_three.style.display = "none";
ctrl_two.style.display = "flex";
slide1.style.display="none";
slide3.style.display="none";
slide2.style.display="flex";
duration1.style.display="none";
duration3.style.display="none";
duration2.style.display="flex";

setInterval(() => {
    if (song_two.currentTime > 60) {
        let minutes = Math.floor(song_two.currentTime / 60);
        let seconds = Math.floor(song_two.currentTime) - (minutes * 60);
        document.getElementById("dur_initial2").innerHTML = '0' + minutes + ':' + seconds;
    } else {
        document.getElementById("dur_initial2").innerHTML = '00:' + Math.floor(song_two.currentTime);
    }
}, 1000);

song_two.onloadedmetadata = function () {
    slider2.max = song_two.duration;
    slider2.value = song_two.currentTime;
}
song_two.onplay = function () {
    setInterval(() => {
        slider2.value = song_two.currentTime;
    }, 400);
}
slider2.onchange = function () {
    song_two.play();
    song_two.currentTime = slider2.value;
    play2.classList.add("fa-pause");
    play2.classList.remove("fa-play");
    disk.style.animation = "rotate 10s linear infinite";
}
}

//Song 1
song_one.pause();
function song1_play(){
    location.reload();
}
//Song 3
function song3_play() {
    sidebar.style.display = "none";
    bar.style.visibility = "visible";
    document.getElementById("song_name").innerHTML = "Mai Tera";
    document.getElementsByClassName("artist")[0].innerHTML = "Altamash Faridi, Amitabh Bhattacharya";
    song_one.pause();
    song_two.pause();
    disk.style.backgroundImage = "url('media/song3img.jpg')";
    play3.addEventListener("click", playpause3);
    function playpause3() {
       if (play3.classList.contains("fa-pause")) {
           song_three.pause();
           play3.classList.remove("fa-pause");
           play3.classList.add("fa-play");
           disk.style.animation = "none";
       } else {
           song_three.play();
           play3.classList.add("fa-pause");
           play3.classList.remove("fa-play");
           disk.style.animation = "rotate 10s linear infinite";
       }
   }
   ctrl_one.style.display = "none";
   ctrl_two.style.display = "none";
   ctrl_three.style.display = "flex";
   slide1.style.display="none";
   slide2.style.display="none";
   slide3.style.display="flex";
   duration1.style.display="none";
   duration2.style.display="none";
   duration3.style.display="flex";
   setInterval(() => {
    if (song_three.currentTime > 60) {
        let minutes = Math.floor(song_three.currentTime / 60);
        let seconds = Math.floor(song_three.currentTime) - (minutes * 60);
        document.getElementById("dur_initial3").innerHTML = '0' + minutes + ':' + seconds;
    } else {
        document.getElementById("dur_initial3").innerHTML = '00:' + Math.floor(song_three.currentTime);
    }
}, 1000);
song_three.onloadedmetadata = function () {
    slider3.max = song_three.duration;
    slider3.value = song_three.currentTime;
}
song_three.onplay = function () {
    setInterval(() => {
        slider3.value = song_three.currentTime;
    }, 400);
}
slider3.onchange = function () {
    song_three.play();
    song_three.currentTime = slider3.value;
    play3.classList.add("fa-pause");
    play3.classList.remove("fa-play");
    disk.style.animation = "rotate 10s linear infinite";
}
}
