const course = document.getElementById("container-course");
const btnGo = document.getElementById("go");
const btnStop = document.getElementById("stop");
const btnPlay = document.getElementById("play");
const car = document.getElementsByClassName("car");
const vic1 = document.getElementById("victoire1");
const vic2 = document.getElementById("victoire2");
const btnReset = document.getElementById("reset");
const cont = document.getElementById("decompte");
const scoreB = document.getElementById("scoreBleu");
const scoreR = document.getElementById("scoreRouge");
let carCourse;
let timerv;
let newtimer;
let i;
let comptBleu = 0;
let comptRouge = 0;
let v;

let Voiture = function (x,y, imag) {
    this.x = x;
    this.y = y;
    this.creer(imag);
};

Voiture.prototype.creer = function(imag) {
    carCourse = document.createElement("img");
    carCourse.src = imag;
    course.appendChild(carCourse);
    carCourse.setAttribute("class", "car");
    carCourse.style.position = "relative";
    carCourse.style.left = this.x + "px";
    carCourse.style.top = this.y + "px";
    carCourse.style.width = "100px";
    
};

let car1 = new Voiture(1000,75, "./img/car1.png");
let car2 = new Voiture(900,175, "./img/car2.png");

btnGo.addEventListener("click", go);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", res);
btnPlay.addEventListener("click", play);

Voiture.prototype.deplacer = function(distance) {
    //console.log(this.x);
    this.x -= distance;
    carCourse.style.position = "relative";
    carCourse.style.left = this.x + "px";
    carCourse.style.top = this.y + "px";
    carCourse.style.width = "100px";
    
    if (car1.x < 60){
        
        vic2.style.display = "none";
        vic1.style.display = "block";
        btnStop.style.display = "none";
        cont.style.display= "none";
        comptRouge += 1;
        scoreR.textContent = comptRouge;
        if (car2.x > 0) {
            startConfetti();
        }
        clearInterval(timerv);
        v=1;
    }
    
    if (car2.x < -40) {
        
        vic2.style.display = "block";
        vic1.style.display = "none";
        btnStop.style.display = "none";
        cont.style.display= "none";
        comptBleu += 1;
        scoreB.textContent = comptBleu;
        if (car1.x > 100) {
            startConfetti();
        }
        clearInterval(timerv);
        v=2;
    }
}

function go(){
    btnGo.style.display = "none";
    btnStop.style.display = "none";
    btnReset.style.display = "inline";
    cont.style.display= "block";
    cont.textContent="";
    v=0;
    i=3;
    newtimer = setInterval(decompte,1000);
}

function stop(){
    clearInterval(timerv);
    btnGo.style.display = "none";
    btnStop.style.display = "none";
    btnReset.style.display = "inline";
    btnPlay.style.display = "inline";
}

function play(){
    timer();
    btnGo.style.display = "none";
    btnStop.style.display = "inline";
    btnReset.style.display = "inline";
    btnPlay.style.display = "none";
}

function res(){
    i=3;
    car1.x = 1000;
    car2.x = 900;
    clearInterval(timerv);
    clearInterval(newtimer);
    cont.textContent="";
    vic2.style.display = "none";
    vic1.style.display = "none";
    btnGo.style.display = "inline";
    btnStop.style.display = "none";
    btnReset.style.display = "none";
    btnPlay.style.display = "none";
    carCourse = document.getElementsByClassName("car")[0];
    car1.deplacer(0);
    carCourse = document.getElementsByClassName("car")[1];
    car2.deplacer(0);
    stopConfetti(); 
}

function timer(){

    timerv = setInterval(deplacement,10);
}

function decompte(){
    cont.textContent = i;
    if(i == 0){
        cont.textContent = "GO !";
        btnGo.style.display = "none";
        btnStop.style.display = "inline";
        btnReset.style.display = "inline";
        btnPlay.style.display = "none";
        clearInterval(newtimer);
        timer();
    }
    i--;
}

function deplacement(){

    let aleatoir1 = Math.floor(Math.random() * 5);
    let aleatoir2 = Math.floor(Math.random() * 5);
    carCourse = document.getElementsByClassName("car")[0];
    car1.deplacer(aleatoir1);
    carCourse = document.getElementsByClassName("car")[1];
    car2.deplacer(aleatoir2);
    if (v==1){
        comptRouge -= 1;
        scoreR.textContent = comptRouge;
    }
}



