import {useId} from "react";

export default function FiltroBusqueda({onTextFilter, onChange, filters}){

    // const idText = useId();
    // const idTechnology = useId();
    // const idLocation = useId();
    // const idLevel = useId();

    const handleChange = (event) => {
        event.preventDefault();
    
        const { name, value } = event.target;
    
        const newFilters = {
            ...filters, // filtros actuales del estado o props
            [name]: value // solo actualiza el que cambió
        };
    
        onChange(newFilters);
    };
    

    const handleTextChange = (event) => {
        onTextFilter(event.target.value);
    };
    
    
    return(
        <div>
        <h1>
            Encuentra tu próximo trabajo
        </h1>
        <p>
            Explora miles de oportunidades en el sector tecnológico
        </p>
        <form action="" id="formResultSearch">
            <div id="search-bar">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            <input id="busqueda" required type="text" placeholder="Buscar trabajos, emrpesas o habilidades" onChange={handleTextChange} />
            </div>
            <div className="search-filters">
            <select name="technology" id="Tecnología" onChange={handleChange}>
                    <option value="">Tecnología</option>
                    <option value="react">React</option>
                    <option value="node">Node.js</option>
                    <option value="javascript">Javascript</option>
                    <option value="python">Python</option>
                    <option value="mobile">Mobile</option>
                </select>
                <select name="location" id="Ubicacion" onChange={handleChange}>
                    <option value="">Ubicación</option>
                    <option value="remoto">Remoto</option>
                    <option value="cdmx">Ciudad de México</option>
                    <option value="guadalajara">Guadalajara</option>
                    <option value="barcelona">Barcelona</option>
                    <option value="bsas">Buenos Aires</option>
                    <option value="madrid">Madrid</option>
                    <option value="valencia">Valencia</option>
                    <option value="bogota">Bogotá</option>
                    <option value="lima">Lima</option>
                    <option value="santiago">Santiago de Chile</option>
                    <option value="monterrey">Monterrey</option>
                </select>
                <select name="level" id="nivel_de_experiencia" onChange={handleChange}>
                    <option value="">Nivel de experiencia</option>
                    <option value="junior">Junior</option>
                    <option value="mid-level">Mid-level</option>
                    <option value="senior">Senior</option>
                </select>
            </div>
        </form>
        </div>
        
    )
}

