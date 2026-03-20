import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from 'axios';



const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allOrders", { withCredentials: true }).then((res)=>{
      setAllOrders(res.data);
    })
  },[]);
  return (
    <>
      <h3 className="title">Your Orders({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>Cur. val</th>
          </tr>
          <tbody>
          {allOrders.map((stock,index)=>{
            const curValue= stock.price*stock.qty;

          return(
            <tr key={index} >
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
            </tr>
            )
          })}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default Orders;