var a=0,b=0,c=0,d=0,arry=[],may=[],ray=[],say=[];
bo1=document.querySelector("#bo1");
bo2=document.querySelector("#bo2");
bo3=document.querySelector("#bo3");
bo4=document.querySelector("#bo4");
bo5=document.querySelector("#bo5");
bo6=document.querySelector("#bo6");
b07=document.querySelector("#bo7");
b08=document.querySelector("#bo8");
b09=document.querySelector("#bo9");
b10=document.querySelector("#b10");
b11=document.querySelector("#b11");
b12=document.querySelector("#b12");
b13=document.querySelector("#b13");
b14=document.querySelector("#b14");
b15=document.querySelector("#b15");
ut4=document.querySelector(".ut4");

document.addEventListener("keydown",function(event){
    var v=event.key;
        if(v=="i"){
            fun1()
         }
         else if(v=="u"){
             fun2();
         }
         else if(v=="o"){
             fun3();
         }
         else if(v=="p"){
             fun4();
         }
         else if(v=="'"){
             fun6();
         }
         else {
             a=0;
         }
});
ut4.addEventListener("click",function(){
    fun5();
});

function fun1() {
    for (var i=0;i<=100;i++){
        var rand = Math.floor(Math.random ()*100);
            if(rand <=25) {
            bo2.innerHTML=rand;
            arry.push(rand);
            }
            else if(rand <=50 && rand > 25) {
                may.push(rand);
                bo3.innerHTML=rand;
            }
            else if(rand <=75 && rand > 50){
                ray.push(rand);
                bo4.innerHTML=rand;
            }
            
            else {
                say.push(rand);
                bo5.innerHTML=rand;
        }
        }
        }
function fun2() {
    bo6.innerHTML=arry;
    bo7.innerHTML=may;
    bo8.innerHTML=ray;
    bo9.innerHTML=say;
}  
function fun3() {
    bo6.innerHTML=arry.length;
    bo7.innerHTML=may.length;
    bo8.innerHTML=ray.length;
    bo9.innerHTML=say.length;
}    
function fun4() {

    bo2.innerHTML="";
    bo3.innerHTML="";
    bo4.innerHTML="";
    bo5.innerHTML="";
    bo6.innerHTML="";
    bo7.innerHTML="";
    bo8.innerHTML="";
    bo9.innerHTML="";

}  
function fun5(){
    var in1=parseInt(inp1.value);
    c=(5/9) * (in1-32);
    c=Math.floor(c);
    bo9.innerHTML=c;

}
function fun6(){
    var v = document.querySelectorAll(".box1").length;
    a++;
    for(i=0;i<=v;i++){
        if(a%2==00){
             document.querySelectorAll(".box1")[i].style.backgroundColor="black";
        }
        else {
             document.querySelectorAll(".box2")[i].style.backgroundColor="orange";
        }
    }
}




 