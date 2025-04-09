import './counterApp.css';
import { useState} from "react";

const Counter=()=>{
    const [count, setCount] = useState(0);
    const [backgrroundColor, setBackgroundColor] = useState(true);

    const bgColor = backgrroundColor? "" : "bg2";
    // setCount(count + 1)//count=5
    const onIncrement = ()=> {
        setCount(count + 1)
    }
    const onDecrement = () => {
        console.log(count);
        setCount(count - 1)
    }
    let bg1 = "";
    let bg2 = "";
    const reset = () => {
        console.log(backgrroundColor)
        setBackgroundColor(backgrroundColor);
        console.log(backgrroundColor);
        setCount(0);

    }
     if (count < 0) {
        console.log(count);
        setCount(0);

     }

     if (count >= 5) {
        bg1 = "bg1";
     }
     if (count ===5) {
        bg2 = "b2";
     }
}

export default Counter;

