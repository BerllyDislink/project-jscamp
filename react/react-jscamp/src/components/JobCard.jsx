 import {useState} from "react";
 export default function JobCard({job}){
    
    const [isApplied, setIsApplied] = useState(false);

    const handleApply = () => {
        setIsApplied(true);
    }

    const buttonClass = isApplied ? "button-search-job isApplied" : "button-search-job";
    const buttonText = isApplied ? "¡Aplicado!" : "Aplicar";

    return(
        <article className="job-card"
        data-modalidad={job.data.modalidad}
        data-nivel={job.data.nivel}
        data-technology={Array.isArray(job.data.technology) ? job.data.technology.join(",") : job.data.technology}
        >
            <div>
            <h3 className="job-title">{job.titulo}</h3>
            <small>
                {job.empresa} || {job.ubicacion}
            </small>
            <br /><br />
            <p>
                {job.descripcion}
            </p>
            </div>
            <div>
                <button className={buttonClass} onClick={handleApply}>
                    {buttonText}
                </button>
            </div>
        </article>
    )
 }

