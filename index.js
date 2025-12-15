let tasks = document.getElementById("task");
let options = document.getElementById("options");
let button = document.getElementById("add");

//   función que realiza un evento al hacer click
button.addEventListener("click", () => {
    // esta función evita que la información se agrege vacia
    const task_values = tasks.value;
    if (task_values === "") return;

    const div = document.createElement("div");
    const task_value = tasks.value; // Se obtine el valor de task
    div.classList.add("task");

    // Se agrega el contenido al body del html
    const task_progres = document.getElementById("body");
    task_progres.appendChild(div);
    div.textContent = task_value;   // Se agrega el texto al body

    const alert = document.getElementById("alert");
    //Se le añade un estado a la tarea agragada "Por empezar, En progreso y Finalizado"
    const option = options.value;
    //creamos un contenedor para guardar la informacion en columnas diferentes
    let container;
    
    // Esta función es para verificar en que estado esta el selector
    if (option === "to-do") {
        div.classList.add("to-do");
        // guardamos el valor obtenido en las columnas creadas
        container = document.getElementById("to-do");
    } else if (option === "in-progress") {
        div.classList.add("in-progress");
        container = document.getElementById("in-progress");
    } else {
        div.classList.add("done")
        container = document.getElementById("done");
    }
    container.appendChild(div);
    
    alert.remove();

})

