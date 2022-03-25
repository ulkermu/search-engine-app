import orderIcon from "../img/iconfinder.png";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const OrderBy = () => {
  const [order, setOrder] = useState("ascending");
  const [dateOrder, setDateOrder] = useState("ASC");

  const { user, setUser } = useContext(UserContext);

  //* String Sortings functions;
  const sortingAsc = () => {
    if (order === "ascending") {
      const sorted = [...user].sort((a, b) => (a > b ? 1 : -1));
      setUser(sorted);
      setOrder("descending");
    }
  };

  const sortingDsc = () => {
    if (order === "descending") {
      const sorted = [...user].sort((a, b) => (a > b ? -1 : 1));
      setUser(sorted);
      setOrder("ascending");
    }
  };

  //* Date Sorting Functions.
  const sortingDateAsc = () => {
    if (dateOrder === "ASC") {
      const sortedDate = [...user].sort(
        (a, b) =>
          new Date(...a[3].split("/").reverse()) -
          new Date(...b[3].split("/").reverse())
      );
      setUser(sortedDate);
      setDateOrder("DSC");
    }
  };

  const sortingDateDsc = () => {
    if (dateOrder === "DSC") {
      const sortedDate = [...user].sort(
        (a, b) =>
          new Date(...b[3].split("/").reverse()) -
          new Date(...a[3].split("/").reverse())
      );
      setUser(sortedDate);
      setDateOrder("ASC");
    }
  };

  const popover = (
    <Popover id="popover-basic" className="order-poop">
      <Popover.Body onClick={() => sortingAsc(user[0])} className="order-by">
        Name ascending
      </Popover.Body>
      <Popover.Body onClick={() => sortingDsc(user[0])} className="order-by">
        Name descending
      </Popover.Body>
      <Popover.Body onClick={() => sortingDateAsc(user[3])} className="order-by">
        Year ascending
      </Popover.Body>
      <Popover.Body onClick={() => sortingDateDsc(user[3])} className="order-by">
        Year descending
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="">
        <img src={orderIcon} alt="Finder" />
        Order By
      </Button>
    </OverlayTrigger>
  );
};

export default OrderBy;
