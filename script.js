
let hr =document.getElementById('hour');
let min =document.getElementById('min');

let se =document.getElementById('sec');

function displiatime()
{
let date= new Date();
let hh =date.getHours()
let mm= date.getMinutes()
let ss=date.getSeconds()
 let hrottti=30*hh+mm/2;
 let mmrrr=6*mm;
 let teee=6*ss;
 hr.style.transform=`rotate(${hrottti}deg)`
 min.style.transform=`rotate(${ mmrrr}deg)`

 se.style.transform=`rotate(${ teee}deg)`

}
setInterval(displiatime,1000);