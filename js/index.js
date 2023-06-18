const links= document.querySelector(".links");
const dropdown=document.querySelector(".btn-drop");
const year=document.querySelector("#year");
const date=new Date();

const fullyear=date.getFullYear();

year.innerHTML=fullyear;