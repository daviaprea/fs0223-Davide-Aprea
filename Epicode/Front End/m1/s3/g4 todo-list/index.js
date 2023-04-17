let addTask=document.getElementById("addTask");

addTask.addEventListener("click", ()=>{

    let newTaskInp=document.getElementById("inpTask");
    if(newTaskInp.value!="")
    {
        let li=document.createElement("li");
        li.innerHTML=newTaskInp.value;

        let cancTask=document.createElement("button");
        cancTask.innerHTML=`<i class="fas fa-trash"></i>`;

        document.getElementById("todoList").append(li);
        li.append(cancTask);
        newTaskInp.value="";

        li.addEventListener("click", ()=> li.style.textDecoration="line-through");
        cancTask.addEventListener("click", ()=> console.log(cancTask.parentElement.remove()));
    }

});