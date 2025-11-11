import { useState } from 'react'
import './index.css'
import JobList from './pages/JobList'
import Header from './components/Header'
import FiltroBusqueda from './components/FiltroBusqueda'
import Footer from './components/Footer'
import { Pagination } from './components/pagination'

import jobs from './data.json'

const ITEMS_PER_PAGE = 3;

function App() {

  const [filters, setFilters] = useState({
    technology: '',
    location: '',
    level: '',
  })
  const [textFilter, setTextFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredJobs = jobs.filter(job => {
    const tech = job.data?.technology; // optional chaining para evitar undefined
  
    const techMatch =
      filters.technology === '' ||
      (Array.isArray(tech) ? tech.includes(filters.technology) : tech === filters.technology);
  
    const locationMatch = filters.location === '' || job.data?.modalidad === filters.location;
    const levelMatch = filters.level === '' || job.data?.nivel === filters.level;
  
    // Solo incluye el trabajo si cumple todos los filtros
    return techMatch && locationMatch && levelMatch;
  });
  
  
  const jobTextFilter = textFilter === '' ? filteredJobs : filteredJobs.filter(job => {
    return job.titulo.toLowerCase().includes(textFilter.toLowerCase()) || job.empresa.toLowerCase().includes(textFilter.toLowerCase()) || job.descripcion.toLowerCase().includes(textFilter.toLowerCase())
  })

  const totalPages = Math.ceil(jobTextFilter.length / ITEMS_PER_PAGE)

  const pagedResults = jobTextFilter.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, // (1-1) * 4 = 0, (2-1) * 4 = 4 --> (0,4)
    currentPage * ITEMS_PER_PAGE        // (1*4) = 4, (2*4) = 8         ---> (4,8) 
  )

  const handlePagechange = (page) =>{
    setCurrentPage(page)
  }

  const handleFilterChange = (filters) =>{
    setFilters(filters)
    setCurrentPage(1)
  }

  const handleTextFilter = (newText) => {
    setTextFilter(newText)
    setCurrentPage(1)
  }
  return (
    <div className='app'>
       <Header/>
      <main>
        <section id='secionResultSearch'>
        <FiltroBusqueda filters={filters} onTextFilter={handleTextFilter} onChange={handleFilterChange} />
        </section>
        <section id='secionResultados'>
          <>
      <h2>
        Trabajos disponibles
      </h2>
        <JobList jobs={pagedResults} />
        </>
        </section>
       <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePagechange} />
      </main>
      <Footer/>
    </div>
  )
}

export default App
