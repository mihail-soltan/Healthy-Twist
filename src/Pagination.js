import React from 'react'

const Pagination = ({ recipesPerPage, totalRecipes, paginate }) => {
    const pageNumbers = []

    for (let i=1; i<= Math.ceil(totalRecipes/recipesPerPage); i++){
        pageNumbers.push(i)
    } 
    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="pages">
                        <span role="button"onClick={() => paginate(number)}>
                            {number}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Pagination 
