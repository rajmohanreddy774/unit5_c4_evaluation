export const NewOrder = () => {
  return (
    <div>
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
        />
       
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          readOnly
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
        />
     
        <button className="submit">submit</button>
      </div>
      <div className="pastOrders">
        <button className="filter">
        </button>
        <div className="past-orders">
          <span className="id"></span>. <span className="problem"></span>{" "}
          <span className="cost">
          </span>
          <p className="status">Status: </p>
          <hr />
        </div>
      </div>
    </div>
  );
};
