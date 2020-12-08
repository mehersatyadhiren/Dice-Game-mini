var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;

document.querySelector(".a img").setAttribute("src","images/dice"+a+".png");
document.querySelector(".b img").setAttribute("src","images/dice"+b+".png");

if(a>b)
{
	document.querySelector("h1").innerHTML="Player-1 Won the Match";
	document.querySelector(".a").style.borderColor="green";
	document.querySelector(".b").style.borderColor="red";
}
else if(a==b)
{
	document.querySelector("h1").innerHTML="Woow Its a Draw";
	document.querySelector(".a").style.borderColor="green";
	document.querySelector(".b").style.borderColor="green";
}
else
{
	document.querySelector("h1").innerHTML="Player-2 Won the Match";
	document.querySelector(".a").style.borderColor="red";
	document.querySelector(".b").style.borderColor="green";
}
