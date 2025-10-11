// const boton = document.querySelectorAll (".button-search-job");
// console.log(boton)
// boton.forEach(boton => {
//     boton.addEventListener("click", ()=>{
//         boton.textContent = "Aplicado!";
//         boton.classList.add('is-applied')
//         boton.disabled = true;
        
//     })
// });
const seccionFilters = document.querySelector(".search-filters")
const seccionResults = document.querySelector("#secionResultados")

// Escucha cambios en el filtro
seccionFilters?.addEventListener("change", (event) => {
  const filtro = event.target.value.toLowerCase()
  console.log("Filtro seleccionado:", filtro)

  // Selecciona todos los artículos dentro de la sección de resultados
  const articulos = seccionResults.querySelectorAll("article")

  articulos.forEach(article => {
    // Obtiene el texto dentro de p y small (si existen)
    const textoP = article.querySelector("p")?.textContent.toLowerCase() || ""
    const textoSmall = article.querySelector("small")?.textContent.toLowerCase() || ""

    // Condición: si el texto coincide con el filtro o el filtro es "todos"
    if (
      filtro === "todos" ||
      textoP.includes(filtro) ||
      textoSmall.includes(filtro)
    ) {
      article.style.display = "block"  // muestra el artículo
    } else {
      article.style.display = "none"   // oculta el artículo
    }
  })
})



seccionFilters?.addEventListener('change',(event)=>{
    const filtro = event.target.value.toLowerCase() //el target es el elemento que disparó el evento, en este caso el select y el value es el valor que tiene ese elemento
    console.log(filtro)
})

const seccionJob = document.querySelector('#secionResultados')

seccionJob?.addEventListener('click', (event)=>{ //evento que se realiza y la función, que tiene como parametro event que es el evento del click y el cual nos ayudará a saber a que elemento estamos clickeando
//el signo de interrogación se usa para en caso de que sea nulo o indefinido no realiza nada, pero en caso contrario que siga con el código que tiene por delante 
    const element = event.target //guarda una variable del elemento al cual se está realizando el evento en este caso clickeando

    if(element.classList.contains("button-search-job")){ //evalua que el elemento al cual se esté clickeando sea el botón
        element.textContent = "¡Aplicado!"
        element.classList.add("is-applied");
        element.disabled = true;
    }
})