 var next =document.getElementById("next");
 var prev=document.getElementById("prev");

 
next.addEventListener("click",()=>{
	addsilde(-1)
})

prev.addEventListener("click",()=>{
	addsilde(1)
})

let slide=0
 slides(0);
 


 function addsilde(n) {
	 slides(slide += n);
	}

function slides(n) {	
  let images = document.getElementsByClassName("image");
 
  for(let i=0;i<images.length;i++)
  {
	  images[i].style.display="none"
	  
  }
	
	if(n>(images.length-1))
	{
	  slide=0
	}
  
	if(n<0)
	{
	  slide=images.length-1;
	}

  images[slide].style.display="flex"

   
}



setInterval(()=>
	{
		addsilde(1)
	},2000)