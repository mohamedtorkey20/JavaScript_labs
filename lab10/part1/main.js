var Tasks = [];
var id = parseInt(localStorage.getItem("id")) || 0; 


var todos = document.querySelector('.divtwo');
var btn_add = document.querySelector('.btn-add');


if (localStorage.getItem("data")) {


    Tasks = JSON.parse(localStorage.getItem("data"));


    for (var i = 0; i < Tasks.length; i++)
    {

        var createp = document.createElement("div");

        createp.innerHTML = `<p>${Tasks[i].text}</p>  
        <button class="done">Done</button>
        <button class="delete">Delete</button>`;


        
        createp.style.width = "100%";
        createp.style.height = "50px";
        createp.style.margin = "5px 0";
        
        if(Tasks[i].completed)
        {
            createp.style.background = "rgb(142, 206, 142)";
        }

        createp.classList.add("Task");
        todos.appendChild(createp);
     
    }
}

btn_add.addEventListener('click', () => {

    var getext = document.querySelector("input[type='text']").value;

    var createp = document.createElement("div");

    if (getext !== "") {

        id++;
        Tasks.push({"id": id, "text": getext,"completed":false});

        createp.innerHTML = `<p>${getext}</p>  
        <button class="done">Done</button>
        <button class="delete">Delete</button>`;

        
        
        createp.style.width = "100%";
        createp.style.height = "50px";
        createp.style.margin = "5px 0";
        
        createp.classList.add("Task");
        createp.setAttribute("id",`${id}`);

        todos.appendChild(createp);
        
        localStorage.setItem("data", JSON.stringify(Tasks));
    }
});



todos.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete")) {

        var parentDiv = event.target.parentNode;
        var taskId = parseInt(parentDiv.getAttribute("id"))-1;
        parentDiv.style.display = "none";
    
        Tasks.splice(taskId, 1);
        localStorage.setItem("data", JSON.stringify(Tasks));


    } else if (event.target.classList.contains("done")) {

        var parentDiv = event.target.parentNode;
        var taskId = parseInt(parentDiv.getAttribute("id"))-1;
    
        Tasks[taskId].completed = true;
        parentDiv.style.background = "rgb(142, 206, 142)";
        
    
        localStorage.setItem("data", JSON.stringify(Tasks));
     
    }
});

