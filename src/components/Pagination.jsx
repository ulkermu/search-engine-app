import ReactPaginate from "react-paginate";

const Pagination = ({ handleSelect, pageCount }) => {

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
        pageLinkClassName={"page-link"}
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