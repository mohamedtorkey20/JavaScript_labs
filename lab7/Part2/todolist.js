
function addelement() {

    var getdiv = document.getElementsByClassName('divtwo')[0];
    var getext = document.querySelector("input[type='text']").value;
    
    if(getext !== "")
    {
        var createp = document.createElement("div");

        createp.innerHTML = `<p>${getext}</p>  
        <button class="done" onclick="done(this)">Done</button>
        <button class="delete" onclick="remove(this)">Delete</button>`;

        createp.classList.add("Task");

        getdiv.appendChild(createp);

        createp.style.width = "100%";
        createp.style.height = "50px";
        createp.style.margin = "5px 0";
    }
}

function remove(element) {
    var parentDiv = element.parentNode;
    parentDiv.style.display = "none";
}

function done(element) {
    var parentDiv = element.parentNode;
    parentDiv.style.background = "rgb(142, 206, 142)";
}