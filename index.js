let tasks = document.getElementById("task");
let options = document.getElementById("options");
let button = document.getElementById("add");

//   f  unci{on que realiza un evento al hacer click
button.addEventListener("click", () => {

    const task_value = tasks.value; // Se obtine el valor de task
    const div = document.createElement("div");

    // Se agrega el contenido al body del html
    const task_progres = document.getElementById("body");
    task_progres.appendChild(div);
    div.textContent = task_value;   // Se agrega el texto al body


    const alert = document.getElementById("alert");
   // alert.remove();
    //Se le añade un estado a la tarea agragada "Por empezar, En progreso y Finalizado"
    const option  = options.value;
    console.log(option);
    


})

