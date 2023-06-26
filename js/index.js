const links= document.querySelector(".links");
//const dropdown=document.querySelector("#dropit");
const year=document.querySelector("#year");
const date=new Date();

const fullyear=date.getFullYear();


function dropdown(){
    links.classList.toggle("hidden")
}

// display the year automatically
year.innerHTML=fullyear;