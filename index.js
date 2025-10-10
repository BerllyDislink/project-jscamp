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

seccionFilters?.addEventListener('change', (event)=>{
    const filtro = event.target //el event.target indica el elmento que se ve cambiando dentro de search-filters

    console.log(filtro) //imprime el elemento que se ve cambiado dentro de search-filters

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