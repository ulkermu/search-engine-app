import { useEffect, useState } from "react";

const Pagination = ({ pages, setCurrentPage }) => {
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
    setCurrentPage(currentButton)
  }, [currentButton, setCurrentPage])

  return (
    <div className="clearfix">
      <ul className="pagination">
        <li
          className={`${
            currentButton === 1 ? "page-prev disabled" : "page-prev"
          }`}
          onClick={() =>
            setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
          }
        >
          <a href="#!" className="page-links-a">
            Previous
          </a>
        </li>
        {numOfPages.map((page, i) => {
          return (
            <li
              key={i}
              className={`${
                currentButton === page ? "page-item active" : "page-item"
              }`}
              onClick={() => setCurrentButton(page)}
            >
              <a href="#!" className={currentButton === page ? "page-links white" : "page-links brown"}>
                {page}
              </a>
            </li>
          );
        })}
        <li
          className={`${
            currentButton === 1 ? "page-prev disabled" : "page-prev"
          }`}
          onClick={() =>
            setCurrentButton((prev) =>
              prev === numOfPages.length ? prev : prev + 1
            )
          }
        >
          <a href="#!" className="page-links-a">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
