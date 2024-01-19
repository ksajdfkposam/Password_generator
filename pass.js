let input=document.getElementById("input");
let btn=document.getElementById("btn");

let upper="QWERTYUIOPASDFGHJKLZXCVBNM";
let lower=upper.toLowerCase();
let num="0123456789";
let special="`!@#$%^&*_";



console.log("kkkk")


function genPass(){
    console.log("dnfln")
    let password="";
    password+=upper[Math.floor(Math.random()*26)];
    password+=lower[Math.floor(Math.random()*26)];
    password+=num[Math.floor(Math.random()*10)];
    password+=special[Math.floor(Math.random()*10)];
    let dummy=upper+lower+num+special;
    while(password.length<12){
        password+=dummy[Math.floor(Math.random()*72)];
    }
console.log(password)
    input.value=password;
    
    
}
//input.value="";


