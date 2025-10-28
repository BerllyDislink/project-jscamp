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

const seccionResults = document.querySelector("#secionResultados") //se obtiene la seccion resultados
const seccionFilters = document.querySelector(".search-filters"); // se obtiene la seccion de los filtros 




seccionFilters?.addEventListener('change', ()=>{ // se activa un evento en la seccion filtros cada que se haga un cambio en uno de los filtros

    const filterTecnology = document.querySelector("#Tecnología")?.value || ""; // se selecciona el valor del cambio hecho en cada uno de los select de la seccion filtro
    const filterLocation = document.querySelector("#Ubicacion")?.value || "";
    const filterLevel = document.querySelector("#nivel_de_experiencia")?.value || "";



const articles = seccionResults.querySelectorAll("article"); // se seleccionan todos los article en seccionResults
    


articles.forEach(article => { // se hace bucle para cada article dentro de articles
    const modalidad = article.dataset.modalidad; // se seleccionan 3 valores dataset dentro de nuestros articulos, que nos ayudarán a filtrar
    const nivel = article.dataset.nivel; // se guardan los valores en constantres
    const technology = article.dataset.technology

    const cumpleModalidad = filterLocation === "" || filterLocation === modalidad // se verifica que los filtros cumplan con los valores dentro de los dataset de los artículos
    const cumpleLevel = filterLevel === "" || filterLevel === nivel || (filterLevel === "mid" && filterLevel === "mid-level") || (filterLevel === "mid-level" && filterLevel === "mid")
    const cumpleTechnology = filterTecnology === "" || technology.includes(filterTecnology) || filterTecnology === technology  //en la segunda condición se verifica que si es un arreglo tecnology incluya alguno de los filtros seleccionados
    
    const isShown = cumpleModalidad && cumpleLevel && cumpleTechnology // se crea una constante que guarda el valor en caso se cumplan todos los filtros

    if(isShown){ // en caso de que se cumplan todos los filtros se se remueve la class hidden en los article
        article.classList.remove("is-hidden")
    }else{
        article.classList.add("is-hidden") // en caso de que no se cumplan todos los filtros se añade la clase is hidden que oculta los artículos.
    }
});

})





