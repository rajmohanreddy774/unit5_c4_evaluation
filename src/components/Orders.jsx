import axios from "axios";
import { useState, useEffect } from "react";

export const Orders = () => {
  
    const [order, setOrder] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/orders").then((res)=>
        setOrder(res.data))
    },[]);
    console.log(order);
  
    return (
      <div>
          {order.map((e)=>(
        <div>
          <div>
            <select className="controls" name="progress" id="progress">
              <option value="id">ID</option>
              <option value="status">Status</option>
              <option value="cost">Cost</option>
            </select>
          </div>
          <table className="orders">
            <thead>
              <tr>
                <th>ID</th>
                <th>Problem</th>
                <th>Client Name</th>
                <th>Status</th>
                <th>Cost</th>
                <th>Change Status</th>
                <th>Accept</th>
              </tr>
            </thead>
            <tbody>
              <tr className="orders-row">
                <td className="id">{e.id}</td>
                <td className="problem">{e.problem}</td>
                <td className="owner">{e.owner_name}</td>
                <td className="status">{e.brand}</td>
                <td className="cost">{e.cost}</td>
                <td className="change-status">
                <select className="changeStatus" name="changeStatus">
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                    <option value="Not Accepted">Not Accepted</option>
                  </select>
                </td>
                <td className="accept">
                  <button>Accept</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
          ))}
      </div>
    );
  };