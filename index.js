
var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImg1="./images/dice"+randomNumber1+".png";

var img1=document.querySelectorAll('img')[0];

img1.setAttribute("src",randomImg1);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImg2="./images/dice"+randomNumber2+".png";

var img2=document.querySelectorAll('img')[1];

img2.setAttribute("src",randomImg2); 

if(randomImg1>randomImg2){
    document.querySelector("h1").innerHTML="🏆 Player 1 wins!!";
} 
else if(randomImg1<randomImg2){
    document.querySelector("h1").innerHTML="Player 2 wins 🏆!!";
} 
else{
    document.querySelector("h1").innerHTML="Draw";
}