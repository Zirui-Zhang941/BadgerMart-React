import { Button } from "react-bootstrap";
import { useEffect, useState } from "react"

export default function BadgerSaleItem(props) {

    const [itemnum, setItemnum] = useState(0);
    function increase(){
        setItemnum(itemnum+1);
    }
    function decrease(){
        
        setItemnum(itemnum-1);
        
    }
    return <div>
        <h2 style={{fontWeight: props.featured ? "bold" : "normal",color: props.featured ? "red" : "normal" }}>{props.name}</h2>
        <div>
            <p style={{ color: props.featured ? "red" : "normal" }}>{props.description}</p>
            <p style={{fontWeight: props.featured ? "bold" : "normal",color: props.featured ? "red" : "normal" }}>${props.price}</p>
            <Button className="inline"
                onClick={decrease} disabled={itemnum <= 0}
            >-</Button>
            <p className="inline">{itemnum}</p>
            <Button className="inline"
                onClick={increase}
            >+</Button>
        </div>
    </div>
}