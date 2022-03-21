import { useState } from "react";

const Pagination = () => {
    const pages = 5;
    const numOfPages = [];

    for (let i=1; i<=pages; i++) {
        numOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);


    return (
        <div className="clearfix">
            <ul className="pagination">
                <li className={`${currentButton === 1 ? "page-item disabled" : "page-item"}`} onClick={ () => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}><a href="#!" className="page-link">Previous</a></li>
                <li className={`${currentButton === 1 ? "page-item disabled" : "page-item"}`} onClick={ () => setCurrentButton((next) => next === 1 ? next : next + 1)}><a href="#!" className="page-link">Next</a></li>
            </ul>
        </div>
    )
}

export default Pagination;