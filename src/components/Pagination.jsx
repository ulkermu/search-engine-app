import ReactPaginate from "react-paginate";

const Pagination = ({ pages, setCurrentPage }) => {
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }
  const handleSelect = (data) => {
    setCurrentPage(data.selected + 1)
  }

  return (
    <div>
      <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={'...'}
        pageCount={pages}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handleSelect}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-links"}
        previousClassName={"page-prev"}
        previousLinkClassName={"page-links"}
        nextClassName={"page-prev"}
        nextLinkClassName={"page-links"}
        activeClassName={"active"}        
        />
    </div>
  );
};

export default Pagination;