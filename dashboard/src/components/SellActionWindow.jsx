import { Link } from "react-router-dom";
import { useState , useContext} from "react";

import GeneralContext from './GeneralContext';
import "./BuyActionWindow.css";
import axios from 'axios';

const SellActionWindow = ({uid})=>{
    const [stockQuantity,setStockQuantity] = useState(1);
    const { closeSellWindow } = useContext(GeneralContext);

    const handleSellClick=()=>{
        axios.post('http://localhost:3002/newOrder',{
            name:uid,
            qty:stockQuantity,
            mode:"SELL",
            });
        closeSellWindow();
    };
    const handleCancelClick = ()=>{
            closeSellWindow();
    };

    return(
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input type="number" name="qty" id="qty" onChange={(e)=>setStockQuantity(e.target.value)} value={stockQuantity}/>
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required 140.65</span>
                <div>
                    <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
           </div>
            </div>
        </div>
    )
}

export default SellActionWindow;