import { useEffect, useState } from "react";

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);
  const [pageNumberLimit, setPageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minpageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleNextButton = () => {
    setCurrentButton(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minpageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevButton = () => {
    setCurrentButton(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minpageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementButton = null;

  if(pages.length > maxPageNumberLimit) {
    pageIncrementButton = <li onClick={handleNextButton}> &hellip; </li>
  }

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <div className="clearfix">
      <ul className="pagination">
        <li
          className={`${
            currentButton === 1 ? "page-prev disabled" : "page-prev"
          }`}
          onClick={handlePrevButton}
        >
          <a href="#!" className="page-links-a">
            Previous
          </a>
        </li>
        {numOfPages.map((page, i) => {
          if (page < maxPageNumberLimit + 1 && page > minpageNumberLimit) {
            return (
              <li
                key={i}
                className={`${
                  currentButton === page ? "page-item active" : "page-item"
                }`}
                onClick={() => setCurrentButton(page)}
              >
                <a
                  href="#!"
                  className={
                    currentButton === page
                      ? "page-links white"
                      : "page-links brown"
                  }
                >
                  {page}
                  {pageIncrementButton}
                </a>
              </li>
            );
          } else {
            return null;
          }
        })}
        <li
          className={`${
            currentButton === 1 ? "page-prev disabled" : "page-prev"
          }`}
          onClick={handleNextButton}
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

/*
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
*/
