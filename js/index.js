const links= document.querySelector(".links");
//const dropdown=document.querySelector("#dropit");
const year=document.querySelector("#year");
const date=new Date();
const backend=document.querySelector("#backend");
const frontend=document.querySelector("#frontend");
const fullyear=date.getFullYear();


function dropdown(){
    links.classList.toggle("hidden")
}

// display the year automatically
year.innerHTML=fullyear;



function applyBackend(items){
 items.map((data,key)=>{
    backend.innerHTML +=`
    <div class="flex flex-col sm:flex-row bg-white shadow-md border  rounded-md py-3">
                 <div class="header w-96  sm:self-center px-2">
                        <div class="card-image position-relative">
                            <img src="img/${data.img}" class=" position-relative" alt="" srcset="">
                        </div>
                        <h4 class="title text-left sm:text-center text-medium text-indigo-500 font-bold">
                            ${data.name}
                        </h4>
                 </div>
                 <div class="body px-2 py-3 "><p>${data.description}</p></div>
            </div>

    `
 })
    

}

function applyFrontEnd(items){
    items.map((data,key)=>{
      frontend.innerHTML +=`
       <div class="flex flex-col sm:flex-row bg-white shadow-md border  rounded-md py-3">
                    <div class="header w-96  sm:self-center px-2">
                           <div class="card-image position-relative">
                               <img src="img/${data.img}" class=" position-relative" alt="" srcset="">
                           </div>
                           <h4 class="title text-left sm:text-center text-medium text-indigo-500 font-bold">
                               ${data.name}
                           </h4>
                    </div>
                    <div class="body px-2 py-3 "><p>${data.description}</p></div>
               </div>
   
       `
    })
       
   
   }
   
   applyFrontEnd(front_end);
applyBackend(backend_data);