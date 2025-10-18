// const boton = document.querySelectorAll (".button-search-job");
// console.log(boton)
// boton.forEach(boton => {
//     boton.addEventListener("click", ()=>{
//         boton.textContent = "Aplicado!";
//         boton.classList.add('is-applied')
//         boton.disabled = true;
        
//     })
// });

// const seccionFilters = document.querySelector(".search-filters") //se selecciona en el documento a la seccion search-filters
// const seccionResults = document.querySelector("#secionResultados") // se selecciona en el documento a la seccionResultados

// seccionFilters?.addEventListener('change', (event)=>{ //se escuchan el evento realizado en la search-filters en este caso el evento de cambio y por cada evento de este tipo se guardará el objetivo presionado y su valor en la constante llamada filtro
//   const filtro = event.target.value.toLowerCase()
//   console.log(filtro);

//   const articulos = seccionResults.querySelectorAll("article"); //se seleccionan todos los artículos dentro de la seccionResultados

//   articulos.forEach(articulo => { // se recorre el array artículo y cada uno de sus elementos

//     const textoP = articulo.querySelector("p")?.textContent.toLowerCase() || "" //se guarda una constante con el texto del párrafo en minusculas que contiene el artículo
//     const textoSmall = articulo.querySelector("small")?.textContent.toLowerCase() || "" // se guarda una constante con el texto small en minusculas que contiene el artículo
//     console.log(textoP);
//     console.log(textoSmall)
//     if(textoP.includes(filtro) || textoSmall.includes(filtro)){
//       articulo.style.display = "flex" //en caso de que el artículo cumpla con las condiciones se muestran los artículos que lo cumplan
//     }else{
//       articulo.style.display = "none" //se ocultan los articulos que no lo cumplen
//     }
    
//   });
// })



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