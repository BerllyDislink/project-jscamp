import styles from "../pagination.module.css";

export function Pagination({totalPages, currentPage, onPageChange}){
    //generar un array de numeros del 1 al totalPages
    const pages = Array.from({length: totalPages}, (_, index) => index + 1);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const stylePrevButton = isFirstPage ? {pointerEvents: "none", opacity: 0.5} : {};
    const styleNextButton = isLastPage ? {pointerEvents: "none", opacity: 0.5} : {};

    const handlePrevPage = (event) => {
        event.preventDefault();
        if(!isFirstPage){
            onPageChange(currentPage - 1);
        }
    }
    const handleNextPage = (event) => {
        event.preventDefault();
        if(!isLastPage){
            onPageChange(currentPage + 1);
        }
    }

    const handleChangePage = (event) =>{
        event.preventDefault();
        const page = Number(event.target.dataset.page);
        if(page !== currentPage){
            onPageChange(page);
        }
    }
    
    return(
        <nav className={styles.pagination}> 
        <a href="#" className={styles.stylePrevButton} onClick={handlePrevPage}>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>   
        </a>
        {pages.map((page) => (
            <a href="#" key={page} data-page={page} onClick={handleChangePage} className={page === currentPage ? styles.isActive : ""}>
                {page}
            </a>
        ))}
        <a href="#" className={styles.styleNextButton} onClick={handleNextPage}>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>   
        </a>
        </nav>
        
    )
}
