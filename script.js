function loadPostData(){
    fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    .then(res=>res.json())
    .then(data=>showPostData(data.posts));
    
}

function showPostData(data){
     let postDataContainer=document.getElementById('postData-container');

     data.forEach((res,index) => {
        // console.log(res);
         
       
        let lodeing=document.getElementById('loder');
        lodeing.classList.remove('hidden');
       let div=document.createElement('div');
       div.innerHTML=`
        <div class="bg-[#F2F2FF] rounded-2xl border flex-1  p-10 ">
                
             <div class="flex gap-10">
              <div class=" rounded-2xl relative " >
              <img width="80" class="rounded-2xl" src="${res.image}" alt="">
              <div class="absolute -top-2  bottom-10  left-14 ">
                <span class="    rounded-full"> <div id="${index}" class=" p-3 rounded-full"></div></span>
              </div></div>


              <div class="w-full" >
                <div class="flex gap-4"><h1 class="">#${res.category}</h1>
                <h1 class="">Author: ${res.author.name}</h1></div>

                <h1 class="text-2xl font-bold">${res.title}</h1>

                <h1 class="">${res.description}</h1>

                <h1 class="border-dotted border-black border-2 my-5"></h1>


            <div class="flex gap-10">

            <div class="flex gap-3">
            <img src="images/Group 13.png" />
            <p>${res.comment_count
            }</p>
            </div>


            <div class="flex gap-3">
            <img src="images/Group 16.png" />
            <p>${res.view_count
            }</p>
            </div>


            <div class="flex gap-3">
            <img src="images/Group 18.png" />
            <p>${res.posted_time
            }</p>
            </div>
                
            </div> 
            <div onclick="eventHandler('${res.title}, ${ res.view_count}')" class="float-end"><img src="images/Group 40106.png" /></div>
              </div>

             </div>
              </div>
       
       `;
       
       postDataContainer.appendChild(div);
       
        
       let apu=document.getElementById(index);  
    checkLine(res.isActive,apu)
    
      
        
     });
    
     let lodeing=document.getElementById('loder');
  lodeing.classList.add('hidden');
}


function checkLine(isLine, online){
    if(isLine){
      online.style.backgroundColor='#10B981';
    }else{
      online.style.backgroundColor='red'
    }
}

loadPostData();


function eventHandler(titles,view){
   console.log(titles,view); 

    let container=document.getElementById('details');
    let div=document.createElement('div');
    div.classList='bg-white p-8 mb-5'
    div.innerHTML=`
      <p> ${titles}</p>
      
    
    `;
    container.appendChild(div)
}


function showLoader(){
  let lodeing=document.getElementById('loder');
  lodeing.classList.remove('hidden');
}