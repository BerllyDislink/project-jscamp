const container = document.querySelector("#secionResultados") // se crea el contenedor en donde guardaremos nuestros articulos

fetch("./data.json") //se obtiene los datos de los artículos

.then((response =>{ // se regresa la data en formato json
    return response.json()
}))

.then((jobs =>{ //se pasan los datos de antes formato de arreglo
    
    jobs.forEach(job => { //se recorrer cada elemento de nuestro arreglo que tiene formato json
    const article = document.createElement("article") // se hace la creacion de un elemento article 

    article.dataset.modalidad = job.data.modalidad //ese elemento article contará con los siguientes dataset
    article.dataset.nivel = job.data.nivel
    article.dataset.technology = Array.isArray(job.data.technology) ? job.data.technology.join(",") : job.data.technology // ya que el data technology puede ser un array, en caso de serlo se crea un string que divide cada elemento dentro del array por una coma


    // se ingresan los datos dentro del html del article 
    article.innerHTML = `<div> 
    <h3>
    ${job.titulo}
    </h3>
    <small>
    ${job.empresa} || ${job.ubicacion}
    </small>
    <br><br>
    <p>
    ${job.descripcion}
    </P>
    </div>
    <div>
        <button class="button-search-job" type="submit">
            Aplicar
        </button>
    </div>
    `
    

    container.appendChild(article) // se guarda el article dentro del contenedor, que viene siendo su hijo.
    });
    
}))