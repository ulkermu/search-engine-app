import ReactPaginate from "react-paginate";

const Pagination = ({ pages, handleSelect, pageCount }) => {
  
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  return (
    <div>
      <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={'...'}
        pageCount={pageCount}
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