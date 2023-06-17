import React, {useEffect} from "react"
import "./Paginado.css"

const Paginate = ({ recipesPerPage, allRecipes, paginate, currentPage }) => {
    useEffect(() => {
        paginate(1);
    }, [allRecipes]);

    const pageNum = [];

    for (let i = 0; i < Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNum.push(i + 1);
    }

  return (
    <nav>
      <ul className="ul">
        {pageNum.map((nPag) => (
          <li key={nPag}>
            <button
              className={
                currentPage === nPag ? "container current" : "container"
              }
              onClick={() => paginate(nPag)}
            >
              {nPag}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Paginate